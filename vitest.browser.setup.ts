// Suppress known third-party/framework warnings that cannot be fixed from application code:
// 1. Vue 3.4+ decodeEntities compiler warning (plugin-vue passes option during Node-side compilation)
// 2. Slot invocation warning (Select.vue inspects slot children in computed)
// 3. PostCSS 'from' option warning (Vite internal CSS pipeline)
const _warn = console.warn;
console.warn = (...args: unknown[]) => {
  if (typeof args[0] === 'string') {
    if (
      args[0].includes('decodeEntities option is passed') ||
      args[0].includes('Slot "default" invoked outside of the render function') ||
      args[0].includes('did not pass the `from` option')
    )
      return;
  }
  _warn(...args);
};

import { registerPixelIcons } from '@sakana-element/utils';
import { defaultPixelIcons } from './packages/components/Icon/icons';

// Register pixel icons for tests
registerPixelIcons(defaultPixelIcons);

// Disable CSS transitions and animations in browser mode tests
// so elements are added/removed instantly without waiting for animation frames
const style = document.createElement('style');
style.textContent = `
  *, *::before, *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation-duration: 0s !important;
    animation-delay: 0s !important;
  }
`;
document.head.appendChild(style);
