import type { ApiSection } from './types';

export const commandApi: ApiSection[] = [
  {
    title: { zh: 'Command 属性', en: 'Command Props' },
    items: [
      {
        name: 'modelValue / v-model',
        category: 'content',
        type: 'string',
        default: "''",
        desc: { zh: '搜索文本', en: 'Search text' },
      },
      {
        name: 'filter',
        category: 'behavior',
        type: '(value: string, search: string, keywords?: string[]) => boolean',
        desc: { zh: '自定义过滤函数', en: 'Custom filter function' },
      },
      {
        name: 'label',
        category: 'content',
        type: 'string',
        desc: { zh: 'aria-label 标签', en: 'Aria label for accessibility' },
      },
    ],
  },
  {
    title: { zh: 'Command 事件', en: 'Command Events' },
    items: [
      {
        name: 'update:modelValue',
        category: 'event',
        type: '(value: string) => void',
        desc: { zh: '搜索文本变更时触发', en: 'Emitted when search text changes' },
      },
      {
        name: 'select',
        category: 'event',
        type: '(value: string) => void',
        desc: { zh: '选择项目时触发', en: 'Emitted when an item is selected' },
      },
    ],
  },
  {
    title: { zh: 'CommandInput 属性', en: 'CommandInput Props' },
    items: [
      {
        name: 'placeholder',
        category: 'content',
        type: 'string',
        default: "''",
        desc: { zh: '输入框占位文本', en: 'Input placeholder text' },
      },
      {
        name: 'icon',
        category: 'content',
        type: 'string',
        default: "'search'",
        desc: { zh: '搜索图标名称', en: 'Search icon name' },
      },
    ],
  },
  {
    title: { zh: 'CommandItem 属性', en: 'CommandItem Props' },
    items: [
      {
        name: 'value',
        category: 'content',
        type: 'string',
        desc: { zh: '项目唯一值（必填）', en: 'Unique item value (required)' },
      },
      {
        name: 'keywords',
        category: 'content',
        type: 'string[]',
        default: '[]',
        desc: { zh: '额外的搜索关键词', en: 'Additional search keywords' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether the item is disabled' },
      },
      {
        name: 'icon',
        category: 'content',
        type: 'string',
        desc: { zh: '项目图标', en: 'Item icon' },
      },
      {
        name: 'shortcut',
        category: 'content',
        type: 'string[]',
        default: '[]',
        desc: { zh: '快捷键标签', en: 'Shortcut key labels' },
      },
    ],
  },
  {
    title: { zh: 'CommandGroup 属性', en: 'CommandGroup Props' },
    items: [
      {
        name: 'heading',
        category: 'content',
        type: 'string',
        desc: { zh: '分组标题', en: 'Group heading text' },
      },
    ],
  },
  {
    title: { zh: 'CommandList 属性', en: 'CommandList Props' },
    items: [
      {
        name: 'maxHeight',
        category: 'style',
        type: 'string',
        default: "'300px'",
        desc: { zh: '列表最大高度', en: 'Maximum list height' },
      },
    ],
  },
  {
    title: { zh: 'CommandDialog 属性', en: 'CommandDialog Props' },
    items: [
      {
        name: 'modelValue / v-model',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否打开弹窗', en: 'Whether the dialog is open' },
      },
      {
        name: 'shortcut',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '启用 Ctrl+K 快捷键', en: 'Enable Ctrl+K keyboard shortcut' },
      },
    ],
  },
  {
    title: { zh: 'CommandDialog 事件', en: 'CommandDialog Events' },
    items: [
      {
        name: 'update:modelValue',
        category: 'event',
        type: '(value: boolean) => void',
        desc: { zh: '弹窗状态变更时触发', en: 'Emitted when dialog state changes' },
      },
      {
        name: 'open',
        category: 'event',
        type: '() => void',
        desc: { zh: '弹窗打开时触发', en: 'Emitted when dialog opens' },
      },
      {
        name: 'close',
        category: 'event',
        type: '() => void',
        desc: { zh: '弹窗关闭时触发', en: 'Emitted when dialog closes' },
      },
    ],
  },
  {
    title: { zh: '键盘快捷键', en: 'Keyboard Shortcuts' },
    items: [
      {
        name: 'ArrowDown',
        category: 'behavior',
        desc: { zh: '高亮下一项', en: 'Highlight next item' },
      },
      {
        name: 'ArrowUp',
        category: 'behavior',
        desc: { zh: '高亮上一项', en: 'Highlight previous item' },
      },
      {
        name: 'Enter',
        category: 'behavior',
        desc: { zh: '选择高亮项', en: 'Select highlighted item' },
      },
      {
        name: 'Escape',
        category: 'behavior',
        desc: { zh: '关闭弹窗', en: 'Close dialog' },
      },
      {
        name: 'Ctrl+K / Cmd+K',
        category: 'behavior',
        desc: { zh: '切换命令面板弹窗', en: 'Toggle command dialog' },
      },
    ],
  },
];
