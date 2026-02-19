import type { ApiSection } from './types';

export const darkModeApi: ApiSection[] = [
  {
    title: { zh: 'useTheme', en: 'useTheme' },
    items: [
      {
        name: 'theme',
        type: "ComputedRef<'light' | 'dark' | 'system'>",
        desc: { zh: '当前主题设置', en: 'Current theme setting' },
      },
      {
        name: 'isDark',
        type: 'ComputedRef<boolean>',
        desc: { zh: '当前是否为深色模式', en: 'Whether dark mode is currently active' },
      },
      {
        name: 'setTheme',
        type: '(theme: Theme) => void',
        desc: {
          zh: "设置主题为 'light'、'dark' 或 'system'",
          en: "Set theme to 'light', 'dark', or 'system'",
        },
      },
      {
        name: 'toggleTheme',
        type: '() => void',
        desc: { zh: '在 light 和 dark 之间切换', en: 'Toggle between light and dark' },
      },
    ],
  },
  {
    title: { zh: 'useSystemTheme', en: 'useSystemTheme' },
    items: [
      {
        name: 'prefersDark',
        type: 'Ref<boolean>',
        desc: { zh: '操作系统是否偏好深色模式', en: 'Whether the OS prefers dark mode' },
      },
      {
        name: 'prefers',
        type: "Ref<'light' | 'dark'>",
        desc: { zh: '操作系统配色方案偏好', en: 'The OS color scheme preference' },
      },
    ],
  },
];
