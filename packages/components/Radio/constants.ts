import type { ColorTemplate } from '@sakana-element/utils';
import type { InjectionKey } from 'vue';
import type { RadioGroupContext } from './types';

export const RADIO_GROUP_CTX_KEY: InjectionKey<RadioGroupContext> = Symbol('radioGroupContext');

export const RADIO_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'checked-color': 'color',
    'checked-border-color': 'dark',
  },
};
