import { describe, expect, it } from 'vitest';
import {
  createColorPalette,
  darken,
  getTextColor,
  lighten,
  resolveColorVars,
  SIMPLE_COLOR_TEMPLATES,
} from '../color';

describe('darken', () => {
  it('should darken a color by the given amount', () => {
    expect(darken('#ffffff', 50)).toBe('#808080');
  });

  it('should not go below #000000', () => {
    expect(darken('#000000', 50)).toBe('#000000');
  });
});

describe('lighten', () => {
  it('should lighten a color by the given amount', () => {
    expect(lighten('#000000', 50)).toBe('#7f7f7f');
  });

  it('should not go above #ffffff', () => {
    expect(lighten('#ffffff', 50)).toBe('#ffffff');
  });
});

describe('getTextColor', () => {
  it('should return dark text for light backgrounds', () => {
    expect(getTextColor('#ffffff')).toBe('#1e1e2e');
  });

  it('should return white text for dark backgrounds', () => {
    expect(getTextColor('#000000')).toBe('#ffffff');
  });
});

describe('createColorPalette', () => {
  it('should return all expected palette keys', () => {
    const palette = createColorPalette('#3498db');
    expect(palette).toHaveProperty('color', '#3498db');
    expect(palette).toHaveProperty('dark');
    expect(palette).toHaveProperty('light');
    expect(palette).toHaveProperty('contrast');
    expect(palette).toHaveProperty('transparent', 'transparent');
  });

  it('should derive dark via darken(hex, 15)', () => {
    const hex = '#3498db';
    const palette = createColorPalette(hex);
    expect(palette.dark).toBe(darken(hex, 15));
  });

  it('should derive light via lighten(hex, 35)', () => {
    const hex = '#3498db';
    const palette = createColorPalette(hex);
    expect(palette.light).toBe(lighten(hex, 35));
  });

  it('should derive contrast via getTextColor', () => {
    const hex = '#3498db';
    const palette = createColorPalette(hex);
    expect(palette.contrast).toBe(getTextColor(hex));
  });
});

describe('resolveColorVars', () => {
  it('should prefix CSS variables correctly', () => {
    const palette = { color: '#ff0000', dark: '#cc0000' };
    const template = { 'bg-color': 'color', 'border-color': 'dark' };
    const result = resolveColorVars(palette, 'px-test', template);

    expect(result).toEqual({
      '--px-test-bg-color': '#ff0000',
      '--px-test-border-color': '#cc0000',
    });
  });

  it('should map template keys to palette values', () => {
    const palette = { a: '1', b: '2', c: '3' };
    const template = { x: 'a', y: 'b', z: 'c' };
    const result = resolveColorVars(palette, 'prefix', template);

    expect(result).toEqual({
      '--prefix-x': '1',
      '--prefix-y': '2',
      '--prefix-z': '3',
    });
  });

  it('should return empty object for empty template', () => {
    const palette = { color: '#ff0000' };
    expect(resolveColorVars(palette, 'px-test', {})).toEqual({});
  });
});

describe('SIMPLE_COLOR_TEMPLATES', () => {
  it('should have outline, dash, and default variants', () => {
    expect(SIMPLE_COLOR_TEMPLATES).toHaveProperty('outline');
    expect(SIMPLE_COLOR_TEMPLATES).toHaveProperty('dash');
    expect(SIMPLE_COLOR_TEMPLATES).toHaveProperty('default');
  });

  it('outline should set bg-color to transparent', () => {
    expect(SIMPLE_COLOR_TEMPLATES.outline['bg-color']).toBe('transparent');
  });

  it('outline should set shadow-color to transparent', () => {
    expect(SIMPLE_COLOR_TEMPLATES.outline['shadow-color']).toBe('transparent');
  });

  it('dash should set bg-color to light', () => {
    expect(SIMPLE_COLOR_TEMPLATES.dash['bg-color']).toBe('light');
  });

  it('dash should set shadow-color to transparent', () => {
    expect(SIMPLE_COLOR_TEMPLATES.dash['shadow-color']).toBe('transparent');
  });

  it('default should use contrast for text-color', () => {
    expect(SIMPLE_COLOR_TEMPLATES.default['text-color']).toBe('contrast');
  });

  it('default should use dark for shadow-color', () => {
    expect(SIMPLE_COLOR_TEMPLATES.default['shadow-color']).toBe('dark');
  });

  it('should produce correct CSS vars when combined with resolveColorVars', () => {
    const palette = createColorPalette('#e74c3c');
    const result = resolveColorVars(palette, 'px-alert', SIMPLE_COLOR_TEMPLATES.outline);

    expect(result['--px-alert-text-color']).toBe('#e74c3c');
    expect(result['--px-alert-bg-color']).toBe('transparent');
    expect(result['--px-alert-border-color']).toBe('#e74c3c');
    expect(result['--px-alert-shadow-color']).toBe('transparent');
  });
});
