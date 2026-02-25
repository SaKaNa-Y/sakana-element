import type { ApiSection } from './types';

export const cardApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'info' | 'warning' | 'danger'",
        default: '—',
        desc: { zh: '卡片类型', en: 'Card type' },
      },
      {
        name: 'color',
        category: 'style',
        type: 'string',
        desc: { zh: '自定义颜色（十六进制）', en: 'Custom color (hex)' },
      },
      {
        name: 'hoverable',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '鼠标悬停时是否显示浮起效果', en: 'Whether to show hover elevation effect' },
      },
      {
        name: 'shadow',
        category: 'style',
        type: "boolean | 'always' | 'hover' | 'never'",
        default: "'always'",
        desc: { zh: '阴影显示时机', en: 'When to show shadow' },
      },
      {
        name: 'size',
        category: 'style',
        type: "'small' | 'large'",
        default: '—',
        desc: { zh: '卡片尺寸', en: 'Card size' },
      },
      {
        name: 'outline',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '轮廓样式（实线边框，透明背景）',
          en: 'Outline style (solid border, transparent background)',
        },
      },
      {
        name: 'dash',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '虚线样式（虚线边框）', en: 'Dashed style (dashed border)' },
      },
      {
        name: 'ghost',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '幽灵样式（无边框、无背景）', en: 'Ghost style (no border, no background)' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      { name: 'default', category: 'slot', desc: { zh: '卡片主体内容', en: 'Card body content' } },
      { name: 'header', category: 'slot', desc: { zh: '卡片头部内容', en: 'Card header content' } },
      { name: 'footer', category: 'slot', desc: { zh: '卡片底部内容', en: 'Card footer content' } },
    ],
  },
];
