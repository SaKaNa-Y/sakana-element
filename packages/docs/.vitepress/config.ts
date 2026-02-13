import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
import { defineConfig } from 'vitepress';

// Shared sidebar configuration
const getGuideItems = (lang: 'zh' | 'en') => [
  {
    text: lang === 'zh' ? '快速开始' : 'Getting Started',
    link: `/${lang}/get-started`,
  },
];

const getBasicItems = (lang: 'zh' | 'en') => [
  {
    text: lang === 'zh' ? 'Button 按钮' : 'Button',
    link: `/${lang}/components/button`,
  },
  {
    text: lang === 'zh' ? 'Icon 图标' : 'Icon',
    link: `/${lang}/components/icon`,
  },
];

const getFormItems = (lang: 'zh' | 'en') => [
  {
    text: lang === 'zh' ? 'Input 输入框' : 'Input',
    link: `/${lang}/components/input`,
  },
  {
    text: lang === 'zh' ? 'Select 选择器' : 'Select',
    link: `/${lang}/components/select`,
  },
  {
    text: lang === 'zh' ? 'Switch 开关' : 'Switch',
    link: `/${lang}/components/switch`,
  },
  {
    text: lang === 'zh' ? 'Form 表单' : 'Form',
    link: `/${lang}/components/form`,
  },
];

const getDataItems = (lang: 'zh' | 'en') => [
  {
    text: lang === 'zh' ? 'Collapse 折叠面板' : 'Collapse',
    link: `/${lang}/components/collapse`,
  },
];

const getFeedbackItems = (lang: 'zh' | 'en') => [
  {
    text: lang === 'zh' ? 'Alert 提示' : 'Alert',
    link: `/${lang}/components/alert`,
  },
  {
    text: lang === 'zh' ? 'Message 消息' : 'Message',
    link: `/${lang}/components/message`,
  },
  {
    text: lang === 'zh' ? 'Notification 通知' : 'Notification',
    link: `/${lang}/components/notification`,
  },
  {
    text: lang === 'zh' ? 'MessageBox 消息弹框' : 'MessageBox',
    link: `/${lang}/components/message-box`,
  },
  {
    text: lang === 'zh' ? 'Loading 加载' : 'Loading',
    link: `/${lang}/components/loading`,
  },
  {
    text: lang === 'zh' ? 'Tooltip 文字提示' : 'Tooltip',
    link: `/${lang}/components/tooltip`,
  },
  {
    text: lang === 'zh' ? 'Popconfirm 气泡确认框' : 'Popconfirm',
    link: `/${lang}/components/popconfirm`,
  },
  {
    text: lang === 'zh' ? 'Dropdown 下拉菜单' : 'Dropdown',
    link: `/${lang}/components/dropdown`,
  },
];

const getSidebar = (lang: 'zh' | 'en') => [
  {
    text: lang === 'zh' ? '指南' : 'Guide',
    collapsed: false,
    items: getGuideItems(lang),
  },
  {
    text: lang === 'zh' ? '基础组件' : 'Basic',
    collapsed: false,
    items: getBasicItems(lang),
  },
  {
    text: lang === 'zh' ? '表单组件' : 'Form',
    collapsed: false,
    items: getFormItems(lang),
  },
  {
    text: lang === 'zh' ? '数据展示' : 'Data Display',
    collapsed: false,
    items: getDataItems(lang),
  },
  {
    text: lang === 'zh' ? '反馈组件' : 'Feedback',
    collapsed: false,
    items: getFeedbackItems(lang),
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sakana Element',
  description: 'A Pixel-style Vue 3 Component Library',
  base: '/',
  appearance: true, // Enable dark mode
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  locales: {
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/get-started' },
          { text: '组件', link: '/zh/components/button' },
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
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/get-started' },
          { text: 'Components', link: '/en/components/button' },
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/yu859/sakana-element' }],
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});
