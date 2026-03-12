import type { ApiSection } from './types';

export const diffApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'src',
        category: 'content',
        type: 'string',
        default: '—',
        desc: {
          zh: '图片源地址（使用时 before 显示原图，after 显示像素化版本）',
          en: 'Image source URL (before shows original, after shows pixelated version)',
        },
      },
      {
        name: 'pixelSize',
        category: 'style',
        type: 'number',
        default: '8',
        desc: {
          zh: '像素块大小（值越大越像素化）',
          en: 'Pixel block size (higher = more pixelated)',
        },
      },
      {
        name: 'grayscale',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '启用灰度模式（仅对像素化侧生效）',
          en: 'Enable grayscale mode (affects pixelated side only)',
        },
      },
      {
        name: 'palette',
        category: 'color',
        type: 'string[] | number[][]',
        default: '—',
        desc: {
          zh: '自定义调色板（十六进制字符串或 RGB 元组）',
          en: 'Custom color palette (hex strings or RGB tuples)',
        },
      },
      {
        name: 'background',
        category: 'color',
        type: 'string',
        default: "'#FFFFFF'",
        desc: {
          zh: '透明区域的背景色',
          en: 'Background color for transparent areas',
        },
      },
      {
        name: 'initialPosition',
        category: 'behavior',
        type: 'number',
        default: '50',
        desc: {
          zh: '滑块初始位置（0-100）',
          en: 'Initial slider position (0-100)',
        },
      },
      {
        name: 'width',
        category: 'size',
        type: 'number | string',
        default: '—',
        desc: { zh: '容器宽度', en: 'Container width' },
      },
      {
        name: 'height',
        category: 'size',
        type: 'number | string',
        default: '—',
        desc: { zh: '容器高度', en: 'Container height' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        default: '—',
        desc: {
          zh: '滑块手柄主题色（primary / success / warning / info / danger）',
          en: 'Handle accent color (primary / success / warning / info / danger)',
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
        type: '(position: number) => void',
        desc: {
          zh: '滑块位置变化时触发',
          en: 'Emitted when the slider position changes',
        },
      },
      {
        name: 'rendered',
        category: 'event',
        type: '() => void',
        desc: {
          zh: '像素化渲染完成后触发',
          en: 'Emitted after pixelation rendering completes',
        },
      },
      {
        name: 'error',
        category: 'event',
        type: '(event: Event) => void',
        desc: {
          zh: '图片加载失败时触发',
          en: 'Emitted when the image fails to load',
        },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'before',
        category: 'slot',
        desc: {
          zh: '自定义 "之前" 面板内容（左侧）',
          en: 'Custom content for the "before" panel (left side)',
        },
      },
      {
        name: 'after',
        category: 'slot',
        desc: {
          zh: '自定义 "之后" 面板内容（右侧）',
          en: 'Custom content for the "after" panel (right side)',
        },
      },
    ],
  },
  {
    title: { zh: '暴露方法', en: 'Exposed Methods' },
    items: [
      {
        name: 'setPosition(n)',
        category: 'method',
        type: '(position: number) => void',
        desc: {
          zh: '设置滑块位置（0-100）',
          en: 'Set the slider position (0-100)',
        },
      },
      {
        name: 'getPosition()',
        category: 'method',
        type: '() => number',
        desc: {
          zh: '获取当前滑块位置',
          en: 'Get the current slider position',
        },
      },
    ],
  },
];
