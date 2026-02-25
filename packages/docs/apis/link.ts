import type { ApiSection } from './types';

export const linkApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'info' | 'warning' | 'danger'",
        desc: { zh: '类型', en: 'Type' },
      },
      {
        name: 'underline',
        category: 'style',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示下划线', en: 'Whether to show underline' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
      {
        name: 'href',
        category: 'content',
        type: 'string',
        desc: { zh: '链接地址', en: 'Link URL' },
      },
      {
        name: 'target',
        category: 'behavior',
        type: 'string',
        desc: { zh: '链接打开方式', en: 'Link target' },
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
        name: 'click',
        category: 'event',
        type: '(event: MouseEvent) => void',
        desc: { zh: '点击事件', en: 'Click event' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '链接内容', en: 'Link content' },
      },
    ],
  },
];
