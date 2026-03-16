// Import order matters: DefaultTheme must load before SakanaElement
// so that VitePress's default CSS is overridden by SakanaElement's zpix font.
import type { App } from 'vue';
import { ElementPlusContainer } from 'vitepress-preview-component';
import DefaultTheme from 'vitepress/theme';
import SakanaElement from 'sakana-element';
import ApiTable from './components/ApiTable.vue';
import ComponentNav from './components/ComponentNav.vue';
import CustomLayout from './components/CustomLayout.vue';

import 'vitepress-preview-component/style.css';
import '@sakana-element/theme/index.css';

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer);
    app.component('ApiTable', ApiTable);
    app.component('ComponentNav', ComponentNav);
    app.use(SakanaElement);
  },
};
