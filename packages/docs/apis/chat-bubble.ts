import type { ApiSection } from './types';

export const chatBubbleApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'placement',
        category: 'style',
        type: "'start' | 'end'",
        default: "'start'",
        desc: { zh: '气泡位置方向', en: 'Bubble placement direction' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'info' | 'warning' | 'danger'",
        desc: { zh: '颜色类型', en: 'Color type' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: { zh: '自定义十六进制颜色', en: 'Custom hex color' },
      },
      {
        name: 'name',
        category: 'content',
        type: 'string',
        desc: { zh: '发送者名称', en: 'Sender name' },
      },
      {
        name: 'time',
        category: 'content',
        type: 'string',
        desc: { zh: '时间戳', en: 'Timestamp' },
      },
      {
        name: 'status',
        category: 'content',
        type: 'string',
        desc: { zh: '底部状态文本', en: 'Footer status text' },
      },
      {
        name: 'typing',
        category: 'state',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '显示打字中指示器（替代消息内容）',
          en: 'Show typing indicator (replaces message content)',
        },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: { zh: '气泡消息内容', en: 'Bubble message content' },
      },
      {
        name: 'avatar',
        category: 'slot',
        desc: { zh: '头像区域', en: 'Avatar area' },
      },
      {
        name: 'header',
        category: 'slot',
        desc: { zh: '自定义头部（覆盖 name/time）', en: 'Custom header (overrides name/time)' },
      },
      {
        name: 'footer',
        category: 'slot',
        desc: { zh: '自定义底部（覆盖 status）', en: 'Custom footer (overrides status)' },
      },
    ],
  },
];
