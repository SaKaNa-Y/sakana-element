import type { ApiSection } from './types';

export const pixelateApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'src',
        category: 'content',
        type: 'string',
        default: '—',
        desc: { zh: '图片源地址或 base64', en: 'Image source URL or base64' },
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
        name: 'width',
        category: 'size',
        type: 'number | string',
        default: '—',
        desc: { zh: '组件宽度', en: 'Component width' },
      },
      {
        name: 'height',
        category: 'size',
        type: 'number | string',
        default: '—',
        desc: { zh: '组件高度', en: 'Component height' },
      },
      {
        name: 'grayscale',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '启用灰度模式', en: 'Enable grayscale mode' },
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
        desc: { zh: '透明区域的背景色', en: 'Background color for transparent areas' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'rendered',
        category: 'event',
        type: '() => void',
        desc: { zh: '像素化渲染完成后触发', en: 'Emitted after pixelation rendering completes' },
      },
      {
        name: 'error',
        category: 'event',
        type: '(event: Event) => void',
        desc: { zh: '图片加载失败时触发', en: 'Emitted when the image fails to load' },
      },
    ],
  },
  {
    title: { zh: '暴露方法 / 引用', en: 'Exposed Methods / Refs' },
    items: [
      {
        name: 'render()',
        category: 'method',
        type: '() => void',
        desc: { zh: '手动触发重新渲染', en: 'Manually trigger re-render' },
      },
      {
        name: 'canvasRef',
        category: 'expose',
        type: 'HTMLCanvasElement',
        desc: { zh: 'Canvas 元素引用', en: 'Canvas element ref' },
      },
      {
        name: 'originRef',
        category: 'expose',
        type: 'HTMLImageElement',
        desc: { zh: '隐藏的原始图片元素引用', en: 'Hidden original image element ref' },
      },
      {
        name: 'getSize()',
        category: 'method',
        type: '() => { width: number; height: number }',
        desc: { zh: '获取渲染后的画布尺寸', en: 'Get rendered canvas dimensions' },
      },
      {
        name: 'getImageData()',
        category: 'method',
        type: '() => ImageData | null',
        desc: { zh: '获取像素化后的 ImageData', en: 'Get pixelated ImageData' },
      },
    ],
  },
];
