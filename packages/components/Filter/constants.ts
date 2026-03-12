import type { ColorTemplate } from '@sakana-element/utils';
import type { InjectionKey } from 'vue';
import type { FilterContext } from './types';

export const FILTER_CTX_KEY: InjectionKey<FilterContext> = Symbol('filterContext');

export const FILTER_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'active-color': 'color',
    'active-border-color': 'dark',
  },
};
