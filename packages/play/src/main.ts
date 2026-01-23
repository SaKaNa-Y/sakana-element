import { createApp } from 'vue';
import App from './App.vue';
// Import from source for development
import SakanaElement from '../../core/index';
import '@sakana-element/theme/index.css';

createApp(App).use(SakanaElement).mount('#app');
