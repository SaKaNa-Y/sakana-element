import type { ApiSection } from './types';

export const configProviderApi: ApiSection[] = [
  {
    title: { zh: '属性', en: 'Props' },
    items: [
      {
        name: 'locale',
        category: 'behavior',
        type: 'Language',
        desc: {
          zh: '语言配置对象，用于覆盖组件的默认语言',
          en: 'Language configuration object to override default component language',
        },
      },
      {
        name: 'extendsI18nMsg',
        category: 'behavior',
        type: 'TranslatePair',
        desc: {
          zh: '扩展的国际化消息，与现有消息合并',
          en: 'Extended i18n messages, merged with existing messages',
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
        type: '{ config: ConfigProviderProps }',
        desc: {
          zh: '默认插槽，用于包裹需要全局配置的组件',
          en: 'Default slot for wrapping components that need global configuration',
        },
      },
    ],
  },
];
