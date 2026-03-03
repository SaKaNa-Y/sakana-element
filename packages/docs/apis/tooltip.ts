import type { ApiSection } from './types';

export const tooltipApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'content',
        category: 'content',
        type: 'string',
        desc: { zh: '显示的内容', en: 'Display content' },
      },
      {
        name: 'effect',
        category: 'style',
        type: "'dark' | 'light'",
        default: "'dark'",
        desc: { zh: '主题风格', en: 'Theme effect' },
      },
      {
        name: 'type',
        category: 'color',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
        desc: { zh: '主题颜色', en: 'Theme color' },
      },
      {
        name: 'placement',
        category: 'behavior',
        type: "'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'",
        default: "'bottom'",
        desc: { zh: '出现位置', en: 'Position' },
      },
      {
        name: 'trigger',
        category: 'behavior',
        type: "'hover' | 'click' | 'contextmenu'",
        default: "'hover'",
        desc: { zh: '触发方式', en: 'Trigger mode' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
      {
        name: 'manual',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '手动控制模式', en: 'Manual control mode' },
      },
      {
        name: 'enterable',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: {
          zh: '鼠标是否可进入到 tooltip 中',
          en: 'Whether the mouse can enter the tooltip',
        },
      },
      {
        name: 'maxWidth',
        category: 'style',
        type: 'string | number',
        desc: {
          zh: '最大宽度，超出后自动换行',
          en: 'Max width; text wraps when exceeded',
        },
      },
      {
        name: 'showArrow',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否显示箭头', en: 'Whether to show arrow' },
      },
      {
        name: 'showTimeout',
        category: 'behavior',
        type: 'number',
        default: '0',
        desc: { zh: '显示延迟（毫秒）', en: 'Show delay (ms)' },
      },
      {
        name: 'hideTimeout',
        category: 'behavior',
        type: 'number',
        default: '200',
        desc: { zh: '隐藏延迟（毫秒）', en: 'Hide delay (ms)' },
      },
      {
        name: 'transition',
        category: 'style',
        type: 'string',
        default: "'fade'",
        desc: { zh: '动画名称', en: 'Transition name' },
      },
      {
        name: 'virtualTriggering',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '是否使用虚拟触发节点',
          en: 'Whether to use a virtual trigger element',
        },
      },
      {
        name: 'virtualRef',
        category: 'behavior',
        type: 'HTMLElement',
        desc: {
          zh: '虚拟触发节点的引用',
          en: 'Reference to the virtual trigger element',
        },
      },
      {
        name: 'popperOptions',
        category: 'behavior',
        type: 'object',
        desc: { zh: 'popper.js 配置', en: 'popper.js options' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'visible-change',
        category: 'event',
        type: '(visible: boolean) => void',
        desc: { zh: '可见性改变时触发', en: 'Triggered when visibility changes' },
      },
      {
        name: 'click-outside',
        category: 'event',
        type: '() => void',
        desc: { zh: '点击外部区域时触发', en: 'Triggered when clicking outside' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '触发 Tooltip 的元素', en: 'Element that triggers Tooltip' },
      },
      { name: 'content', category: 'slot', desc: { zh: '自定义内容', en: 'Custom content' } },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'show',
        category: 'expose',
        type: '() => void',
        desc: { zh: '显示 Tooltip', en: 'Show Tooltip' },
      },
      {
        name: 'hide',
        category: 'expose',
        type: '() => void',
        desc: { zh: '隐藏 Tooltip', en: 'Hide Tooltip' },
      },
      {
        name: 'toggle',
        category: 'expose',
        type: '() => void',
        desc: { zh: '切换 Tooltip 显示/隐藏', en: 'Toggle Tooltip visibility' },
      },
    ],
  },
];
