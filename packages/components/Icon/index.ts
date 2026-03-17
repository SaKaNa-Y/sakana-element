import { registerPixelIcons, withInstall } from '@sakana-element/utils';
import Icon from './Icon.vue';
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

// Re-export user-facing icon registry functions
export {
  getIconNameMap,
  getPixelIcon,
  getRegisteredIconNames,
  hasPixelIcon,
  registerPixelIcon,
  registerPixelIcons,
  resolveIconName,
} from '@sakana-element/utils';
// Export icons for direct access
export { defaultPixelIcons } from './icons';
