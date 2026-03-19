import type { ApiSection } from './types';

export const carouselApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'number',
        default: '0',
        desc: { zh: '当前激活的幻灯片索引', en: 'Currently active slide index' },
      },
      {
        name: 'direction',
        category: 'style',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        desc: { zh: '轮播方向', en: 'Carousel direction' },
      },
      {
        name: 'show-arrow',
        category: 'style',
        type: "'always' | 'hover' | 'never'",
        default: "'hover'",
        desc: { zh: '箭头显示策略', en: 'When to show navigation arrows' },
      },
      {
        name: 'show-indicators',
        category: 'style',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示指示器', en: 'Whether to show slide indicators' },
      },
      {
        name: 'indicator-trigger',
        category: 'behavior',
        type: "'click' | 'hover'",
        default: "'click'",
        desc: { zh: '指示器触发方式', en: 'How indicators trigger navigation' },
      },
      {
        name: 'color',
        category: 'color',
        type: 'string',
        desc: {
          zh: '颜色主题，支持预设名称（primary / success / warning / danger / info）或自定义十六进制颜色',
          en: 'Color theme. Supports preset names (primary / success / warning / danger / info) or custom hex colors',
        },
      },
      {
        name: 'height',
        category: 'style',
        type: 'string',
        desc: { zh: '容器高度', en: 'Container height' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'change',
        category: 'event',
        type: '(current: number, prev: number) => void',
        desc: { zh: '幻灯片切换时触发', en: 'Triggered when the active slide changes' },
      },
    ],
  },
  {
    title: { zh: '暴露', en: 'Exposes' },
    items: [
      {
        name: 'next',
        category: 'expose',
        type: '() => void',
        desc: { zh: '切换到下一张幻灯片', en: 'Go to the next slide' },
      },
      {
        name: 'prev',
        category: 'expose',
        type: '() => void',
        desc: { zh: '切换到上一张幻灯片', en: 'Go to the previous slide' },
      },
      {
        name: 'goTo',
        category: 'expose',
        type: '(index: number) => void',
        desc: { zh: '跳转到指定幻灯片', en: 'Go to a specific slide by index' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        desc: {
          zh: '轮播内容，应包含 CarouselItem 组件',
          en: 'Carousel content, should contain CarouselItem components',
        },
      },
    ],
  },
];

export const carouselItemApi: ApiSection[] = [
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        component: 'CarouselItem',
        desc: { zh: '幻灯片内容', en: 'Slide content' },
      },
    ],
  },
];
