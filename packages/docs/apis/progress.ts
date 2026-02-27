import type { ApiSection } from './types';

export const progressApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'percentage',
        category: 'content',
        type: 'number',
        default: '0',
        desc: {
          zh: '百分比值（0-100），超出范围会被自动钳制',
          en: 'Percentage value (0-100), out-of-range values are clamped',
        },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'info' | 'warning' | 'danger'",
        default: "'primary'",
        desc: { zh: '进度条类型', en: 'Progress bar type' },
      },
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: { zh: '进度条尺寸', en: 'Progress bar size' },
      },
      {
        name: 'status',
        category: 'state',
        type: "'success' | 'warning' | 'danger'",
        default: '—',
        desc: {
          zh: '进度条状态，会覆盖 type 的颜色',
          en: 'Progress status, overrides type color',
        },
      },
      {
        name: 'variant',
        category: 'style',
        type: "'solid' | 'striped' | 'checkered'",
        default: "'solid'",
        desc: { zh: '填充图案变体', en: 'Fill pattern variant' },
      },
      {
        name: 'stripedFlow',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '条纹流动动画（仅在 variant="striped" 时有效）',
          en: 'Animated striped flow (only with variant="striped")',
        },
      },
      {
        name: 'indeterminate',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '不确定进度（来回弹跳）', en: 'Indeterminate bouncing progress' },
      },
      {
        name: 'strokeWidth',
        category: 'size',
        type: 'number',
        default: '0',
        desc: {
          zh: '自定义进度条高度（像素值）',
          en: 'Custom progress bar height (in pixels)',
        },
      },
      {
        name: 'showText',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示百分比文字', en: 'Whether to show percentage text' },
      },
      {
        name: 'textInside',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '文字是否显示在进度条内部', en: 'Whether to render text inside the bar' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string | (percentage: number) => string',
        default: '—',
        desc: {
          zh: '自定义颜色，支持十六进制或函数',
          en: 'Custom color, supports hex string or function',
        },
      },
      {
        name: 'format',
        category: 'content',
        type: '(percentage: number) => string',
        default: '—',
        desc: { zh: '自定义文字格式化函数', en: 'Custom text format function' },
      },
    ],
  },
  {
    title: { zh: '暴露方法', en: 'Expose' },
    items: [
      {
        name: 'clampedPercentage',
        category: 'expose',
        type: 'number',
        desc: {
          zh: '经过钳制的百分比值（0-100）',
          en: 'Clamped percentage value (0-100)',
        },
      },
    ],
  },
];
