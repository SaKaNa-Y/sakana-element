import type { ApiSection } from './types';

export const cardApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
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
