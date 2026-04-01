import type { ApiSection } from './types';

export const contextMenuApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'items',
        category: 'content',
        type: 'ContextMenuItemDef[]',
        desc: { zh: '菜单项（快捷方式）', en: 'Menu items (shorthand)' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用右键菜单', en: 'Whether to disable context menu' },
      },
      {
        name: 'hideOnClick',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '点击菜单项后是否关闭', en: 'Whether to close after item click' },
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
        name: 'hoverColor',
        category: 'style',
        type: 'string',
        desc: {
          zh: '自定义菜单项悬停背景色',
          en: 'Custom hover background color for items',
        },
      },
      {
        name: 'lockScroll',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '菜单打开时是否锁定页面滚动',
          en: 'Whether to lock page scroll when menu is open',
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
        desc: { zh: '点击菜单项触发', en: 'Triggered when item is clicked' },
      },
      {
        name: 'visible-change',
        category: 'event',
        type: '(visible: boolean) => void',
        desc: { zh: '菜单显示/隐藏时触发', en: 'Triggered when menu shows/hides' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '右键触发区域', en: 'Right-click trigger area' },
      },
      {
        name: 'content',
        category: 'slot',
        desc: {
          zh: '菜单内容，使用子组件组合',
          en: 'Menu content, composed with sub-components',
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
        type: '(event: MouseEvent) => void',
        desc: { zh: '手动打开菜单', en: 'Programmatically open menu' },
      },
      {
        name: 'close',
        category: 'expose',
        type: '() => void',
        desc: { zh: '关闭菜单', en: 'Close menu' },
      },
    ],
  },
];

export const contextMenuItemApi: ApiSection[] = [
  {
    title: { zh: 'MenuItem 属性', en: 'MenuItem Props' },
    items: [
      {
        name: 'command',
        category: 'content',
        component: 'ContextMenuItem',
        type: 'string | number',
        desc: { zh: '指令', en: 'Command identifier' },
      },
      {
        name: 'label',
        category: 'content',
        component: 'ContextMenuItem',
        type: 'string | VNode',
        desc: { zh: '显示文本', en: 'Display text' },
      },
      {
        name: 'disabled',
        category: 'state',
        component: 'ContextMenuItem',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
      {
        name: 'divided',
        category: 'style',
        component: 'ContextMenuItem',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否显示分割线', en: 'Show divider above' },
      },
      {
        name: 'icon',
        category: 'content',
        component: 'ContextMenuItem',
        type: 'string',
        desc: { zh: '图标名称', en: 'Icon name' },
      },
      {
        name: 'shortcut',
        category: 'content',
        component: 'ContextMenuItem',
        type: 'string[]',
        desc: {
          zh: '快捷键提示，如 ["Ctrl", "C"]',
          en: 'Shortcut hint, e.g. ["Ctrl", "C"]',
        },
      },
    ],
  },
];

export const contextMenuCheckboxApi: ApiSection[] = [
  {
    title: { zh: 'CheckboxItem 属性', en: 'CheckboxItem Props' },
    items: [
      {
        name: 'modelValue / v-model',
        category: 'content',
        component: 'ContextMenuCheckboxItem',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否选中', en: 'Whether checked' },
      },
      {
        name: 'label',
        category: 'content',
        component: 'ContextMenuCheckboxItem',
        type: 'string | VNode',
        desc: { zh: '显示文本', en: 'Display text' },
      },
      {
        name: 'disabled',
        category: 'state',
        component: 'ContextMenuCheckboxItem',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
    ],
  },
];

export const contextMenuRadioApi: ApiSection[] = [
  {
    title: { zh: 'RadioGroup 属性', en: 'RadioGroup Props' },
    items: [
      {
        name: 'modelValue / v-model',
        category: 'content',
        component: 'ContextMenuRadioGroup',
        type: 'string',
        desc: { zh: '当前选中值', en: 'Currently selected value' },
      },
    ],
  },
  {
    title: { zh: 'RadioItem 属性', en: 'RadioItem Props' },
    items: [
      {
        name: 'value',
        category: 'content',
        component: 'ContextMenuRadioItem',
        type: 'string',
        desc: { zh: '选项值（必填）', en: 'Option value (required)' },
      },
      {
        name: 'label',
        category: 'content',
        component: 'ContextMenuRadioItem',
        type: 'string | VNode',
        desc: { zh: '显示文本', en: 'Display text' },
      },
      {
        name: 'disabled',
        category: 'state',
        component: 'ContextMenuRadioItem',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
    ],
  },
];

export const contextMenuSubApi: ApiSection[] = [
  {
    title: { zh: 'Sub 属性', en: 'Sub Props' },
    items: [
      {
        name: 'label',
        category: 'content',
        component: 'ContextMenuSub',
        type: 'string | VNode',
        desc: { zh: '子菜单触发文本', en: 'Submenu trigger text' },
      },
      {
        name: 'disabled',
        category: 'state',
        component: 'ContextMenuSub',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
      {
        name: 'icon',
        category: 'content',
        component: 'ContextMenuSub',
        type: 'string',
        desc: { zh: '图标名称', en: 'Icon name' },
      },
      {
        name: 'items',
        category: 'content',
        component: 'ContextMenuSub',
        type: 'ContextMenuItemDef[]',
        desc: { zh: '子菜单项（快捷方式）', en: 'Submenu items (shorthand)' },
      },
    ],
  },
];

export const contextMenuKeyboardApi: ApiSection[] = [
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
        name: '→',
        category: 'behavior',
        desc: {
          zh: '打开子菜单',
          en: 'Open submenu',
        },
      },
      {
        name: '←',
        category: 'behavior',
        desc: {
          zh: '关闭子菜单，返回父菜单',
          en: 'Close submenu, return to parent',
        },
      },
      {
        name: 'Escape',
        category: 'behavior',
        desc: {
          zh: '关闭菜单',
          en: 'Close menu',
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
