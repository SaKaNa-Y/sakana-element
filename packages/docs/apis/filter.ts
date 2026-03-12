import type { ApiSection } from './types';

export const filterApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'string | number | (string | number)[]',
        desc: {
          zh: '绑定值。单选模式下点击已选中项重置为 undefined；多选模式下为数组',
          en: 'Binding value. Single mode: clicking active item resets to undefined. Multiple mode: array of values',
        },
      },
      {
        name: 'multiple',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '是否启用多选模式，允许同时选中多个过滤项',
          en: 'Whether to enable multi-select mode, allowing multiple items to be active simultaneously',
        },
      },
      {
        name: 'options',
        category: 'content',
        type: 'FilterOptionProps[]',
        desc: {
          zh: '过滤项数组，每项包含 value、label、disabled',
          en: 'Array of filter items, each with value, label, disabled',
        },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用所有过滤项', en: 'Whether to disable all filter items' },
      },
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'small'",
        desc: { zh: '所有过滤项的尺寸', en: 'Size for all filter items' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
        desc: { zh: '所有过滤项的预设主题颜色', en: 'Preset theme color for all filter items' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: {
          zh: '所有过滤项的自定义十六进制颜色',
          en: 'Custom hex color for all filter items',
        },
      },
      {
        name: 'name',
        category: 'behavior',
        type: 'string',
        desc: { zh: '原生 name 属性', en: 'Native name attribute' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'change',
        category: 'event',
        type: '(value: FilterValueType | FilterValueType[] | undefined) => void',
        desc: {
          zh: '选中值改变时触发，取消选择时值为 undefined',
          en: 'Triggered when selected value changes. Value is undefined when deselected',
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
          zh: '自定义过滤项内容（使用 PxFilterItem）',
          en: 'Custom filter item content (use PxFilterItem)',
        },
      },
    ],
  },
];

export const filterItemApi: ApiSection[] = [
  {
    title: { zh: 'FilterItem 属性', en: 'FilterItem Props' },
    items: [
      {
        name: 'value',
        category: 'content',
        type: 'string | number',
        desc: {
          zh: '过滤项的标识值',
          en: 'Identifier value of the filter item',
        },
      },
      {
        name: 'label',
        category: 'content',
        type: 'string',
        desc: { zh: '标签文本', en: 'Label text' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
    ],
  },
  {
    title: { zh: 'FilterItem 插槽', en: 'FilterItem Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '自定义标签内容', en: 'Custom label content' },
      },
    ],
  },
];
