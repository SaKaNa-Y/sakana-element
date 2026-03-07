import type { ApiSection } from './types';

export const checkboxApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'boolean',
        default: 'false',
        desc: { zh: '绑定值（独立使用时）', en: 'Binding value (standalone mode)' },
      },
      {
        name: 'value',
        category: 'content',
        type: 'string | number | boolean',
        desc: {
          zh: '在 CheckboxGroup 中使用时的标识值',
          en: 'Identifier value when used inside CheckboxGroup',
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
        name: 'indeterminate',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否为不确定状态（半选）', en: 'Whether in indeterminate state' },
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
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'change',
        category: 'event',
        type: '(value: boolean) => void',
        desc: { zh: '状态改变时触发', en: 'Triggered when state changes' },
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
        desc: { zh: '使复选框获取焦点', en: 'Focus the checkbox' },
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

export const checkboxGroupApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'Array<string | number | boolean>',
        default: '[]',
        desc: { zh: '绑定值', en: 'Binding value' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用所有子复选框', en: 'Whether to disable all child checkboxes' },
      },
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'small'",
        desc: { zh: '所有子复选框的尺寸', en: 'Size for all child checkboxes' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
        desc: {
          zh: '所有子复选框的预设主题颜色',
          en: 'Preset theme color for all child checkboxes',
        },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: {
          zh: '所有子复选框的自定义十六进制颜色',
          en: 'Custom hex color for all child checkboxes',
        },
      },
      {
        name: 'min',
        category: 'behavior',
        type: 'number',
        desc: { zh: '最少选中数量', en: 'Minimum number of checked items' },
      },
      {
        name: 'max',
        category: 'behavior',
        type: 'number',
        desc: { zh: '最多选中数量', en: 'Maximum number of checked items' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'change',
        category: 'event',
        type: '(value: CheckboxValueType[]) => void',
        desc: { zh: '选中值改变时触发', en: 'Triggered when checked values change' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '子复选框内容', en: 'Child checkbox content' },
      },
    ],
  },
];
