import type { ApiSection } from './types';

export const inputApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'string',
        desc: { zh: '绑定值', en: 'Binding value' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'text' | 'password' | 'textarea' | 'date' | 'time' | 'url' | ...",
        default: "'text'",
        desc: {
          zh: '输入框类型，支持原生 HTML input 类型',
          en: 'Input type, supports native HTML input types',
        },
      },
      {
        name: 'color',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info' | string",
        desc: {
          zh: '输入框颜色，支持预设主题色或自定义十六进制色值',
          en: 'Input color, accepts preset theme colors or custom hex values',
        },
      },
      {
        name: 'ghost',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '是否为幽灵样式（无边框/阴影，悬浮时显示）',
          en: 'Whether to use ghost style (no border/shadow at rest, visible on hover)',
        },
      },
      {
        name: 'placeholder',
        category: 'content',
        type: 'string',
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
        name: 'readonly',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否只读', en: 'Whether readonly' },
      },
      {
        name: 'clearable',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否可清空', en: 'Whether clearable' },
      },
      {
        name: 'show-password',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否显示密码切换按钮', en: 'Whether to show password toggle' },
      },
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: { zh: '尺寸', en: 'Size' },
      },
      {
        name: 'prefix-icon',
        category: 'content',
        type: 'string',
        desc: { zh: '前缀图标', en: 'Prefix icon' },
      },
      {
        name: 'suffix-icon',
        category: 'content',
        type: 'string',
        desc: { zh: '后缀图标', en: 'Suffix icon' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'input',
        category: 'event',
        type: '(value: string) => void',
        desc: { zh: '输入时触发', en: 'Triggered on input' },
      },
      {
        name: 'change',
        category: 'event',
        type: '(value: string) => void',
        desc: { zh: '值改变时触发', en: 'Triggered when value changes' },
      },
      {
        name: 'focus',
        category: 'event',
        type: '(event: FocusEvent) => void',
        desc: { zh: '获取焦点时触发', en: 'Triggered on focus' },
      },
      {
        name: 'blur',
        category: 'event',
        type: '(event: FocusEvent) => void',
        desc: { zh: '失去焦点时触发', en: 'Triggered on blur' },
      },
      {
        name: 'clear',
        category: 'event',
        type: '() => void',
        desc: { zh: '清空时触发', en: 'Triggered on clear' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      { name: 'prefix', category: 'slot', desc: { zh: '前缀内容', en: 'Prefix content' } },
      { name: 'suffix', category: 'slot', desc: { zh: '后缀内容', en: 'Suffix content' } },
      { name: 'prepend', category: 'slot', desc: { zh: '前置内容', en: 'Prepend content' } },
      { name: 'append', category: 'slot', desc: { zh: '后置内容', en: 'Append content' } },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'ref',
        category: 'expose',
        type: 'Ref<HTMLInputElement>',
        desc: { zh: '输入框 HTML 元素', en: 'Input HTML element' },
      },
      {
        name: 'focus',
        category: 'expose',
        type: '() => void',
        desc: { zh: '使输入框获取焦点', en: 'Focus the input' },
      },
      {
        name: 'blur',
        category: 'expose',
        type: '() => void',
        desc: { zh: '使输入框失去焦点', en: 'Blur the input' },
      },
      {
        name: 'clear',
        category: 'expose',
        type: '() => void',
        desc: { zh: '清空输入框内容', en: 'Clear the input' },
      },
    ],
  },
];
