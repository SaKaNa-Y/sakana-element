import { resolve } from 'node:path';
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
import type { HeadConfig } from 'vitepress';
import { defineConfig } from 'vitepress';
import { CATEGORIES, getCategorySidebarItems, type Locale } from './data/componentData';

const HOSTNAME = 'https://sakana-element-docs.vercel.app';

// Shared sidebar configuration
const getGuideItems = (lang: Locale) => [
  {
    text: lang === 'zh' ? '快速开始' : 'Getting Started',
    link: `/${lang}/get-started`,
  },
  {
    text: lang === 'zh' ? '深色模式' : 'Dark Mode',
    link: `/${lang}/dark-mode`,
  },
  {
    text: lang === 'zh' ? 'ConfigProvider 全局配置' : 'ConfigProvider',
    link: `/${lang}/components/config-provider`,
  },
];

const getSidebar = (lang: Locale) => [
  {
    text: lang === 'zh' ? '组件总览' : 'All Components',
    link: `/${lang}/components/`,
  },
  {
    text: lang === 'zh' ? '指南' : 'Guide',
    collapsed: false,
    items: getGuideItems(lang),
  },
  ...CATEGORIES.map((cat) => ({
    text: cat.name[lang],
    collapsed: false,
    items: getCategorySidebarItems(cat, lang),
  })),
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sakana Element',
  description: 'A Pixel-style Vue 3 Component Library',
  base: '/',
  appearance: true, // Enable dark mode

  sitemap: {
    hostname: HOSTNAME,
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    // SEO meta tags
    [
      'meta',
      {
        name: 'keywords',
        content:
          'pixel component library, sakana component library, vue 3 component library, pixel UI, retro game UI, 像素组件库, 像素风格 Vue 组件库, sakana element',
      },
    ],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Sakana Element' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Sakana Element - Pixel-style Vue 3 Component Library',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'A pixel-style Vue 3 component library with retro game aesthetics. Built with TypeScript, tree-shakable, dark mode support.',
      },
    ],
    ['meta', { property: 'og:url', content: `${HOSTNAME}/` }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:title',
        content: 'Sakana Element - Pixel-style Vue 3 Component Library',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'A pixel-style Vue 3 component library with retro game aesthetics. Built with TypeScript, tree-shakable, dark mode support.',
      },
    ],
    // Structured Data (JSON-LD)
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        name: 'Sakana Element',
        description: 'A pixel-style Vue 3 component library with retro game aesthetics',
        url: `${HOSTNAME}/`,
        codeRepository: 'https://github.com/SaKaNa-Y/sakana-element',
        programmingLanguage: ['TypeScript', 'Vue'],
        runtimePlatform: 'Vue 3',
        license: 'https://opensource.org/licenses/ISC',
      }),
    ],
  ],

  transformHead({ pageData }) {
    const head: HeadConfig[] = [];
    const relativePath = pageData.relativePath;

    // Canonical URL
    const canonicalUrl = `${HOSTNAME}/${relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html');
    head.push(['link', { rel: 'canonical', href: canonicalUrl }]);

    // hreflang alternate links for bilingual pages
    if (relativePath.startsWith('zh/')) {
      const enPath = relativePath.replace(/^zh\//, 'en/');
      const zhUrl = canonicalUrl;
      const enUrl = `${HOSTNAME}/${enPath}`.replace(/index\.md$/, '').replace(/\.md$/, '.html');
      head.push(
        ['link', { rel: 'alternate', hreflang: 'zh-CN', href: zhUrl }],
        ['link', { rel: 'alternate', hreflang: 'en-US', href: enUrl }],
        ['link', { rel: 'alternate', hreflang: 'x-default', href: enUrl }],
      );
    } else if (relativePath.startsWith('en/')) {
      const zhPath = relativePath.replace(/^en\//, 'zh/');
      const enUrl = canonicalUrl;
      const zhUrl = `${HOSTNAME}/${zhPath}`.replace(/index\.md$/, '').replace(/\.md$/, '.html');
      head.push(
        ['link', { rel: 'alternate', hreflang: 'zh-CN', href: zhUrl }],
        ['link', { rel: 'alternate', hreflang: 'en-US', href: enUrl }],
        ['link', { rel: 'alternate', hreflang: 'x-default', href: enUrl }],
      );
    } else if (relativePath === 'index.md') {
      head.push(
        ['link', { rel: 'alternate', hreflang: 'zh-CN', href: `${HOSTNAME}/zh/` }],
        ['link', { rel: 'alternate', hreflang: 'en-US', href: `${HOSTNAME}/en/` }],
        ['link', { rel: 'alternate', hreflang: 'x-default', href: `${HOSTNAME}/en/` }],
      );
    }

    return head;
  },
  vite: {
    resolve: {
      alias: {
        // Resolve to source so VitePress collects scoped component CSS from .vue files
        'sakana-element': resolve(__dirname, '../../core/index.ts'),
      },
    },
  },
  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      description:
        'Sakana Element - 像素风格 Vue 3 组件库 | 复古游戏美学，TypeScript 支持，按需引入，深色模式，像素组件库',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/get-started' },
          { text: '组件', link: '/zh/components/' },
        ],
        sidebar: {
          '/zh/': getSidebar('zh'),
        },
        outline: {
          label: '页面导航',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description:
        'Sakana Element - A pixel-style Vue 3 component library with retro game aesthetics, TypeScript support, tree-shaking, and dark mode',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/get-started' },
          { text: 'Components', link: '/en/components/' },
        ],
        sidebar: {
          '/en/': getSidebar('en'),
        },
        outline: {
          label: 'On this page',
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
      },
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/SaKaNa-Y/sakana-element' }],
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
