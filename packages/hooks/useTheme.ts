import { ref, computed, type Ref } from 'vue';

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'px-theme';
const DARK_CLASS = 'px-dark';

// Shared state across all instances
const currentTheme: Ref<Theme> = ref('system');
const isDark: Ref<boolean> = ref(false);

/**
 * Update the document's theme class
 */
function updateThemeClass(dark: boolean) {
  if (typeof document === 'undefined') return;

  if (dark) {
    document.documentElement.classList.add(DARK_CLASS);
  } else {
    document.documentElement.classList.remove(DARK_CLASS);
  }
}

/**
 * Get system color scheme preference
 */
function getSystemPreference(): boolean {
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Resolve theme to boolean (dark = true, light = false)
 */
function resolveTheme(theme: Theme): boolean {
  if (theme === 'system') {
    return getSystemPreference();
  }
  return theme === 'dark';
}

/**
 * Initialize theme from localStorage
 */
function initializeTheme() {
  if (typeof window === 'undefined') return;

  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored && ['light', 'dark', 'system'].includes(stored)) {
    currentTheme.value = stored;
  } else {
    currentTheme.value = 'system';
  }

  isDark.value = resolveTheme(currentTheme.value);
  updateThemeClass(isDark.value);
}

// Initialize once
let initialized = false;

/**
 * Composable for managing light/dark theme
 *
 * @returns Theme management utilities
 *
 * @example
 * ```vue
 * <script setup>
 * import { useTheme } from '@sakana-element/hooks';
 *
 * const { isDark, theme, toggleTheme, setTheme } = useTheme();
 * </script>
 *
 * <template>
 *   <button @click="toggleTheme">
 *     Current: {{ isDark ? 'Dark' : 'Light' }}
 *   </button>
 * </template>
 * ```
 */
export function useTheme() {
  // Initialize on first use
  if (!initialized && typeof window !== 'undefined') {
    initializeTheme();
    initialized = true;

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (currentTheme.value === 'system') {
        isDark.value = e.matches;
        updateThemeClass(isDark.value);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }
  }

  /**
   * Set theme mode
   */
  const setTheme = (newTheme: Theme) => {
    currentTheme.value = newTheme;
    isDark.value = resolveTheme(newTheme);
    updateThemeClass(isDark.value);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newTheme);
    }
  };

  /**
   * Toggle between light and dark (not system)
   */
  const toggleTheme = () => {
    const newTheme = isDark.value ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return {
    /** Current theme setting ('light' | 'dark' | 'system') */
    theme: computed(() => currentTheme.value),

    /** Whether dark mode is currently active */
    isDark: computed(() => isDark.value),

    /** Set theme mode */
    setTheme,

    /** Toggle between light and dark */
    toggleTheme,
  };
}
