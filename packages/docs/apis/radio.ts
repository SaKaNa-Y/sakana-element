import type { ApiSection } from './types';

export const radioApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'string | number | boolean',
        desc: { zh: '绑定值', en: 'Binding value' },
      },
      {
        name: 'value',
        category: 'content',
        type: 'string | number | boolean',
        desc: {
          zh: '单选框的标识值，当 modelValue 等于 value 时为选中状态',
          en: 'Identifier value. Radio is checked when modelValue equals value',
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
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'small'",
        desc: { zh: '尺寸', en: 'Size' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
        desc: { zh: '预设主题颜色类型', en: 'Preset theme color type' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: { zh: '自定义十六进制颜色', en: 'Custom hex color' },
      },
      {
        name: 'name',
        category: 'behavior',
        type: 'string',
        desc: { zh: '原生 name 属性', en: 'Native name attribute' },
      },
      {
        name: 'id',
        category: 'behavior',
        type: 'string',
        desc: { zh: '原生 id 属性', en: 'Native id attribute' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'change',
        category: 'event',
        type: '(value: RadioValueType) => void',
        desc: { zh: '选中值改变时触发', en: 'Triggered when selected value changes' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '自定义标签内容', en: 'Custom label content' },
      },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'focus',
        category: 'expose',
        type: '() => void',
        desc: { zh: '使单选框获取焦点', en: 'Focus the radio' },
      },
      {
        name: 'checked',
        category: 'expose',
        type: 'ComputedRef<boolean>',
        desc: { zh: '是否选中', en: 'Whether checked' },
      },
    ],
  },
];

export const radioGroupApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'string | number | boolean',
        desc: { zh: '绑定值', en: 'Binding value' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用所有子单选框', en: 'Whether to disable all child radios' },
      },
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'small'",
        desc: { zh: '所有子单选框的尺寸', en: 'Size for all child radios' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
        desc: {
          zh: '所有子单选框的预设主题颜色',
          en: 'Preset theme color for all child radios',
        },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: {
          zh: '所有子单选框的自定义十六进制颜色',
          en: 'Custom hex color for all child radios',
        },
      },
      {
        name: 'name',
        category: 'behavior',
        type: 'string',
        desc: { zh: '所有子单选框的 name 属性', en: 'Name attribute for all child radios' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'change',
        category: 'event',
        type: '(value: RadioValueType) => void',
        desc: { zh: '选中值改变时触发', en: 'Triggered when selected value changes' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '子单选框内容', en: 'Child radio content' },
      },
    ],
  },
];
