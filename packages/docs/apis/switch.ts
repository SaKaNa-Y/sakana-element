import type { ApiSection } from './types';

export const switchApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'boolean',
        default: 'false',
        desc: { zh: '绑定值', en: 'Binding value' },
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
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: { zh: '尺寸', en: 'Size' },
      },
      {
        name: 'active-text',
        category: 'content',
        type: 'string',
        desc: { zh: '打开时的文字', en: 'Text when active' },
      },
      {
        name: 'inactive-text',
        category: 'content',
        type: 'string',
        desc: { zh: '关闭时的文字', en: 'Text when inactive' },
      },
      {
        name: 'active-value',
        category: 'content',
        type: 'boolean | string | number',
        default: 'true',
        desc: { zh: '打开时的值', en: 'Value when active' },
      },
      {
        name: 'inactive-value',
        category: 'content',
        type: 'boolean | string | number',
        default: 'false',
        desc: { zh: '关闭时的值', en: 'Value when inactive' },
      },
      {
        name: 'name',
        category: 'behavior',
        type: 'string',
        desc: { zh: '原生 name 属性', en: 'Native name attribute' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'warning' | 'danger' | 'info'",
        desc: { zh: '预设主题颜色类型', en: 'Preset theme color type' },
      },
      {
        name: 'active-color',
        category: 'color',
        type: 'string',
        desc: { zh: '开启时的自定义十六进制颜色', en: 'Custom hex color when active' },
      },
      {
        name: 'inactive-color',
        category: 'color',
        type: 'string',
        desc: { zh: '关闭时的自定义十六进制颜色', en: 'Custom hex color when inactive' },
      },
      {
        name: 'active-icon',
        category: 'content',
        type: 'string',
        desc: { zh: '开启时滑块内显示的图标名称', en: 'Icon name displayed in thumb when active' },
      },
      {
        name: 'inactive-icon',
        category: 'content',
        type: 'string',
        desc: {
          zh: '关闭时滑块内显示的图标名称',
          en: 'Icon name displayed in thumb when inactive',
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
        type: '(value: boolean) => void',
        desc: { zh: '状态改变时触发', en: 'Triggered when state changes' },
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
        desc: { zh: '开关 HTML 元素', en: 'Switch HTML element' },
      },
    ],
  },
];
