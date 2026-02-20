import type { ApiSection } from './types';

export const iconApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'icon',
        category: 'content',
        type: 'string',
        desc: {
          zh: '图标名称（pixelarticons 名称或映射别名）',
          en: 'Icon name (pixelarticons name or mapped alias)',
        },
      },
      {
        name: 'size',
        category: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x'",
        default: "'md'",
        desc: { zh: '图标大小', en: 'Icon size' },
      },
      {
        name: 'type',
        category: 'color',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
        desc: { zh: '图标类型颜色', en: 'Icon type color' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: { zh: '自定义颜色', en: 'Custom color' },
      },
      {
        name: 'flip',
        category: 'style',
        type: "'horizontal' | 'vertical' | 'both'",
        desc: { zh: '翻转方向', en: 'Flip direction' },
      },
      {
        name: 'rotation',
        category: 'style',
        type: '90 | 180 | 270',
        desc: { zh: '旋转角度', en: 'Rotation angle' },
      },
      {
        name: 'spin',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '旋转动画（逐帧）', en: 'Spin animation (step-based)' },
      },
      {
        name: 'pulse',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '脉冲动画（旋转 + 缩放）', en: 'Pulse animation (spin + scale)' },
      },
      {
        name: 'bounce',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '弹跳动画（垂直跳动）', en: 'Bounce animation (vertical)' },
      },
      {
        name: 'shake',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '抖动动画（水平抖动）', en: 'Shake animation (horizontal)' },
      },
      {
        name: 'beat',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '心跳动画（缩放跳动）', en: 'Beat animation (scale pulse)' },
      },
      {
        name: 'fade',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '淡入淡出动画（透明度闪烁）', en: 'Fade animation (opacity blink)' },
      },
    ],
  },
];
