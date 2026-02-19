import type { ApiSection } from './types';

export const badgeApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'primary'",
        desc: { zh: '类型', en: 'Type' },
      },
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: { zh: '尺寸', en: 'Size' },
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
      {
        name: 'round',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '圆角像素风格', en: 'Round pixel style' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [{ name: 'default', desc: { zh: '徽章内容', en: 'Badge content' } }],
  },
];
