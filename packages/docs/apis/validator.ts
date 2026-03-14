import type { ApiSection } from './types';

export const validatorApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'modelValue',
        category: 'content',
        type: 'unknown',
        desc: { zh: '要验证的值', en: 'The value to validate' },
      },
      {
        name: 'rules',
        category: 'behavior',
        type: 'ValidatorRule[]',
        desc: {
          zh: '验证规则数组（支持 Zod schema 或 required 简写）',
          en: 'Validation rules (supports Zod schema or required shorthand)',
        },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'validate',
        category: 'event',
        type: '(isValid: boolean, message: string) => void',
        desc: { zh: '验证完成后触发', en: 'Triggered after validation completes' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '表单控件内容', en: 'Form control content' },
      },
      {
        name: 'hint',
        category: 'slot',
        type: '{ message: string }',
        desc: { zh: '自定义错误提示内容', en: 'Custom error hint content' },
      },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'validate',
        category: 'expose',
        type: '(trigger?: string) => Promise<boolean>',
        desc: { zh: '手动触发验证', en: 'Manually trigger validation' },
      },
      {
        name: 'reset',
        category: 'expose',
        type: '() => void',
        desc: { zh: '重置验证状态', en: 'Reset validation state' },
      },
      {
        name: 'validateStatus',
        category: 'expose',
        type: "Ref<'init' | 'error' | 'success'>",
        desc: { zh: '当前验证状态', en: 'Current validation status' },
      },
      {
        name: 'validateMessage',
        category: 'expose',
        type: 'Ref<string>',
        desc: { zh: '当前错误消息', en: 'Current error message' },
      },
    ],
  },
];
