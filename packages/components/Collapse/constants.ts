import type { ColorTemplate } from '@sakana-element/utils';
import type { InjectionKey } from 'vue';
import type { CollapseContext } from './types';

export const COLLAPSE_CTX_KEY: InjectionKey<CollapseContext> = Symbol('collapseContext');

export const PRESET_COLLAPSE_COLORS = new Set(['primary', 'success', 'warning', 'danger', 'info']);

export const COLLAPSE_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'border-color': 'color',
    'shadow-color': 'dark',
    'active-bg-color': 'light',
  },
  ghost: {
    'border-color': 'transparent',
    'shadow-color': 'transparent',
    'active-bg-color': 'transparent',
  },
};
