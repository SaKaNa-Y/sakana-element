/**
 * Icon Name Mapping
 * Maps commonly used icon names to pixelarticons names
 */

// Map of alias names to pixelarticons names
const iconNameMap: Record<string, string> = {
  // Spinner/Loading
  spinner: 'loader',
  loading: 'loader',

  // Eye icons
  'eye-slash': 'eye-closed',
  'eye-off': 'eye-closed',

  // Close/X icons
  xmark: 'close',
  x: 'close',
  times: 'close',
  'circle-xmark': 'close-box',
  'x-circle': 'close-box',
  'times-circle': 'close-box',
  error: 'close-box',

  // Info icons
  'circle-info': 'info-box',
  'info-circle': 'info-box',
  info: 'info-box',

  // Check/Success icons
  'check-circle': 'check',
  'circle-check': 'check',
  success: 'check',

  // Warning icons
  'circle-exclamation': 'warning-box',
  'exclamation-circle': 'warning-box',
  warning: 'warning-box',

  // Chevron/Arrow icons
  'angle-down': 'chevron-down',
  'caret-down': 'chevron-down',
  'angle-up': 'chevron-up',
  'caret-up': 'chevron-up',
  'angle-left': 'chevron-left',
  'caret-left': 'chevron-left',
  'angle-right': 'chevron-right',
  'caret-right': 'chevron-right',

  // Question/Help icons -> info-box (pixelarticons 没有 question 图标)
  'question-circle': 'info-box',
  'circle-question': 'info-box',
  help: 'info-box',
  question: 'info-box',

  // Settings
  gear: 'sliders',
  cog: 'sliders',
  settings: 'sliders',

  // Star -> bookmark (pixelarticons 1.8.0 没有 star 图标)
  star: 'bookmark',
  'star-solid': 'bookmark',
};

/**
 * Resolve an icon name to its pixelarticons equivalent
 * @param name - The icon name (can be an alias or direct pixelarticons name)
 * @returns The resolved pixelarticons name
 */
export function resolveIconName(name: string): string {
  // If it's a known alias, return the mapped name
  if (name in iconNameMap) {
    return iconNameMap[name];
  }
  // Otherwise return as-is (assume it's already a pixelarticons name)
  return name;
}

/**
 * Get all icon name aliases
 * @returns The icon name mapping object
 */
export function getIconNameMap(): Record<string, string> {
  return { ...iconNameMap };
}
