import type { ApiSection } from './types';

export const tableApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'type',
        category: 'style',
        type: "'primary' | 'success' | 'info' | 'warning' | 'danger'",
        default: '—',
        desc: { zh: '颜色类型', en: 'Color type variant' },
      },
      {
        name: 'size',
        category: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        desc: { zh: '表格尺寸', en: 'Table size' },
      },
      {
        name: 'zebra',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '斑马纹（交替行高亮）', en: 'Zebra stripes (alternating row highlight)' },
      },
      {
        name: 'stripe',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: 'zebra 的别名', en: 'Alias for zebra' },
      },
      {
        name: 'hover',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '行悬停高亮', en: 'Row hover highlight' },
      },
      {
        name: 'border',
        category: 'style',
        type: 'boolean',
        default: 'false',
        desc: { zh: '全边框', en: 'Full cell borders' },
      },
      {
        name: 'pinRows',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '固定表头/表尾（sticky）', en: 'Sticky header and footer' },
      },
      {
        name: 'pinCols',
        category: 'behavior',
        type: 'boolean',
        default: 'false',
        desc: { zh: '固定首列（sticky）', en: 'Sticky first column' },
      },
      {
        name: 'showHeader',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示表头', en: 'Whether to show table header' },
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
          zh: '表格内容（原生 <table> 元素）',
          en: 'Table content (native <table> element)',
        },
      },
    ],
  },
];
