import { describe, expect, it } from 'vitest';
import {
  useClickOutside,
  useEventListener,
  useDisabledStyle,
  useFocusController,
  useLocale,
  useOffset,
  useZIndex,
  useId,
  useTheme,
  useSystemTheme,
} from '../index';

describe('hooks/index', () => {
  it('useEventListener should be exported', () => {
    expect(useEventListener).toBeDefined();
  });
  it('useClickOutside should be exported', () => {
    expect(useClickOutside).toBeDefined();
  });
  it('useDisabledStyle should be exported', () => {
    expect(useDisabledStyle).toBeDefined();
  });
  it('useFocusController should be exported', () => {
    expect(useFocusController).toBeDefined();
  });
  it('useLocale should be exported', () => {
    expect(useLocale).toBeDefined();
  });
  it('useOffset should be exported', () => {
    expect(useOffset).toBeDefined();
  });
  it('useZIndex should be exported', () => {
    expect(useZIndex).toBeDefined();
  });
  it('useId should be exported', () => {
    expect(useId).toBeDefined();
  });
  it('useTheme should be exported', () => {
    expect(useTheme).toBeDefined();
  });
  it('useSystemTheme should be exported', () => {
    expect(useSystemTheme).toBeDefined();
  });
});
