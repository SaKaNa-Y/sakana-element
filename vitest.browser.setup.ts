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
