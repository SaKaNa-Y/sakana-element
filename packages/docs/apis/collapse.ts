import type { ApiSection } from './types';

export const collapseApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'model-value / v-model',
        category: 'content',
        type: 'string | string[]',
        desc: { zh: '当前激活的面板', en: 'Currently active panels' },
      },
      {
        name: 'accordion',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否开启手风琴模式', en: 'Whether to enable accordion mode' },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'change',
        category: 'event',
        type: '(activeNames: string | string[]) => void',
        desc: { zh: '激活面板改变时触发', en: 'Triggered when active panels change' },
      },
    ],
  },
];

export const collapseItemApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'name',
        category: 'content',
        component: 'CollapseItem',
        type: 'string',
        desc: { zh: '唯一标识符', en: 'Unique identifier' },
      },
      {
        name: 'title',
        category: 'content',
        component: 'CollapseItem',
        type: 'string',
        desc: { zh: '标题', en: 'Title' },
      },
      {
        name: 'disabled',
        category: 'state',
        component: 'CollapseItem',
        type: 'boolean',
        default: 'false',
        desc: { zh: '是否禁用', en: 'Whether disabled' },
      },
    ],
  },
  {
    title: { zh: '插槽', en: 'Slots' },
    items: [
      {
        name: 'default',
        category: 'slot',
        component: 'CollapseItem',
        desc: { zh: '面板内容', en: 'Panel content' },
      },
      {
        name: 'title',
        category: 'slot',
        component: 'CollapseItem',
        desc: { zh: '自定义标题', en: 'Custom title' },
      },
    ],
  },
];
