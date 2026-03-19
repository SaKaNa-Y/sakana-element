import type { ColorTemplate } from '@sakana-element/utils';
import type { InjectionKey } from 'vue';
import type { CarouselContext } from './types';

export const CAROUSEL_CTX_KEY: InjectionKey<CarouselContext> = Symbol('carouselContext');

export const PRESET_CAROUSEL_COLORS = new Set(['primary', 'success', 'warning', 'danger', 'info']);

export const CAROUSEL_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'border-color': 'color',
    'shadow-color': 'dark',
    'indicator-active-color': 'color',
    'arrow-color': 'color',
  },
};
