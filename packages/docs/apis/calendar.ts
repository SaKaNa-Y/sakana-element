import type { ApiSection } from './types';

export const calendarApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'modelValue / v-model',
        category: 'state',
        type: 'Date',
        desc: { zh: '当前选中的日期', en: 'Currently selected date' },
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
        name: 'defaultMonth',
        category: 'state',
        type: 'Date',
        desc: { zh: '初始显示月份', en: 'Initial displayed month' },
      },
      {
        name: 'minDate',
        category: 'state',
        type: 'Date',
        desc: { zh: '可选范围的最小日期', en: 'Minimum selectable date' },
      },
      {
        name: 'maxDate',
        category: 'state',
        type: 'Date',
        desc: { zh: '可选范围的最大日期', en: 'Maximum selectable date' },
      },
      {
        name: 'disabledDate',
        category: 'behavior',
        type: '(date: Date) => boolean',
        desc: { zh: '判断日期是否禁用的函数', en: 'Function to determine if a date is disabled' },
      },
      {
        name: 'showOutsideDays',
        category: 'behavior',
        type: 'boolean',
        default: 'true',
        desc: { zh: '是否显示当前月份之外的日期', en: 'Show dates outside the current month' },
      },
      {
        name: 'weekStartsOn',
        category: 'behavior',
        type: '0 | 1',
        default: '0',
        desc: { zh: '每周起始日（0=周日，1=周一）', en: 'Week start day (0=Sunday, 1=Monday)' },
      },
      {
        name: 'yearRange',
        category: 'behavior',
        type: '[number, number]',
        default: '[currentYear - 10, currentYear + 10]',
        desc: {
          zh: '年份下拉选择器的范围 [起始年, 结束年]',
          en: 'Year range for the year dropdown [startYear, endYear]',
        },
      },
    ],
  },
  {
    title: { zh: '事件', en: 'Events' },
    items: [
      {
        name: 'update:modelValue',
        category: 'event',
        type: '(date: Date) => void',
        desc: { zh: '选中日期变化时触发', en: 'Triggered when selected date changes' },
      },
      {
        name: 'month-change',
        category: 'event',
        type: '(date: Date) => void',
        desc: { zh: '切换月份时触发', en: 'Triggered when the displayed month changes' },
      },
    ],
  },
  {
    title: { zh: '暴露方法', en: 'Exposed Methods' },
    items: [
      {
        name: 'focus',
        category: 'expose',
        type: '() => void',
        desc: { zh: '聚焦到日历', en: 'Focus the calendar' },
      },
      {
        name: 'prevMonth',
        category: 'expose',
        type: '() => void',
        desc: { zh: '导航到上个月', en: 'Navigate to previous month' },
      },
      {
        name: 'nextMonth',
        category: 'expose',
        type: '() => void',
        desc: { zh: '导航到下个月', en: 'Navigate to next month' },
      },
    ],
  },
];
