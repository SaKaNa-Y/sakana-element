import type { ApiSection } from './types';

export const notificationApi: ApiSection[] = [
  {
    title: { zh: '配置项', en: 'Options' },
    items: [
      { name: 'title', category: 'content', type: 'string', desc: { zh: '标题', en: 'Title' } },
      {
        name: 'message',
        category: 'content',
        type: 'string | VNode',
        desc: { zh: '通知内容', en: 'Notification content' },
      },
      {
        name: 'type',
        category: 'style',
        type: "'success' | 'warning' | 'info' | 'danger' | 'error'",
        desc: { zh: '通知类型', en: 'Notification type' },
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
        name: 'position',
        category: 'style',
        type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
        default: "'top-right'",
        desc: { zh: '弹出位置', en: 'Pop-up position' },
      },
      {
        name: 'showClose',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示关闭按钮', en: 'Whether to show close button' },
      },
      {
        name: 'offset',
        category: 'style',
        type: 'number',
        default: '20',
        desc: { zh: '距离窗口边缘的偏移量', en: 'Offset from window edge' },
      },
      {
        name: 'icon',
        category: 'content',
        type: 'string',
        desc: { zh: '自定义图标', en: 'Custom icon' },
      },
      {
        name: 'plain',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '朴素模式（浅色背景，彩色文字）',
          en: 'Plain variant (light background, colored text)',
        },
      },
      {
        name: 'ghost',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '幽灵模式（透明背景，仅边框）',
          en: 'Ghost variant (transparent background, border only)',
        },
      },
      {
        name: 'showTimer',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: {
          zh: '是否显示计时进度条',
          en: 'Whether to show the duration timer bar',
        },
      },
      {
        name: 'max',
        category: 'behavior',
        type: 'number',
        desc: {
          zh: '同一位置最大可见数量',
          en: 'Max visible notifications per position',
        },
      },
      {
        name: 'onClick',
        category: 'behavior',
        type: '() => void',
        desc: { zh: '点击回调', en: 'Click callback' },
      },
      {
        name: 'onClose',
        category: 'behavior',
        type: '() => void',
        desc: { zh: '关闭回调', en: 'Close callback' },
      },
    ],
  },
  {
    title: { zh: '方法', en: 'Methods' },
    items: [
      {
        name: 'PxNotification',
        category: 'method',
        type: '(options: NotificationOptions) => NotificationHandler',
        desc: { zh: '显示通知', en: 'Show notification' },
      },
      {
        name: 'PxNotification.success',
        category: 'method',
        type: '(options: NotificationOptions) => NotificationHandler',
        desc: { zh: '显示成功通知', en: 'Show success notification' },
      },
      {
        name: 'PxNotification.warning',
        category: 'method',
        type: '(options: NotificationOptions) => NotificationHandler',
        desc: { zh: '显示警告通知', en: 'Show warning notification' },
      },
      {
        name: 'PxNotification.info',
        category: 'method',
        type: '(options: NotificationOptions) => NotificationHandler',
        desc: { zh: '显示信息通知', en: 'Show info notification' },
      },
      {
        name: 'PxNotification.danger',
        category: 'method',
        type: '(options: NotificationOptions) => NotificationHandler',
        desc: { zh: '显示危险通知', en: 'Show danger notification' },
      },
      {
        name: 'PxNotification.error',
        category: 'method',
        type: '(options: NotificationOptions) => NotificationHandler',
        desc: { zh: '显示错误通知', en: 'Show error notification' },
      },
      {
        name: 'PxNotification.closeAll',
        category: 'method',
        type: '(type?: NotificationType) => void',
        desc: { zh: '关闭所有通知', en: 'Close all notifications' },
      },
    ],
  },
];
