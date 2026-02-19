import type { ApiSection } from './types';

export const loadingApi: ApiSection[] = [
  {
    title: { zh: '指令', en: 'Directive' },
    items: [
      {
        name: 'v-loading',
        category: 'behavior',
        type: 'boolean',
        desc: { zh: '是否显示加载', en: 'Whether to show loading' },
      },
    ],
  },
  {
    title: { zh: '配置项（服务方式）', en: 'Options (Service)' },
    items: [
      {
        name: 'target',
        category: 'content',
        type: 'HTMLElement | string',
        default: 'document.body',
        desc: { zh: '加载需要覆盖的目标元素', en: 'Target element to cover' },
      },
      {
        name: 'fullscreen',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否全屏加载', en: 'Whether fullscreen' },
      },
      {
        name: 'lock',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '锁定屏幕滚动', en: 'Lock screen scroll' },
      },
      {
        name: 'text',
        category: 'content',
        type: 'string',
        desc: { zh: '加载文案', en: 'Loading text' },
      },
      {
        name: 'background',
        category: 'style',
        type: 'string',
        desc: { zh: '遮罩背景色', en: 'Mask background color' },
      },
      {
        name: 'spinner',
        category: 'content',
        type: 'string | boolean',
        desc: { zh: '自定义加载图标', en: 'Custom loading icon' },
      },
    ],
  },
  {
    title: { zh: '实例方法', en: 'Instance Methods' },
    items: [
      { name: 'close', type: '() => void', desc: { zh: '关闭 Loading', en: 'Close Loading' } },
    ],
  },
];
