import type { ApiSection } from './types';

export const drawerApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'v-model',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否打开抽屉', en: 'Whether the drawer is open' },
      },
      {
        name: 'placement',
        category: 'behavior',
        type: "'left' | 'right'",
        default: "'left'",
        desc: { zh: '抽屉弹出位置', en: 'Drawer placement side' },
      },
      {
        name: 'size',
        category: 'size',
        type: 'string',
        default: "'300px'",
        desc: { zh: '抽屉宽度', en: 'Drawer width' },
      },
      {
        name: 'title',
        category: 'content',
        type: 'string',
        desc: { zh: '抽屉标题', en: 'Drawer title' },
      },
      {
        name: 'showOverlay',
        category: 'style',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示遮罩层', en: 'Whether to show the overlay backdrop' },
      },
      {
        name: 'lockScroll',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '打开时是否锁定页面滚动', en: 'Whether to lock body scroll when open' },
      },
      {
        name: 'closeOnClickOverlay',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '点击遮罩层是否关闭', en: 'Whether clicking the overlay closes the drawer' },
      },
      {
        name: 'closeOnEsc',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '按 ESC 键是否关闭', en: 'Whether pressing Escape closes the drawer' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'update:modelValue',
        category: 'event',
        type: '(value: boolean) => void',
        desc: { zh: '打开/关闭状态改变时触发', en: 'Triggered when open state changes' },
      },
      {
        name: 'open',
        category: 'event',
        type: '() => void',
        desc: { zh: '抽屉打开时触发', en: 'Triggered when the drawer opens' },
      },
      {
        name: 'close',
        category: 'event',
        type: '() => void',
        desc: { zh: '抽屉关闭时触发', en: 'Triggered when the drawer closes' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '主页面内容', en: 'Main page content' },
      },
      {
        name: 'sidebar',
        category: 'slot',
        desc: { zh: '抽屉侧边栏内容', en: 'Drawer sidebar content' },
      },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'open',
        category: 'expose',
        type: '() => void',
        desc: { zh: '打开抽屉', en: 'Open the drawer' },
      },
      {
        name: 'close',
        category: 'expose',
        type: '() => void',
        desc: { zh: '关闭抽屉', en: 'Close the drawer' },
      },
      {
        name: 'toggle',
        category: 'expose',
        type: '() => void',
        desc: { zh: '切换抽屉打开/关闭', en: 'Toggle drawer open/close' },
      },
    ],
  },
];
