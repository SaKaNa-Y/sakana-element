import type { ColorTemplate } from '@sakana-element/utils';

export const PRESET_FILE_INPUT_COLORS = new Set([
  'primary',
  'success',
  'warning',
  'danger',
  'info',
]);

export const FILE_INPUT_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'border-color': 'color',
    'hover-border-color': 'dark',
    'shadow-color': 'dark',
  },
  ghost: {
    'border-color': 'transparent',
    'hover-border-color': 'color',
    'shadow-color': 'transparent',
    'hover-shadow-color': 'dark',
  },
};
