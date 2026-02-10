/**
 * Pixel Icon Registry
 * A singleton Map registry for pixel-art SVG icons
 */

import { sanitizeSvg } from './sanitize-svg';

// The registry stores SVG strings keyed by icon name
const pixelIconRegistry = new Map<string, string>();

/**
 * Register a pixel icon SVG.
 * The SVG content is sanitized to remove dangerous tags/attributes (e.g. <script>, on* handlers)
 * before being stored in the registry.
 * @param name - The icon name (e.g., 'loader', 'close', 'check')
 * @param svg - The SVG string content
 */
export function registerPixelIcon(name: string, svg: string): void {
  pixelIconRegistry.set(name, sanitizeSvg(svg));
}

/**
 * Register multiple pixel icons at once.
 * All SVG content is sanitized before being stored.
 * @param icons - An object mapping icon names to SVG strings
 */
export function registerPixelIcons(icons: Record<string, string>): void {
  for (const [name, svg] of Object.entries(icons)) {
    pixelIconRegistry.set(name, sanitizeSvg(svg));
  }
}

/**
 * Get a pixel icon SVG by name
 * @param name - The icon name
 * @returns The SVG string or undefined if not found
 */
export function getPixelIcon(name: string): string | undefined {
  return pixelIconRegistry.get(name);
}

/**
 * Check if a pixel icon is registered
 * @param name - The icon name
 * @returns True if the icon is registered
 */
export function hasPixelIcon(name: string): boolean {
  return pixelIconRegistry.has(name);
}

/**
 * Get all registered icon names
 * @returns Array of registered icon names
 */
export function getRegisteredIconNames(): string[] {
  return Array.from(pixelIconRegistry.keys());
}

/**
 * Clear all registered icons (useful for testing)
 */
export function clearPixelIconRegistry(): void {
  pixelIconRegistry.clear();
}
