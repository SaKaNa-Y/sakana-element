//存依赖注入的key

import type { ColorTemplate } from '@sakana-element/utils';
import type { InjectionKey } from 'vue'; //导入vue的依赖注入key
import type { ButtonGroupContext } from './types'; //导入按钮组上下文类型

export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext> =
  Symbol('BUTTON_GROUP_CTX_KEY');
//作用是提供按钮组上下文

export const BUTTON_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  link: {
    'text-color': 'color',
    'bg-color': 'transparent',
    'border-color': 'transparent',
    'shadow-color': 'transparent',
    'hover-text-color': 'dark',
    'hover-bg-color': 'transparent',
    'hover-border-color': 'transparent',
    'active-text-color': 'dark',
    'active-bg-color': 'transparent',
    'active-border-color': 'transparent',
    'disabled-text-color': 'light',
    'disabled-bg-color': 'transparent',
    'disabled-border-color': 'transparent',
  },
  ghost: {
    'text-color': 'color',
    'bg-color': 'transparent',
    'border-color': 'transparent',
    'shadow-color': 'transparent',
    'hover-text-color': 'dark',
    'hover-bg-color': 'lighter',
    'hover-border-color': 'transparent',
    'active-text-color': 'dark',
    'active-bg-color': 'light',
    'active-border-color': 'transparent',
    'disabled-text-color': 'light',
    'disabled-bg-color': 'transparent',
    'disabled-border-color': 'transparent',
  },
  dash: {
    'text-color': 'color',
    'bg-color': 'lighter',
    'border-color': 'color',
    'shadow-color': 'transparent',
    'hover-text-color': 'dark',
    'hover-bg-color': 'light',
    'hover-border-color': 'dark',
    'active-text-color': 'dark',
    'active-bg-color': 'color',
    'active-border-color': 'dark',
    'disabled-text-color': 'light',
    'disabled-bg-color': 'lighter',
    'disabled-border-color': 'light',
  },
  plain: {
    'text-color': 'color',
    'bg-color': 'lighter',
    'border-color': 'color',
    'hover-text-color': 'contrast',
    'hover-bg-color': 'color',
    'hover-border-color': 'color',
    'active-text-color': 'contrast',
    'active-bg-color': 'dark',
    'active-border-color': 'dark',
    'disabled-text-color': 'light',
    'disabled-bg-color': 'lighter',
    'disabled-border-color': 'light',
  },
  default: {
    'text-color': 'contrast',
    'bg-color': 'color',
    'border-color': 'dark',
    'shadow-color': 'dark',
    'hover-text-color': 'contrast',
    'hover-bg-color': 'light',
    'hover-border-color': 'color',
    'active-text-color': 'contrast',
    'active-bg-color': 'dark',
    'active-border-color': 'dark',
    'disabled-text-color': 'contrast',
    'disabled-bg-color': 'light',
    'disabled-border-color': 'light',
  },
};
