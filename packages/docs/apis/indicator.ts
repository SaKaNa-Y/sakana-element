import type { ApiSection } from './types';

export const indicatorApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'placement',
        category: 'behavior',
        type: "'top-start' | 'top-center' | 'top-end' | 'middle-start' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom-center' | 'bottom-end'",
        default: "'top-end'",
        desc: { zh: '指示器位置', en: 'Indicator position' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'primary'",
        desc: { zh: '类型', en: 'Type' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: { zh: '自定义十六进制颜色', en: 'Custom hex color' },
      },
      {
        name: 'offset',
        category: 'behavior',
        type: '[number, number]',
        desc: { zh: '偏移量 [x, y]（像素）', en: 'Offset [x, y] in pixels' },
      },
      {
        name: 'inline',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '使用 inline-flex 布局', en: 'Use inline-flex display' },
      },
      {
        name: 'processing',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '像素脉冲动画', en: 'Pixel ping animation' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '被包裹的内容', en: 'Wrapped content' },
      },
      {
        name: 'indicator',
        category: 'slot',
        desc: {
          zh: '指示器内容（为空时显示为圆点）',
          en: 'Indicator content (renders as dot when empty)',
        },
      },
    ],
  },
];
