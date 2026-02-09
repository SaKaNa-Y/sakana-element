import { describe, expect, it } from 'vitest';
import { addUnit } from '../style';

describe('utils/style', () => {
  describe('addUnit', () => {
    it('should return empty string for undefined', () => {
      expect(addUnit(undefined)).toBe('');
    });

    it('should return empty string for empty string', () => {
      expect(addUnit('')).toBe('');
    });

    it('should append default px unit to a number', () => {
      expect(addUnit(100)).toBe('100px');
    });

    it('should append custom unit to a number', () => {
      expect(addUnit(100, 'em')).toBe('100em');
    });

    it('should append default px unit to a numeric string', () => {
      expect(addUnit('50')).toBe('50px');
    });

    it('should append custom unit to a numeric string', () => {
      expect(addUnit('50', 'rem')).toBe('50rem');
    });

    it('should return string with existing unit as-is', () => {
      expect(addUnit('100px')).toBe('100px');
      expect(addUnit('2em')).toBe('2em');
      expect(addUnit('50%')).toBe('50%');
    });

    it('should return non-numeric string as-is', () => {
      expect(addUnit('auto')).toBe('auto');
      expect(addUnit('inherit')).toBe('inherit');
    });
  });
});
