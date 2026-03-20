import type { ColorTemplate } from '@sakana-element/utils';
import type { InjectionKey } from 'vue';
import type { CollapsibleContext } from './types';

export const COLLAPSIBLE_CTX_KEY: InjectionKey<CollapsibleContext> = Symbol('collapsibleContext');

export const PRESET_COLLAPSIBLE_COLORS = new Set([
  'primary',
  'success',
  'warning',
  'danger',
  'info',
]);

export const COLLAPSIBLE_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'border-color': 'color',
    'shadow-color': 'dark',
    'trigger-hover-bg': 'light',
  },
  ghost: {
    'border-color': 'transparent',
    'shadow-color': 'transparent',
    'trigger-hover-bg': 'light',
  },
};
