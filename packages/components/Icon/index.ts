import Icon from './Icon.vue';
import { withInstall, registerPixelIcons } from '@sakana-element/utils';
import { defaultPixelIcons } from './icons';

export const PxIcon = withInstall(Icon);

export * from './types';

/**
 * Register all default pixel icons from pixelarticons
 * Call this function before using PxIcon to ensure icons are available
 */
export function registerDefaultPixelIcons(): void {
  registerPixelIcons(defaultPixelIcons);
}

// Export icons for direct access
export { defaultPixelIcons } from './icons';
