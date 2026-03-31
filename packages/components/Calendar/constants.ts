import type { ColorTemplate } from '@sakana-element/utils';

/** Number of cells in the calendar grid (6 rows × 7 columns). */
export const CALENDAR_GRID_SIZE = 42;

/** Number of days in a week. */
export const DAYS_PER_WEEK = 7;

export const CALENDAR_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  default: {
    'selected-bg-color': 'color',
    'selected-text-color': 'contrast',
    'selected-border-color': 'dark',
    'hover-bg-color': 'light',
    'today-border-color': 'color',
  },
};
