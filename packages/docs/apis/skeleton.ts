import type { ApiSection } from './types';

export const skeletonApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'loading',
        category: 'state',
        type: 'boolean',
        default: 'true',
        desc: {
          zh: '是否显示骨架屏',
          en: 'Whether to show the skeleton',
        },
      },
      {
        name: 'animated',
        category: 'style',
        type: 'boolean',
        default: 'true',
        desc: {
          zh: '是否显示闪烁动画',
          en: 'Whether to show shimmer animation',
        },
      },
      {
        name: 'animation',
        category: 'style',
        type: "'shimmer' | 'pulse' | 'dither'",
        default: "'shimmer'",
        desc: {
          zh: '动画风格：shimmer（扫描线）、pulse（闪烁）、dither（棋盘格溶解）',
          en: 'Animation style: shimmer (scanline sweep), pulse (two-frame blink), dither (checkerboard dissolve)',
        },
      },
      {
        name: 'variant',
        category: 'style',
        type: "'text' | 'circular' | 'rectangular' | 'rounded'",
        default: "'rectangular'",
        desc: {
          zh: '骨架屏变体形状',
          en: 'Skeleton shape variant',
        },
      },
      {
        name: 'width',
        category: 'size',
        type: 'string | number',
        desc: {
          zh: '自定义宽度（数字为 px，字符串按原值）',
          en: 'Custom width (number as px, string as-is)',
        },
      },
      {
        name: 'height',
        category: 'size',
        type: 'string | number',
        desc: {
          zh: '自定义高度（数字为 px，字符串按原值）',
          en: 'Custom height (number as px, string as-is)',
        },
      },
      {
        name: 'rows',
        category: 'content',
        type: 'number',
        default: '1',
        desc: {
          zh: '文本变体的行数（仅 variant="text" 且 rows > 1 时生效）',
          en: 'Number of rows for text variant (only when variant="text" and rows > 1)',
        },
      },
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: {
          zh: '骨架屏尺寸',
          en: 'Skeleton size',
        },
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
          zh: '加载完成后显示的内容',
          en: 'Content to display when loading is complete',
        },
      },
    ],
  },
];
