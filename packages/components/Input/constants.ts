import type { ColorTemplate } from '@sakana-element/utils';

export const PRESET_INPUT_COLORS = new Set(['primary', 'success', 'warning', 'danger', 'info']);

export const INPUT_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'border-color': 'color',
    'hover-border-color': 'dark',
    'focus-border-color': 'dark',
    'shadow-color': 'dark',
    'focus-shadow-color': 'dark',
  },
  ghost: {
    'border-color': 'transparent',
    'hover-border-color': 'color',
    'focus-border-color': 'dark',
    'shadow-color': 'transparent',
    'focus-shadow-color': 'dark',
  },
};
