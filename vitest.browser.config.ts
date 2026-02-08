// vitest.browser.config.ts - Browser mode config for component tests
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue(), vueJsx()],
  define: {
    PROD: JSON.stringify(false),
    DEV: JSON.stringify(false),
    TEST: JSON.stringify(true),
  },
  test: {
    globals: true,
    include: ['packages/components/**/*.test.tsx'],
    setupFiles: [resolve(__dirname, './vitest.browser.setup.ts')],
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
    coverage: {
      provider: 'v8',
      include: ['packages/components/**/*.{ts,vue}'],
      exclude: [
        'packages/components/**/*.test.tsx',
        'packages/components/**/types.ts',
        'packages/components/**/style.css',
        'packages/components/Icon/icons/*.ts',
      ],
    },
  },
});
