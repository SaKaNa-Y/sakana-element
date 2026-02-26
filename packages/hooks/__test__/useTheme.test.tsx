import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

type ChangeHandler = (e: { matches: boolean }) => void;

function createMockMediaQuery(initialMatches = false) {
  const handlers: ChangeHandler[] = [];
  return {
    matches: initialMatches,
    addEventListener: vi.fn((_: string, handler: ChangeHandler) => {
      handlers.push(handler);
    }),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    _trigger(newMatches: boolean) {
      this.matches = newMatches;
      handlers.forEach((h) => h({ matches: newMatches }));
    },
  };
}

let useTheme: typeof import('../useTheme')['useTheme'];
let mockMql: ReturnType<typeof createMockMediaQuery>;

describe('hooks/useTheme', () => {
  beforeEach(async () => {
    vi.resetModules();
    document.documentElement.classList.remove('px-dark');
    localStorage.clear();
    mockMql = createMockMediaQuery(false);
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => mockMql),
    );
    const mod = await import('../useTheme');
    useTheme = mod.useTheme;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('initialization', () => {
    it('should default to system theme when no localStorage value', () => {
      const { theme } = useTheme();
      expect(theme.value).toBe('system');
    });

    it('should read dark from localStorage', () => {
      localStorage.setItem('px-theme', 'dark');
      const { isDark, theme } = useTheme();
      expect(theme.value).toBe('dark');
      expect(isDark.value).toBe(true);
    });

    it('should read light from localStorage', () => {
      localStorage.setItem('px-theme', 'light');
      const { isDark, theme } = useTheme();
      expect(theme.value).toBe('light');
      expect(isDark.value).toBe(false);
    });

    it('should ignore invalid localStorage values and default to system', () => {
      localStorage.setItem('px-theme', 'invalid');
      const { theme } = useTheme();
      expect(theme.value).toBe('system');
    });

    it('should add px-dark class when initializing in dark mode', () => {
      localStorage.setItem('px-theme', 'dark');
      useTheme();
      expect(document.documentElement.classList.contains('px-dark')).toBe(true);
    });
  });

  describe('setTheme', () => {
    it('setTheme dark should set isDark to true', () => {
      const { setTheme, isDark } = useTheme();
      setTheme('dark');
      expect(isDark.value).toBe(true);
    });

    it('setTheme dark should add px-dark class', () => {
      const { setTheme } = useTheme();
      setTheme('dark');
      expect(document.documentElement.classList.contains('px-dark')).toBe(true);
    });

    it('setTheme light should remove px-dark class', () => {
      const { setTheme } = useTheme();
      setTheme('dark');
      expect(document.documentElement.classList.contains('px-dark')).toBe(true);
      setTheme('light');
      expect(document.documentElement.classList.contains('px-dark')).toBe(false);
    });

    it('setTheme should persist to localStorage', () => {
      const { setTheme } = useTheme();
      setTheme('dark');
      expect(localStorage.getItem('px-theme')).toBe('dark');
      setTheme('light');
      expect(localStorage.getItem('px-theme')).toBe('light');
    });

    it('setTheme system should resolve via matchMedia', () => {
      mockMql.matches = true;
      const { setTheme, isDark } = useTheme();
      setTheme('system');
      expect(isDark.value).toBe(true);
    });
  });

  describe('toggleTheme', () => {
    it('should toggle from light to dark', () => {
      const { toggleTheme, isDark } = useTheme();
      expect(isDark.value).toBe(false);
      toggleTheme();
      expect(isDark.value).toBe(true);
    });

    it('should toggle from dark to light', () => {
      const { setTheme, toggleTheme, isDark } = useTheme();
      setTheme('dark');
      expect(isDark.value).toBe(true);
      toggleTheme();
      expect(isDark.value).toBe(false);
    });
  });

  describe('shared state', () => {
    it('multiple useTheme calls should share the same state', () => {
      const first = useTheme();
      const second = useTheme();
      first.setTheme('dark');
      expect(second.isDark.value).toBe(true);
    });
  });

  describe('system mode reactivity', () => {
    it('should react to matchMedia changes in system mode', () => {
      const { isDark, theme } = useTheme();
      expect(theme.value).toBe('system');
      expect(isDark.value).toBe(false);
      mockMql._trigger(true);
      expect(isDark.value).toBe(true);
    });

    it('should not react to matchMedia changes when not in system mode', () => {
      const { isDark, setTheme } = useTheme();
      setTheme('light');
      mockMql._trigger(true);
      expect(isDark.value).toBe(false);
    });
  });

  describe('legacy addListener fallback', () => {
    it('should use addListener when addEventListener is unavailable', async () => {
      vi.resetModules();
      document.documentElement.classList.remove('px-dark');
      localStorage.clear();
      const legacyHandlers: ChangeHandler[] = [];
      const legacyMql = {
        matches: false,
        addEventListener: undefined as any,
        removeEventListener: undefined as any,
        addListener: vi.fn((_handler: ChangeHandler) => {
          legacyHandlers.push(_handler);
        }),
        removeListener: vi.fn(),
        _trigger(newMatches: boolean) {
          this.matches = newMatches;
          legacyHandlers.forEach((h) => h({ matches: newMatches }));
        },
      };
      vi.stubGlobal(
        'matchMedia',
        vi.fn(() => legacyMql),
      );
      const mod = await import('../useTheme');
      const localUseTheme = mod.useTheme;

      const { isDark, theme } = localUseTheme();
      expect(theme.value).toBe('system');
      expect(legacyMql.addListener).toHaveBeenCalled();

      legacyMql._trigger(true);
      expect(isDark.value).toBe(true);
    });
  });
});
