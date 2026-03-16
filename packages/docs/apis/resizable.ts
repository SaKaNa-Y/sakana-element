import type { ApiSection } from './types';

export const resizableGroupApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'direction',
        category: 'behavior',
        type: "'horizontal' | 'vertical'",
        desc: { zh: '面板排列方向', en: 'Panel layout direction' },
      },
      {
        name: 'auto-save-id',
        category: 'behavior',
        type: 'string',
        desc: {
          zh: '自动保存布局的唯一标识，设置后布局会持久化到 localStorage',
          en: 'Unique ID for auto-saving layout to localStorage',
        },
      },
      {
        name: 'keyboard-resize-by',
        category: 'behavior',
        type: 'number',
        default: '10',
        desc: {
          zh: '键盘方向键调整面板大小的步长（百分比）',
          en: 'Step size (%) for keyboard arrow key resizing',
        },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'layout',
        category: 'event',
        type: '(sizes: number[]) => void',
        desc: {
          zh: '面板尺寸变化时触发，参数为各面板的百分比大小数组',
          en: 'Triggered when panel sizes change, with an array of percentage sizes',
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
          zh: 'ResizablePanel 和 ResizableHandle 组件',
          en: 'ResizablePanel and ResizableHandle components',
        },
      },
    ],
  },
];

export const resizablePanelApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'default-size',
        category: 'size',
        type: 'number',
        desc: {
          zh: '面板初始大小（百分比 1-100），未设置时自动分配剩余空间',
          en: 'Initial panel size (1-100%). Panels without this split remaining space equally',
        },
      },
      {
        name: 'min-size',
        category: 'size',
        type: 'number',
        default: '10',
        desc: { zh: '面板最小大小（百分比）', en: 'Minimum panel size (%)' },
      },
      {
        name: 'max-size',
        category: 'size',
        type: 'number',
        default: '100',
        desc: { zh: '面板最大大小（百分比）', en: 'Maximum panel size (%)' },
      },
      {
        name: 'collapsible',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否可折叠', en: 'Whether the panel is collapsible' },
      },
      {
        name: 'collapsed-size',
        category: 'size',
        type: 'number',
        default: '0',
        desc: {
          zh: '折叠后的面板大小（百分比）',
          en: 'Panel size when collapsed (%)',
        },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'resize',
        category: 'event',
        type: '(size: number) => void',
        desc: { zh: '面板大小变化时触发', en: 'Triggered when panel size changes' },
      },
      {
        name: 'collapse',
        category: 'event',
        type: '() => void',
        desc: { zh: '面板折叠时触发', en: 'Triggered when panel collapses' },
      },
      {
        name: 'expand',
        category: 'event',
        type: '() => void',
        desc: { zh: '面板展开时触发', en: 'Triggered when panel expands' },
      },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'collapse',
        category: 'expose',
        type: '() => void',
        desc: { zh: '折叠面板', en: 'Collapse the panel' },
      },
      {
        name: 'expand',
        category: 'expose',
        type: '() => void',
        desc: { zh: '展开面板', en: 'Expand the panel' },
      },
      {
        name: 'getSize',
        category: 'expose',
        type: '() => number',
        desc: { zh: '获取当前面板大小', en: 'Get current panel size' },
      },
      {
        name: 'resize',
        category: 'expose',
        type: '(size: number) => void',
        desc: { zh: '设置面板大小', en: 'Set panel size' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '面板内容', en: 'Panel content' },
      },
    ],
  },
];

export const resizableHandleApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用拖拽', en: 'Whether dragging is disabled' },
      },
      {
        name: 'hit-area-margins',
        category: 'behavior',
        type: 'number',
        default: '0',
        desc: {
          zh: '增加手柄的可交互区域（像素）',
          en: 'Extra hit area margin in pixels for easier grabbing',
        },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'dragging',
        category: 'event',
        type: '(isDragging: boolean) => void',
        desc: {
          zh: '拖拽状态变化时触发',
          en: 'Triggered when dragging state changes',
        },
      },
    ],
  },
];
