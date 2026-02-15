//umd可以在多种环境下使用
//当使用 require 语法时，会自动选择 UMD 格式

import { readFile } from 'node:fs'; //同步读取文件
import { resolve } from 'node:path'; //路径解析
import terser from '@rollup/plugin-terser'; //压缩插件
import { hooksPlugin as hooks } from '@sakana-element/vite-plugins'; //导入hooksPlugin
import vue from '@vitejs/plugin-vue'; //vue插件，不引入jsx是因为jsx只在测试中使用
import { defer, delay } from 'lodash-es'; //延迟函数
import shell from 'shelljs'; //导入shelljs，用于删除文件
import type { Plugin } from 'vite';
import { defineConfig } from 'vite'; //vite的defineConfig
import { compression } from 'vite-plugin-compression2'; //压缩插件,压缩成gzip

const TRY_MOVE_STYLES_DELAY = 800 as const; //常量

const isProd = process.env.NODE_ENV === 'production'; //是否是生产环境
const isDev = process.env.NODE_ENV === 'development'; //是否是开发环境
const isTest = process.env.NODE_ENV === 'test'; //是否是测试环境
function moveStyles() {
  readFile('./dist/umd/index.css.gz', (err) => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLES_DELAY);
    defer(() => shell.cp('./dist/umd/index.css', './dist/index.css'));
  });
}

/**
 * UMD counterpart of extractBase64FontsPlugin.
 * Replaces base64 font data URLs with a relative path to the font file
 * emitted by the ES build (dist/theme/fonts/zpix.ttf).
 * moveStyles copies dist/umd/index.css → dist/index.css, so
 * ./theme/fonts/zpix.ttf resolves correctly from dist/.
 */
function extractBase64FontsPlugin(): Plugin {
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
        dataUrlRe.lastIndex = 0;

        chunk.source = css.replace(dataUrlRe, () => `url("./theme/fonts/zpix.ttf")`);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    vue(),
    compression({
      include: /.(cjs|css)$/i,
    }),
    extractBase64FontsPlugin(),
    terser({
      compress: {
        drop_console: true, // 删除所有console语句
        drop_debugger: true,
        passes: 3,
        global_defs: {
          '@DEV': JSON.stringify(isDev),
          '@PROD': JSON.stringify(isProd),
          '@TEST': JSON.stringify(isTest),
        },
      },
    }),
    hooks({
      rmFiles: ['./dist/umd', './dist/index.css'],
      afterBuild: moveStyles,
    }),
  ], //插件
  build: {
    //构建配置
    outDir: 'dist/umd', //输出目录
    lib: {
      //库配置
      entry: resolve(__dirname, '../index.ts'), //入口文件
      name: 'SakanaElement', //库名
      fileName: 'index', //文件名
      formats: ['umd'], //格式
      cssFileName: 'style', //保持CSS文件名为style.css，兼容Vite 6
    },
    rollupOptions: {
      //rollup配置,rollup是vite的打包工具
      external: ['vue'], //外部依赖，为了让用户安装时只要额外安装vue即可，导致包会变大
      output: {
        //输出配置
        exports: 'named', //导出方式
        globals: {
          // 为外部依赖指定全局变量名，当使用 UMD 格式时，外部依赖需要通过全局变量获取
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          // 如果是 style.css 文件，则重命名为 index.css
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name as string;
        },
      },
    },
  },
});
