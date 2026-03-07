import type { ColorTemplate } from '@sakana-element/utils';
import type { InjectionKey } from 'vue';
import type { CheckboxGroupContext } from './types';

export const CHECKBOX_GROUP_CTX_KEY: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContext');

export const CHECKBOX_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'checked-color': 'color',
    'checked-border-color': 'dark',
  },
};
