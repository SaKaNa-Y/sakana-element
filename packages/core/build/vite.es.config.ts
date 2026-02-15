//es打包需要打包工具
//当使用 import 语法时，会自动选择 ES 模块格式

import { Buffer } from 'node:buffer';
import { readdir, readdirSync } from 'node:fs';
import { resolve } from 'node:path'; //路径解析
import terser from '@rollup/plugin-terser'; //压缩插件
import { hooksPlugin as hooks } from '@sakana-element/vite-plugins'; //导入hooksPlugin
import vue from '@vitejs/plugin-vue'; //vue插件，不引入jsx是因为jsx只在测试中使用
import { defer, delay, filter, map } from 'lodash-es';
import shell from 'shelljs'; //导入shelljs，用于删除文件
import { defineConfig } from 'vite'; //vite的defineConfig
import dts from 'vite-plugin-dts'; //dts插件，当用户安装并使用你的组件库时，TypeScript 能够自动找到这些声明文件，提供代码补全和类型检查功能。

const TRY_MOVE_STYLES_DELAY = 800 as const; //常量

const isProd = process.env.NODE_ENV === 'production'; //是否是生产环境
const isDev = process.env.NODE_ENV === 'development'; //是否是开发环境
const isTest = process.env.NODE_ENV === 'test'; //是否是测试环境

function getDirectoriesSync(basePath: string) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name,
  );
}

function moveStyles() {
  readdir('./dist/es/theme', (err) => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
    defer(() => shell.mv('./dist/es/theme', './dist'));
  });
}

/**
 * Vite library mode force-inlines all CSS url() assets as base64.
 * The zpix.ttf font (~6.9MB) becomes a ~9.3MB base64 string embedded in CSS,
 * causing stack overflows in downstream Vite consumers.
 *
 * This plugin reverses that: it finds base64 font data URLs in CSS bundles,
 * decodes them back to binary, emits a separate font file, and rewrites
 * the CSS to reference the file by path.
 */
function extractBase64FontsPlugin(): import('vite').Plugin {
  return {
    name: 'extract-base64-fonts',
    enforce: 'post',
    generateBundle(_, bundle) {
      const dataUrlRe = /url\(\s*"?data:font\/[^;]+;base64,([A-Za-z0-9+/=]+)"?\s*\)/g;

      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type !== 'asset' || !/\.css$/i.test(fileName)) continue;

        const css =
          typeof chunk.source === 'string' ? chunk.source : new TextDecoder().decode(chunk.source);

        if (!dataUrlRe.test(css)) continue;
        dataUrlRe.lastIndex = 0; // reset after test()

        const newCss = css.replace(dataUrlRe, (_match, b64) => {
          const fontData = Buffer.from(b64, 'base64');
          const fontPath = 'theme/fonts/zpix.ttf';

          this.emitFile({
            type: 'asset',
            fileName: fontPath,
            source: fontData,
          });

          // Compute relative path from CSS location to font
          const cssDir = fileName.includes('/')
            ? fileName.substring(0, fileName.lastIndexOf('/'))
            : '.';
          const depth = cssDir === '.' ? 0 : cssDir.split('/').length;
          const prefix = depth > 0 ? '../'.repeat(depth) : './';

          return `url("${prefix}${fontPath}")`;
        });

        chunk.source = newCss;
      }
    },
  };
}

export default defineConfig({
  plugins: [
    vue(), //vue插件
    dts({
      tsconfigPath: '../../tsconfig.build.json',
      outDir: 'dist/types',
    }), //生成类型文件
    hooks({
      rmFiles: ['./dist/es', './dist/theme', './dist/types'],
      afterBuild: moveStyles,
    }), //删除文件
    extractBase64FontsPlugin(),
    terser({
      compress: {
        sequences: isProd, // 在生产环境下启用序列优化，将多个语句合并成一条语句
        arguments: isProd, // 在生产环境下启用参数优化，将多个参数合并成一个参数
        drop_console: isProd, // 在生产环境下删除所有console语句
        drop_debugger: isProd, // 在生产环境下删除debugger
        passes: isProd ? 4 : 1, // 压缩次数，生产环境4次，开发环境1次
        global_defs: {
          '@DEV': JSON.stringify(isDev), // 在开发环境下定义DEV
          '@PROD': JSON.stringify(isProd), // 在生产环境下定义PROD
          '@TEST': JSON.stringify(isTest), // 在测试环境下定义TEST
        },
      },
      format: {
        semicolons: false, // 不添加分号
        shorthand: isProd, // 在生产环境下使用简写语法
        braces: !isProd, // 在开发环境下保留大括号
        beautify: !isProd, // 在开发环境下美化代码
        comments: !isProd, // 在开发环境下保留注释
      },
      mangle: {
        toplevel: isProd, // 在生产环境下混淆顶级变量名
        eval: isProd, // 在生产环境下允许 eval 中的代码混淆
        keep_classnames: isDev, // 在开发环境下保留类名
        keep_fnames: isDev, // 在开发环境下保留函数名
      },
    }), //压缩插件
  ], //插件
  build: {
    //构建配置
    outDir: 'dist/es', //输出目录
    minify: false, //压缩配置
    cssCodeSplit: true, //css代码分割
    lib: {
      //库配置
      entry: resolve(__dirname, '../index.ts'), //入口文件
      name: 'SakanaElement', //库名
      fileName: 'index', //文件名
      formats: ['es'], //格式
      cssFileName: 'style', //保持CSS文件名为style.css，兼容Vite 6
    },
    rollupOptions: {
      //rollup配置,rollup是vite的打包工具
      external: ['vue', '@popperjs/core', 'async-validator'], //外部依赖
      output: {
        //输出配置
        assetFileNames: (assetInfo) => {
          // 如果是 style.css 文件，则重命名为 index.css
          if (assetInfo.name === 'style.css') return 'index.css';

          // Handle font files - place in theme/fonts directory
          if (/\.(woff2?|ttf|eot)$/i.test(assetInfo.name as string)) {
            return 'theme/fonts/[name].[ext]';
          }

          // Handle paintworklet JS files - place in theme/paintworklet directory
          if (/paintworklet.*\.js$/i.test(assetInfo.name as string)) {
            return 'theme/paintworklet/[name].[ext]';
          }

          if (
            //如果是静态资源或符合css后缀的文件则返回到theme文件夹
            assetInfo.type === 'asset' &&
            /\.(css)$/i.test(assetInfo.name as string)
          ) {
            return 'theme/[name].[ext]';
          }
          return assetInfo.name as string;
        },
        manualChunks(id) {
          //手动分包
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks';
          }
          if (id.includes('/packages/utils') || id.includes('plugin-vue:export-helper')) {
            return 'utils';
          }
          for (const dirName of getDirectoriesSync('../components/')) {
            if (id.includes(`/packages/components/${dirName}`)) {
              return dirName;
            }
          }
        },
      },
    },
  },
});
