import type { ApiSection } from './types';

export const selectApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'string | number',
        desc: { zh: '绑定值', en: 'Binding value' },
      },
      {
        name: 'placeholder',
        category: 'content',
        type: 'string',
        default: "'Select'",
        desc: { zh: '占位符', en: 'Placeholder' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
      {
        name: 'clearable',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否可清空', en: 'Whether clearable' },
      },
      {
        name: 'filterable',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否可搜索', en: 'Whether filterable' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'change',
        category: 'event',
        type: '(value: string | number) => void',
        desc: { zh: '选中值改变时触发', en: 'Triggered when selected value changes' },
      },
      {
        name: 'visible-change',
        category: 'event',
        type: '(visible: boolean) => void',
        desc: { zh: '下拉框显示/隐藏时触发', en: 'Triggered when dropdown shows/hides' },
      },
      {
        name: 'clear',
        category: 'event',
        type: '() => void',
        desc: { zh: '清空选中值时触发', en: 'Triggered when value is cleared' },
      },
    ],
  },
];

export const optionApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'value',
        category: 'content',
        component: 'Option',
        type: 'string | number',
        desc: { zh: '选项值', en: 'Option value' },
      },
      {
        name: 'label',
        category: 'content',
        component: 'Option',
        type: 'string',
        desc: { zh: '选项标签', en: 'Option label' },
      },
      {
        name: 'disabled',
        category: 'state',
        component: 'Option',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
    ],
  },
];
