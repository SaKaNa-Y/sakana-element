import type { ApiSection } from './types';

export const avatarApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: { zh: '尺寸', en: 'Size' },
      },
      {
        name: 'shape',
        category: 'style',
        type: "'circle' | 'square'",
        default: "'circle'",
        desc: { zh: '形状', en: 'Shape' },
      },
      {
        name: 'border',
        category: 'style',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示边框', en: 'Whether to show border' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: { zh: '自定义十六进制背景颜色', en: 'Custom hex background color' },
      },
      {
        name: 'status',
        category: 'state',
        type: "'online' | 'offline'",
        desc: { zh: '状态指示器（不设置则隐藏）', en: 'Status indicator (hidden when not set)' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '头像内容（如文字首字母缩写）', en: 'Avatar content (e.g. text initials)' },
      },
    ],
  },
];
