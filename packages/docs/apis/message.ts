import type { ApiSection } from './types';

export const messageApi: ApiSection[] = [
  {
    title: { zh: '配置项', en: 'Options' },
    items: [
      {
        name: 'message',
        category: 'content',
        type: 'string | VNode',
        desc: { zh: '消息文字', en: 'Message text' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'success' | 'warning' | 'info' | 'danger' | 'error'",
        default: "'info'",
        desc: { zh: '消息类型', en: 'Message type' },
      },
      {
        name: 'duration',
        category: 'behavior',
        type: 'number',
        default: '3000',
        desc: {
          zh: '显示时间（毫秒），设为 0 则不会自动关闭',
          en: 'Display duration (ms), 0 for persistent',
        },
      },
      {
        name: 'showClose',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否显示关闭按钮', en: 'Whether to show close button' },
      },
      {
        name: 'center',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '文字是否居中', en: 'Whether to center text' },
      },
      {
        name: 'offset',
        category: 'style',
        type: 'number',
        default: '20',
        desc: { zh: '距离窗口顶部的偏移量', en: 'Offset from top of window' },
      },
      {
        name: 'plain',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '是否使用朴素样式（浅色背景，彩色文字）',
          en: 'Whether to use plain style (lighter bg, colored text)',
        },
      },
      {
        name: 'ghost',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '是否使用幽灵样式（透明背景，仅显示边框）',
          en: 'Whether to use ghost style (transparent bg, border only)',
        },
      },
      {
        name: 'icon',
        category: 'content',
        type: 'string',
        default: '—',
        desc: {
          zh: '自定义图标名称，覆盖默认类型图标',
          en: 'Custom icon name, overrides default type icon',
        },
      },
      {
        name: 'showTimer',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: {
          zh: '是否显示持续时间进度条',
          en: 'Whether to show duration progress bar',
        },
      },
      {
        name: 'max',
        category: 'behavior',
        type: 'number',
        default: '—',
        desc: {
          zh: '最多可同时显示的消息数量，超出时关闭最早的消息',
          en: 'Max visible messages, oldest closed when exceeded',
        },
      },
    ],
  },
  {
    title: { zh: '方法', en: 'Methods' },
    items: [
      {
        name: 'PxMessage',
        category: 'method',
        type: '(options: MessageOptions | string) => MessageHandler',
        desc: { zh: '显示消息', en: 'Show message' },
      },
      {
        name: 'PxMessage.success',
        category: 'method',
        type: '(options: MessageOptions | string) => MessageHandler',
        desc: { zh: '显示成功消息', en: 'Show success message' },
      },
      {
        name: 'PxMessage.warning',
        category: 'method',
        type: '(options: MessageOptions | string) => MessageHandler',
        desc: { zh: '显示警告消息', en: 'Show warning message' },
      },
      {
        name: 'PxMessage.info',
        category: 'method',
        type: '(options: MessageOptions | string) => MessageHandler',
        desc: { zh: '显示信息消息', en: 'Show info message' },
      },
      {
        name: 'PxMessage.danger',
        category: 'method',
        type: '(options: MessageOptions | string) => MessageHandler',
        desc: { zh: '显示危险消息', en: 'Show danger message' },
      },
      {
        name: 'PxMessage.error',
        category: 'method',
        type: '(options: MessageOptions | string) => MessageHandler',
        desc: { zh: '显示错误消息', en: 'Show error message' },
      },
      {
        name: 'PxMessage.closeAll',
        category: 'method',
        type: '(type?: MessageType) => void',
        desc: { zh: '关闭所有消息', en: 'Close all messages' },
      },
    ],
  },
  {
    title: { zh: '处理器', en: 'Handler' },
    items: [
      {
        name: 'close',
        category: 'method',
        type: '() => void',
        desc: { zh: '关闭当前消息', en: 'Close current message' },
      },
    ],
  },
];
