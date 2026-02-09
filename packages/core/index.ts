import { registerDefaultPixelIcons } from '@sakana-element/components';
import components from './components';
import makeInstaller from './makeInstaller';
import printLogo from './printLogo';
import '@sakana-element/theme/index.css';

printLogo();

// Register pixel icons for PxIcon component
registerDefaultPixelIcons();

// Register CSS Houdini Paint Worklets for pixel-style borders
if (typeof CSS !== 'undefined' && 'paintWorklet' in CSS) {
  try {
    // Note: The paintworklet files should be served from the theme directory
    // In production, adjust the path based on your deployment setup
    CSS.paintWorklet.addModule(
      new URL('@sakana-element/theme/paintworklet/pixel-border.js', import.meta.url).href,
    );
    CSS.paintWorklet.addModule(
      new URL('@sakana-element/theme/paintworklet/pixel-shadow.js', import.meta.url).href,
    );
  } catch (error) {
    void error;
  }
}

const installer = makeInstaller(components); //为了让组件支持按需引入，我们需要将组件注册到一个全局的安装器中

export * from '@sakana-element/components'; //导出所有组件
export * from '@sakana-element/locale';
export default installer;
