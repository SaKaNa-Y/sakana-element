import type { ApiSection } from './types';

export const formApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model',
        category: 'content',
        type: 'Record<string, any>',
        desc: { zh: '表单数据对象', en: 'Form data object' },
      },
      {
        name: 'rules',
        category: 'behavior',
        type: 'FormRules',
        desc: { zh: '表单验证规则', en: 'Form validation rules' },
      },
      {
        name: 'disabled',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用表单', en: 'Whether to disable form' },
      },
      {
        name: 'labelWidth',
        category: 'style',
        type: 'number | string',
        desc: { zh: '标签宽度', en: 'Label width' },
      },
      {
        name: 'labelPosition',
        category: 'style',
        type: "'left' | 'right' | 'top'",
        default: "'right'",
        desc: { zh: '标签位置', en: 'Label position' },
      },
      {
        name: 'labelSuffix',
        category: 'content',
        type: 'string',
        desc: { zh: '标签后缀', en: 'Label suffix' },
      },
      {
        name: 'showMessage',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示校验错误信息', en: 'Whether to show validation error message' },
      },
      {
        name: 'hideRequiredAsterisk',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否隐藏必填字段的标签旁边的红色星号', en: 'Whether to hide red asterisk' },
      },
      {
        name: 'requiredAsteriskPosition',
        category: 'style',
        type: "'left' | 'right'",
        default: "'left'",
        desc: { zh: '星号位置', en: 'Asterisk position' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'validate',
        type: '(prop: string, isValid: boolean, message: string) => void',
        desc: { zh: '字段验证后触发', en: 'Triggered after field validation' },
      },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'validate',
        type: '(callback?: FormValidateCallback) => Promise<boolean>',
        desc: { zh: '验证整个表单', en: 'Validate the whole form' },
      },
      {
        name: 'validateField',
        type: '(props?: string[], callback?: FormValidateCallback) => Promise<boolean>',
        desc: { zh: '验证指定字段', en: 'Validate specific fields' },
      },
      {
        name: 'resetFields',
        type: '(props?: string[]) => void',
        desc: { zh: '重置表单字段', en: 'Reset form fields' },
      },
      {
        name: 'clearValidate',
        type: '(props?: string[]) => void',
        desc: { zh: '清除验证状态', en: 'Clear validation status' },
      },
    ],
  },
];

export const formItemApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'prop',
        category: 'content',
        type: 'string | string[]',
        desc: { zh: 'model 的键名', en: 'Key name of model' },
      },
      {
        name: 'label',
        category: 'content',
        type: 'string',
        desc: { zh: '标签文本', en: 'Label text' },
      },
      {
        name: 'labelWidth',
        category: 'style',
        type: 'number | string',
        desc: { zh: '标签宽度', en: 'Label width' },
      },
      {
        name: 'required',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否必填', en: 'Whether required' },
      },
      {
        name: 'rules',
        category: 'behavior',
        type: 'FormItemRule[]',
        desc: { zh: '验证规则', en: 'Validation rules' },
      },
      {
        name: 'error',
        category: 'content',
        type: 'string',
        desc: { zh: '错误信息', en: 'Error message' },
      },
      {
        name: 'showMessage',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示校验错误信息', en: 'Whether to show validation error' },
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
    title: { zh: '插槽', en: 'Slots' },
    items: [
      { name: 'default', desc: { zh: '表单项内容', en: 'Form item content' } },
      { name: 'label', desc: { zh: '自定义标签', en: 'Custom label' } },
      { name: 'error', desc: { zh: '自定义错误信息', en: 'Custom error message' } },
    ],
  },
];
