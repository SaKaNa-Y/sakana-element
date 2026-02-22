import type { ApiSection } from './types';

export const breadcrumbApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'separator',
        category: 'content',
        type: 'string',
        default: "'/'",
        desc: {
          zh: '分隔符文本',
          en: 'Separator text between breadcrumb items',
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
        desc: {
          zh: '面包屑项内容',
          en: 'Breadcrumb items content',
        },
      },
      {
        name: 'separator',
        category: 'slot',
        desc: {
          zh: '自定义分隔符内容',
          en: 'Custom separator content',
        },
      },
    ],
  },
];

export const breadcrumbItemApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'to',
        category: 'content',
        component: 'BreadcrumbItem',
        type: 'string',
        desc: {
          zh: '链接地址，设置后将渲染为 <a> 标签',
          en: 'Link URL. When set, renders as an <a> tag',
        },
      },
      {
        name: 'icon',
        category: 'style',
        component: 'BreadcrumbItem',
        type: 'string',
        desc: {
          zh: '图标名称（支持所有内置像素图标）',
          en: 'Icon name (supports all built-in pixel icons)',
        },
      },
      {
        name: 'disabled',
        category: 'state',
        component: 'BreadcrumbItem',
        type: 'boolean',
        default: 'false',
        desc: {
          zh: '是否禁用',
          en: 'Whether disabled',
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
        component: 'BreadcrumbItem',
        desc: {
          zh: '面包屑项文本内容',
          en: 'Breadcrumb item text content',
        },
      },
    ],
  },
];
