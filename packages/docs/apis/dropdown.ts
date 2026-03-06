import type { ApiSection } from './types';

export const dropdownApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'items',
        category: 'content',
        type: 'DropdownItemProps[]',
        desc: { zh: '菜单项', en: 'Menu items' },
      },
      {
        name: 'trigger',
        category: 'behavior',
        type: "'hover' | 'click' | 'contextmenu'",
        default: "'hover'",
        desc: { zh: '触发方式', en: 'Trigger mode' },
      },
      {
        name: 'type',
        category: 'style',
        type: 'ButtonType',
        desc: { zh: '按钮类型', en: 'Button type' },
      },
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: { zh: '按钮大小', en: 'Button size' },
      },
      {
        name: 'splitButton',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否使用分割按钮', en: 'Whether to use split button' },
      },
      {
        name: 'hideOnClick',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '点击后是否隐藏菜单', en: 'Whether to hide menu on click' },
      },
      {
        name: 'placement',
        category: 'behavior',
        type: 'Placement',
        default: "'bottom'",
        desc: { zh: '菜单位置', en: 'Menu placement' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
      {
        name: 'maxHeight',
        category: 'style',
        type: 'number | string',
        desc: {
          zh: '菜单最大高度，超出后可滚动',
          en: 'Max menu height, scrollable when exceeded',
        },
      },
      {
        name: 'showArrow',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '是否显示指向触发器的像素箭头',
          en: 'Whether to show pixel arrow pointing to trigger',
        },
      },
      {
        name: 'hoverColor',
        category: 'style',
        type: 'string',
        desc: {
          zh: '自定义菜单项悬停背景色',
          en: 'Custom hover background color for menu items',
        },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'command',
        category: 'event',
        type: '(command: string | number) => void',
        desc: { zh: '点击菜单项触发', en: 'Triggered when menu item is clicked' },
      },
      {
        name: 'visible-change',
        category: 'event',
        type: '(visible: boolean) => void',
        desc: { zh: '菜单显示/隐藏时触发', en: 'Triggered when menu shows/hides' },
      },
      {
        name: 'click',
        category: 'event',
        type: '(event: MouseEvent) => void',
        desc: {
          zh: '点击分割按钮左侧时触发',
          en: 'Triggered when split button left side is clicked',
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
        desc: { zh: '触发下拉菜单的元素', en: 'Element that triggers dropdown' },
      },
      {
        name: 'dropdown',
        category: 'slot',
        desc: {
          zh: '下拉菜单内容，通常是 <px-dropdown-item>',
          en: 'Dropdown content, usually <px-dropdown-item>',
        },
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
        desc: { zh: '打开下拉菜单', en: 'Open dropdown' },
      },
      {
        name: 'close',
        category: 'expose',
        type: '() => void',
        desc: { zh: '关闭下拉菜单', en: 'Close dropdown' },
      },
    ],
  },
];

export const dropdownItemApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'command',
        category: 'content',
        component: 'DropdownItem',
        type: 'string | number',
        desc: { zh: '指令', en: 'Command' },
      },
      {
        name: 'label',
        category: 'content',
        component: 'DropdownItem',
        type: 'string | VNode',
        desc: { zh: '显示文本', en: 'Display text' },
      },
      {
        name: 'disabled',
        category: 'state',
        component: 'DropdownItem',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
      {
        name: 'divided',
        category: 'style',
        component: 'DropdownItem',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否显示分割线', en: 'Whether to show divider' },
      },
      {
        name: 'icon',
        category: 'content',
        component: 'DropdownItem',
        type: 'string',
        desc: { zh: '菜单项图标名称', en: 'Menu item icon name' },
      },
    ],
  },
];

export const dropdownKeyboardApi: ApiSection[] = [
  {
    title: { zh: '键盘操作', en: 'Keyboard' },
    items: [
      {
        name: '↑ / ↓',
        category: 'behavior',
        desc: {
          zh: '在菜单项之间移动焦点（跳过禁用项）',
          en: 'Move focus between items (skip disabled)',
        },
      },
      {
        name: 'Enter / Space',
        category: 'behavior',
        desc: {
          zh: '选择当前聚焦的菜单项',
          en: 'Select the focused item',
        },
      },
      {
        name: 'Escape',
        category: 'behavior',
        desc: {
          zh: '关闭菜单并返回焦点到触发器',
          en: 'Close menu and return focus to trigger',
        },
      },
      {
        name: 'Home / End',
        category: 'behavior',
        desc: {
          zh: '跳到第一个/最后一个可用菜单项',
          en: 'Jump to first/last enabled item',
        },
      },
    ],
  },
];
