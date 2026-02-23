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
        name: 'options',
        category: 'content',
        type: 'SelectOptionProps[]',
        default: '[]',
        desc: { zh: '选项数组，与插槽方式二选一', en: 'Options array, alternative to slot usage' },
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
      {
        name: 'filter-method',
        category: 'behavior',
        type: '(query: string) => SelectOptionProps[]',
        desc: { zh: '自定义筛选方法', en: 'Custom filter method' },
      },
      {
        name: 'remote',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否启用远程搜索', en: 'Whether to enable remote search' },
      },
      {
        name: 'remote-method',
        category: 'behavior',
        type: '(query: string) => Promise<SelectOptionProps[]>',
        desc: { zh: '远程搜索方法', en: 'Remote search method' },
      },
      {
        name: 'render-label',
        category: 'content',
        type: '(option: SelectOptionProps) => VNode | string',
        desc: { zh: '自定义选项渲染函数', en: 'Custom option label render function' },
      },
      {
        name: 'ghost',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '幽灵样式，无边框和阴影', en: 'Ghost style with no border or shadow at rest' },
      },
      {
        name: 'color',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info' | string",
        desc: {
          zh: '选择器颜色，支持预设主题色或自定义十六进制色值',
          en: 'Select color, accepts preset theme colors or custom hex values',
        },
      },
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'small'",
        desc: { zh: '选择器尺寸', en: 'Select size' },
      },
      {
        name: 'id',
        category: 'behavior',
        type: 'string',
        desc: { zh: '输入框的原生 id 属性', en: 'Native id attribute for the input' },
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
      {
        name: 'focus',
        category: 'event',
        type: '(event: FocusEvent) => void',
        desc: { zh: '获取焦点时触发', en: 'Triggered when the select is focused' },
      },
      {
        name: 'blur',
        category: 'event',
        type: '(event: FocusEvent) => void',
        desc: { zh: '失去焦点时触发', en: 'Triggered when the select is blurred' },
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
        desc: { zh: '聚焦选择器', en: 'Focus the select input' },
      },
      {
        name: 'blur',
        category: 'expose',
        type: '() => void',
        desc: { zh: '失焦选择器', en: 'Blur the select input' },
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
