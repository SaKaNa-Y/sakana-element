import type { ApiSection } from './types';

export const buttonApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: { zh: '按钮尺寸', en: 'Button size' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
        desc: { zh: '按钮类型', en: 'Button type' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: { zh: '自定义按钮颜色（十六进制）', en: 'Custom button color (hex)' },
      },
      {
        name: 'plain',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否为朴素按钮', en: 'Plain button' },
      },
      {
        name: 'round',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否为圆角按钮', en: 'Round button' },
      },
      {
        name: 'circle',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否为圆形按钮', en: 'Circle button' },
      },
      {
        name: 'dash',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否为虚线边框按钮', en: 'Dash border style' },
      },
      {
        name: 'ghost',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否为幽灵按钮（无边框/背景）', en: 'Ghost button (no border/bg)' },
      },
      {
        name: 'loading',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否为加载状态', en: 'Loading state' },
      },
      {
        name: 'loading-icon',
        category: 'content',
        type: 'string',
        default: "'spinner'",
        desc: { zh: '自定义加载图标', en: 'Custom loading icon' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Disabled state' },
      },
      {
        name: 'icon',
        category: 'content',
        type: 'string',
        desc: { zh: '图标名称', en: 'Icon name' },
      },
      {
        name: 'autofocus',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否自动聚焦', en: 'Auto focus' },
      },
      {
        name: 'native-type',
        category: 'behavior',
        type: "'button' | 'submit' | 'reset'",
        default: "'button'",
        desc: { zh: '原生 type 属性', en: 'Native type attribute' },
      },
      {
        name: 'tag',
        category: 'content',
        type: 'string',
        default: "'button'",
        desc: { zh: '自定义元素标签', en: 'Custom element tag' },
      },
      {
        name: 'use-throttle',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否启用节流', en: 'Enable throttle' },
      },
      {
        name: 'throttle-duration',
        category: 'behavior',
        type: 'number',
        default: '500',
        desc: { zh: '节流时间（毫秒）', en: 'Throttle duration (ms)' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'click',
        type: '(event: MouseEvent) => void',
        desc: { zh: '点击按钮时触发', en: 'Triggered when button is clicked' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      { name: 'default', desc: { zh: '按钮内容', en: 'Button content' } },
      { name: 'loading', desc: { zh: '自定义加载图标', en: 'Custom loading icon' } },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'ref',
        type: 'Ref<HTMLButtonElement>',
        desc: { zh: '按钮 HTML 元素', en: 'Button HTML element' },
      },
      { name: 'size', type: 'ComputedRef<string>', desc: { zh: '按钮尺寸', en: 'Button size' } },
      { name: 'type', type: 'ComputedRef<string>', desc: { zh: '按钮类型', en: 'Button type' } },
      {
        name: 'disabled',
        type: 'ComputedRef<boolean>',
        desc: { zh: '是否禁用', en: 'Disabled state' },
      },
    ],
  },
];
