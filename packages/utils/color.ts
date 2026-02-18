/**
 * Darken a hex color by a percentage (0-100)
 */
export function darken(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, (num >> 16) - Math.round(2.55 * amount));
  const g = Math.max(0, ((num >> 8) & 0x00ff) - Math.round(2.55 * amount));
  const b = Math.max(0, (num & 0x0000ff) - Math.round(2.55 * amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

/**
 * Lighten a hex color by a percentage (0-100)
 */
export function lighten(hex: string, amount: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + Math.round(2.55 * amount));
  const g = Math.min(255, ((num >> 8) & 0x00ff) + Math.round(2.55 * amount));
  const b = Math.min(255, (num & 0x0000ff) + Math.round(2.55 * amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

/**
 * Determine if text should be white or dark based on background luminance
 */
export function getTextColor(hex: string): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = num >> 16;
  const g = (num >> 8) & 0x00ff;
  const b = num & 0x0000ff;
  // Relative luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#1e1e2e' : '#ffffff';
}

/** Mapping from CSS variable suffix → palette key */
export type ColorTemplate = Record<string, string>;

/**
 * Build a standard color palette from a hex color.
 * Components can extend this with additional derived colors.
 */
export function createColorPalette(hex: string): Record<string, string> {
  return {
    color: hex,
    dark: darken(hex, 15),
    light: lighten(hex, 35),
    contrast: getTextColor(hex),
    transparent: 'transparent',
  };
}

/**
 * Resolve a color template into CSS custom properties.
 *
 * @param palette  - Pre-computed color values (e.g. from createColorPalette)
 * @param prefix   - CSS variable prefix (e.g. 'px-alert', 'px-badge')
 * @param template - Maps CSS variable suffix → palette key
 * @returns Record to bind via :style
 */
export function resolveColorVars(
  palette: Record<string, string>,
  prefix: string,
  template: ColorTemplate,
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [suffix, paletteKey] of Object.entries(template)) {
    result[`--${prefix}-${suffix}`] = palette[paletteKey];
  }
  return result;
}

/**
 * Shared variant templates for simple components (Alert, Badge).
 * Each key maps a CSS variable suffix to a palette color key.
 */
export const SIMPLE_COLOR_TEMPLATES: Record<string, ColorTemplate> = {
  outline: {
    'text-color': 'color',
    'bg-color': 'transparent',
    'border-color': 'color',
    'shadow-color': 'transparent',
  },
  dash: {
    'text-color': 'color',
    'bg-color': 'light',
    'border-color': 'color',
    'shadow-color': 'transparent',
  },
  default: {
    'text-color': 'contrast',
    'bg-color': 'color',
    'border-color': 'dark',
    'shadow-color': 'dark',
  },
};
