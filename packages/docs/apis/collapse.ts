import type { ApiSection } from './types';

export const collapseApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'string | string[]',
        desc: { zh: '当前激活的面板', en: 'Currently active panels' },
      },
      {
        name: 'accordion',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否开启手风琴模式', en: 'Whether to enable accordion mode' },
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
          zh: '幽灵模式，无边框和背景',
          en: 'Ghost mode with no border or background',
        },
      },
      {
        name: 'trigger',
        category: 'behavior',
        type: "'click' | 'focus'",
        default: "'click'",
        desc: {
          zh: '触发方式。focus 模式下聚焦展开、失焦收起',
          en: "Trigger mode. In 'focus' mode, items open on focus and close on blur",
        },
      },
      {
        name: 'icon-placement',
        category: 'style',
        type: "'start' | 'end'",
        default: "'end'",
        desc: {
          zh: '指示器图标位置',
          en: 'Position of the indicator icon',
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
        type: '(activeNames: string | string[]) => void',
        desc: { zh: '激活面板改变时触发', en: 'Triggered when active panels change' },
      },
    ],
  },
];

export const collapseItemApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'name',
        category: 'content',
        component: 'CollapseItem',
        type: 'string',
        desc: { zh: '唯一标识符', en: 'Unique identifier' },
      },
      {
        name: 'title',
        category: 'content',
        component: 'CollapseItem',
        type: 'string',
        desc: { zh: '标题', en: 'Title' },
      },
      {
        name: 'disabled',
        category: 'state',
        component: 'CollapseItem',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
      {
        name: 'show-arrow',
        category: 'style',
        component: 'CollapseItem',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示箭头指示器', en: 'Whether to show the arrow indicator' },
      },
      {
        name: 'icon',
        category: 'style',
        component: 'CollapseItem',
        type: 'string',
        desc: {
          zh: '自定义指示器图标名称（支持所有内置图标）。设为 "plus" 时自动在展开/收起间切换加减号',
          en: 'Custom indicator icon name (supports all built-in icons). Set to "plus" for an automatic plus/minus toggle effect',
        },
      },
      {
        name: 'force-open',
        category: 'behavior',
        component: 'CollapseItem',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '强制展开，忽略 modelValue 和点击交互',
          en: 'Force item to stay open, ignoring modelValue and click interactions',
        },
      },
      {
        name: 'force-close',
        category: 'behavior',
        component: 'CollapseItem',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '强制收起，忽略 modelValue 和点击交互。优先级高于 force-open',
          en: 'Force item to stay closed, ignoring modelValue and click interactions. Takes precedence over force-open',
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
        component: 'CollapseItem',
        desc: { zh: '面板内容', en: 'Panel content' },
      },
      {
        name: 'title',
        category: 'slot',
        component: 'CollapseItem',
        desc: { zh: '自定义标题', en: 'Custom title' },
      },
    ],
  },
];
