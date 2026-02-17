import { getRegisteredIconNames, hasPixelIcon } from '@sakana-element/utils';
import { describe, expect, it } from 'vitest';
import { defaultPixelIcons } from '../icons';

describe('Icon Collection', () => {
  it('should have all default pixel icons registered', () => {
    const registeredNames = getRegisteredIconNames();
    expect(registeredNames.length).toBeGreaterThanOrEqual(486);
  });

  it('defaultPixelIcons should contain at least 486 icons', () => {
    const iconNames = Object.keys(defaultPixelIcons);
    expect(iconNames.length).toBeGreaterThanOrEqual(486);
  });

  it('all defaultPixelIcons should be registered in the registry', () => {
    const iconNames = Object.keys(defaultPixelIcons);
    iconNames.forEach((name) => {
      expect(hasPixelIcon(name)).toBe(true);
    });
  });

  it('common icons should be present', () => {
    const commonIcons = [
      'check',
      'close',
      'loader',
      'home',
      'user',
      'search',
      'heart',
      'eye',
      'edit',
      'trash',
      'notification',
      'bookmark',
    ];
    commonIcons.forEach((name) => {
      expect(hasPixelIcon(name)).toBe(true);
    });
  });

  it('brand icons should be present', () => {
    const brandIcons = ['github', 'android', 'bitcoin'];
    brandIcons.forEach((name) => {
      expect(hasPixelIcon(name)).toBe(true);
    });
  });
});

describe('Icon Collection Filtering', () => {
  const allIconNames = Object.keys(defaultPixelIcons);

  it('should filter icons by search keyword', () => {
    const keyword = 'arrow';
    const filtered = allIconNames.filter((name) =>
      name.toLowerCase().includes(keyword.toLowerCase()),
    );
    expect(filtered.length).toBeGreaterThan(0);
    filtered.forEach((name) => {
      expect(name.toLowerCase()).toContain('arrow');
    });
  });

  it('should be case-insensitive when filtering', () => {
    const lower = allIconNames.filter((n) => n.includes('check'));
    const upper = allIconNames.filter((n) => n.toLowerCase().includes('CHECK'.toLowerCase()));
    expect(lower).toEqual(upper);
  });

  it('should return all icons when search is empty', () => {
    const keyword = '';
    const filtered = allIconNames.filter((name) =>
      name.toLowerCase().includes(keyword.toLowerCase()),
    );
    expect(filtered.length).toBe(allIconNames.length);
  });

  it('should return empty array for non-matching search', () => {
    const keyword = 'zzzznonexistentzzzz';
    const filtered = allIconNames.filter((name) =>
      name.toLowerCase().includes(keyword.toLowerCase()),
    );
    expect(filtered.length).toBe(0);
  });

  it('should find partial matches', () => {
    const keyword = 'chev';
    const filtered = allIconNames.filter((name) =>
      name.toLowerCase().includes(keyword.toLowerCase()),
    );
    expect(filtered.length).toBeGreaterThanOrEqual(4); // chevron-down, -up, -left, -right
    expect(filtered).toEqual(
      expect.arrayContaining(['chevron-down', 'chevron-up', 'chevron-left', 'chevron-right']),
    );
  });
});
