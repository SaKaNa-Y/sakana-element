import type { ApiSection } from './types';

export const alertApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      { name: 'title', category: 'content', type: 'string', desc: { zh: '标题', en: 'Title' } },
      {
        name: 'type',
        category: 'style',
        type: "'success' | 'warning' | 'info' | 'danger'",
        default: "'info'",
        desc: { zh: '类型', en: 'Type' },
      },
      {
        name: 'description',
        category: 'content',
        type: 'string',
        desc: { zh: '描述文本', en: 'Description text' },
      },
      {
        name: 'closable',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否可关闭', en: 'Whether closable' },
      },
      {
        name: 'center',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '文字是否居中', en: 'Whether to center text' },
      },
      {
        name: 'show-icon',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否显示图标', en: 'Whether to show icon' },
      },
      {
        name: 'effect',
        category: 'style',
        type: "'light' | 'dark'",
        default: "'light'",
        desc: { zh: '主题样式', en: 'Theme effect' },
      },
      {
        name: 'outline',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '轮廓边框样式', en: 'Outline border style' },
      },
      {
        name: 'dash',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '虚线边框样式', en: 'Dash border style' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: { zh: '自定义十六进制颜色', en: 'Custom hex color' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'close',
        category: 'event',
        type: '() => void',
        desc: { zh: '关闭时触发', en: 'Triggered when closed' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      { name: 'default', category: 'slot', desc: { zh: '默认内容', en: 'Default content' } },
      { name: 'title', category: 'slot', desc: { zh: '标题内容', en: 'Title content' } },
    ],
  },
];
