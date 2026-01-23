import { ref, onMounted, onUnmounted, type Ref } from 'vue';

/**
 * Composable for detecting system color scheme preference
 *
 * @returns System theme preference utilities
 *
 * @example
 * ```vue
 * <script setup>
 * import { useSystemTheme } from '@sakana-element/hooks';
 *
 * const { prefersDark, prefers } = useSystemTheme();
 * </script>
 *
 * <template>
 *   <div>System prefers: {{ prefers }}</div>
 * </template>
 * ```
 */
export function useSystemTheme() {
  const prefersDark: Ref<boolean> = ref(false);

  let mediaQuery: MediaQueryList | null = null;
  let handleChange: ((e: MediaQueryListEvent | MediaQueryList) => void) | null = null;

  onMounted(() => {
    if (typeof window === 'undefined') return;

    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDark.value = mediaQuery.matches;

    handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      prefersDark.value = e.matches;
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }
  });

  onUnmounted(() => {
    if (!mediaQuery || !handleChange) return;

    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.removeListener(handleChange);
    }
  });

  return {
    /** Whether system prefers dark mode */
    prefersDark,

    /** System color scheme preference */
    prefers: ref<'light' | 'dark'>('light'),
  };
}
