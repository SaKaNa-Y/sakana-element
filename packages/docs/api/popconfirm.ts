import type { ApiSection } from './types';

export const popconfirmApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      { name: 'title', category: 'content', type: 'string', desc: { zh: '标题', en: 'Title' } },
      {
        name: 'confirmButtonText',
        category: 'content',
        type: 'string',
        default: "'Yes'",
        desc: { zh: '确认按钮文字', en: 'Confirm button text' },
      },
      {
        name: 'cancelButtonText',
        category: 'content',
        type: 'string',
        default: "'No'",
        desc: { zh: '取消按钮文字', en: 'Cancel button text' },
      },
      {
        name: 'confirmButtonType',
        category: 'style',
        type: 'ButtonType',
        default: "'primary'",
        desc: { zh: '确认按钮类型', en: 'Confirm button type' },
      },
      {
        name: 'cancelButtonType',
        category: 'style',
        type: 'ButtonType',
        desc: { zh: '取消按钮类型', en: 'Cancel button type' },
      },
      {
        name: 'icon',
        category: 'content',
        type: 'string',
        default: "'question-circle'",
        desc: { zh: '图标', en: 'Icon' },
      },
      {
        name: 'iconColor',
        category: 'color',
        type: 'string',
        default: "'#f90'",
        desc: { zh: '图标颜色', en: 'Icon color' },
      },
      {
        name: 'hideIcon',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否隐藏图标', en: 'Whether to hide icon' },
      },
      {
        name: 'hideAfter',
        category: 'behavior',
        type: 'number',
        default: '200',
        desc: { zh: '隐藏延迟（毫秒）', en: 'Hide delay (ms)' },
      },
      {
        name: 'width',
        category: 'size',
        type: 'number | string',
        default: '150',
        desc: { zh: '弹框宽度', en: 'Pop-up width' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'confirm',
        category: 'event',
        type: '(event: MouseEvent) => void',
        desc: { zh: '点击确认按钮时触发', en: 'Triggered when confirm is clicked' },
      },
      {
        name: 'cancel',
        category: 'event',
        type: '(event: MouseEvent) => void',
        desc: { zh: '点击取消按钮时触发', en: 'Triggered when cancel is clicked' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '触发 Popconfirm 的元素', en: 'Element that triggers Popconfirm' },
      },
      { name: 'reference', category: 'slot', desc: { zh: '同 default', en: 'Same as default' } },
    ],
  },
];
