import { beforeEach, describe, expect, it } from 'vitest';
import {
  clearPixelIconRegistry,
  getPixelIcon,
  getRegisteredIconNames,
  hasPixelIcon,
  registerPixelIcon,
  registerPixelIcons,
} from '../icon-registry';

describe('utils/icon-registry', () => {
  beforeEach(() => {
    clearPixelIconRegistry();
  });

  it('registerPixelIcon should store an icon retrievable by getPixelIcon', () => {
    registerPixelIcon('test-icon', '<svg>test</svg>');
    expect(getPixelIcon('test-icon')).toBe('<svg>test</svg>');
  });

  it('getPixelIcon should return undefined for unregistered name', () => {
    expect(getPixelIcon('nonexistent')).toBeUndefined();
  });

  it('hasPixelIcon should return true for registered icon', () => {
    registerPixelIcon('check', '<svg>check</svg>');
    expect(hasPixelIcon('check')).toBe(true);
  });

  it('hasPixelIcon should return false for unregistered icon', () => {
    expect(hasPixelIcon('nonexistent')).toBe(false);
  });

  it('registerPixelIcons should bulk-register multiple icons', () => {
    registerPixelIcons({
      loader: '<svg>loader</svg>',
      close: '<svg>close</svg>',
      check: '<svg>check</svg>',
    });
    expect(getPixelIcon('loader')).toBe('<svg>loader</svg>');
    expect(getPixelIcon('close')).toBe('<svg>close</svg>');
    expect(getPixelIcon('check')).toBe('<svg>check</svg>');
  });

  it('getRegisteredIconNames should return all registered names', () => {
    registerPixelIcons({
      a: '<svg>a</svg>',
      b: '<svg>b</svg>',
    });
    const names = getRegisteredIconNames();
    expect(names).toContain('a');
    expect(names).toContain('b');
    expect(names).toHaveLength(2);
  });

  it('clearPixelIconRegistry should empty the registry', () => {
    registerPixelIcon('icon', '<svg>icon</svg>');
    expect(hasPixelIcon('icon')).toBe(true);
    clearPixelIconRegistry();
    expect(hasPixelIcon('icon')).toBe(false);
    expect(getRegisteredIconNames()).toHaveLength(0);
  });

  it('registerPixelIcon should overwrite existing icon with same name', () => {
    registerPixelIcon('icon', '<svg>old</svg>');
    registerPixelIcon('icon', '<svg>new</svg>');
    expect(getPixelIcon('icon')).toBe('<svg>new</svg>');
  });
});
