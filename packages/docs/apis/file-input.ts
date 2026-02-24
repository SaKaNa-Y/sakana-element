import type { ApiSection } from './types';

export const fileInputApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'FileList | null',
        desc: { zh: '绑定值', en: 'Binding value' },
      },
      {
        name: 'color',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info' | string",
        desc: {
          zh: '文件输入框颜色，支持预设主题色或自定义十六进制色值',
          en: 'File input color, accepts preset theme colors or custom hex values',
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
        name: 'size',
        category: 'size',
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: { zh: '尺寸', en: 'Size' },
      },
      {
        name: 'placeholder',
        category: 'content',
        type: 'string',
        default: "'No file chosen'",
        desc: { zh: '未选择文件时的占位文本', en: 'Placeholder text when no file is selected' },
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
        name: 'accept',
        category: 'behavior',
        type: 'string',
        desc: {
          zh: '原生 accept 属性，限制文件类型',
          en: 'Native accept attribute, restricts file types',
        },
      },
      {
        name: 'multiple',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否允许多选', en: 'Whether to allow multiple files' },
      },
      {
        name: 'form',
        category: 'behavior',
        type: 'string',
        desc: {
          zh: '原生 form 属性，关联到指定表单',
          en: 'Native form attribute, associates with a form',
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
        type: '(value: FileList | null) => void',
        desc: { zh: '文件选择变化时触发', en: 'Triggered when file selection changes' },
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
      {
        name: 'trigger',
        category: 'slot',
        desc: {
          zh: '自定义触发按钮内容',
          en: 'Custom trigger button content',
        },
      },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'ref',
        category: 'expose',
        type: 'Ref<HTMLInputElement>',
        desc: { zh: '原生文件输入框 HTML 元素', en: 'Native file input HTML element' },
      },
      {
        name: 'open',
        category: 'expose',
        type: '() => void',
        desc: { zh: '打开文件选择对话框', en: 'Open the file selection dialog' },
      },
      {
        name: 'clear',
        category: 'expose',
        type: '() => void',
        desc: { zh: '清空已选择的文件', en: 'Clear selected files' },
      },
    ],
  },
];
