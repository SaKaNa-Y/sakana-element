import { describe, expect, it } from 'vitest';
import { getIconNameMap, resolveIconName } from '../icon-map';

describe('utils/icon-map', () => {
  describe('resolveIconName', () => {
    it.each([
      ['spinner', 'loader'],
      ['loading', 'loader'],
      ['xmark', 'close'],
      ['x', 'close'],
      ['times', 'close'],
      ['circle-xmark', 'close-box'],
      ['success', 'check'],
      ['circle-check', 'check'],
      ['warning', 'warning-box'],
      ['circle-exclamation', 'warning-box'],
      ['angle-down', 'chevron-down'],
      ['angle-up', 'chevron-up'],
      ['angle-left', 'chevron-left'],
      ['angle-right', 'chevron-right'],
      ['gear', 'sliders'],
      ['cog', 'sliders'],
      ['info', 'info-box'],
      ['eye-slash', 'eye-closed'],
      ['star', 'bookmark'],
    ])('should resolve "%s" to "%s"', (alias, expected) => {
      expect(resolveIconName(alias)).toBe(expected);
    });

    it('should return unrecognized name as-is', () => {
      expect(resolveIconName('loader')).toBe('loader');
      expect(resolveIconName('my-custom-icon')).toBe('my-custom-icon');
    });
  });

  describe('getIconNameMap', () => {
    it('should return an object with expected alias keys', () => {
      const map = getIconNameMap();
      expect(map).toHaveProperty('spinner', 'loader');
      expect(map).toHaveProperty('xmark', 'close');
      expect(map).toHaveProperty('gear', 'sliders');
    });

    it('should return a copy that does not affect the source', () => {
      const map = getIconNameMap();
      map.spinner = 'modified';
      expect(getIconNameMap().spinner).toBe('loader');
    });
  });
});
