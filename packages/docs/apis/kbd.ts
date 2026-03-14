import type { ApiSection } from './types';

export const kbdApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'size',
        category: 'size',
        type: "'large' | 'default' | 'small'",
        default: "'default'",
        desc: { zh: '尺寸', en: 'Size' },
      },
      {
        name: 'keys',
        category: 'content',
        type: 'KbdKey[]',
        desc: {
          zh: '特殊按键标识数组，支持: command, shift, ctrl, alt, option, enter, delete, escape, tab, capslock, up, down, left, right, space, win, fn, home, end, pageup, pagedown',
          en: 'Array of special key identifiers. Supports: command, shift, ctrl, alt, option, enter, delete, escape, tab, capslock, up, down, left, right, space, win, fn, home, end, pageup, pagedown',
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
        desc: { zh: '键盘按键显示内容', en: 'Keyboard key display content' },
      },
    ],
  },
];
