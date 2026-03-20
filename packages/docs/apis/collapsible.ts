import type { ApiSection } from './types';

export const collapsibleApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'boolean',
        desc: { zh: '是否展开（受控模式）', en: 'Whether expanded (controlled mode)' },
      },
      {
        name: 'default-open',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '默认是否展开（非受控模式）',
          en: 'Default expanded state (uncontrolled mode)',
        },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: {
          zh: '颜色主题，支持预设名称（primary / success / warning / danger / info）或自定义十六进制颜色',
          en: 'Color theme. Supports preset names (primary / success / warning / danger / info) or custom hex colors',
        },
      },
      {
        name: 'ghost',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '幽灵模式，无边框和阴影',
          en: 'Ghost mode with no border or shadow',
        },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'change',
        category: 'event',
        type: '(open: boolean) => void',
        desc: { zh: '展开/收起状态改变时触发', en: 'Triggered when open state changes' },
      },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'open',
        category: 'expose',
        type: 'Ref<boolean>',
        desc: { zh: '当前展开状态', en: 'Current open state' },
      },
      {
        name: 'toggle',
        category: 'expose',
        type: '() => void',
        desc: { zh: '切换展开/收起状态', en: 'Toggle open/close state' },
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
          zh: '内容区域，应包含 CollapsibleTrigger 和 CollapsibleContent',
          en: 'Content area, should contain CollapsibleTrigger and CollapsibleContent',
        },
      },
    ],
  },
];

export const collapsibleTriggerApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'as-child',
        category: 'behavior',
        component: 'CollapsibleTrigger',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '是否使用子元素作为触发器（保留）',
          en: 'Whether to use child element as trigger (reserved)',
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
        component: 'CollapsibleTrigger',
        desc: { zh: '触发器内容', en: 'Trigger content' },
      },
    ],
  },
];

export const collapsibleContentApi: ApiSection[] = [
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        component: 'CollapsibleContent',
        desc: { zh: '可折叠内容', en: 'Collapsible content' },
      },
    ],
  },
];
