import type { ApiSection } from './types';

export const dividerApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'direction',
        category: 'behavior',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        desc: { zh: '分割线方向', en: 'Divider direction' },
      },
      {
        name: 'content-position',
        category: 'style',
        type: "'left' | 'center' | 'right'",
        default: "'center'",
        desc: { zh: '内容位置（仅水平方向）', en: 'Content position (horizontal only)' },
      },
      {
        name: 'content',
        category: 'content',
        type: 'string',
        desc: { zh: '分割线文本内容', en: 'Divider text content' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
        desc: { zh: '预设主题颜色类型', en: 'Preset theme color type' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: { zh: '自定义十六进制颜色', en: 'Custom hex color' },
      },
      {
        name: 'border-style',
        category: 'style',
        type: "'solid' | 'dashed' | 'dotted'",
        default: "'solid'",
        desc: { zh: '边框样式', en: 'Border style' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: {
          zh: '自定义分割线内容（仅水平方向）',
          en: 'Custom divider content (horizontal only)',
        },
      },
    ],
  },
];
