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
