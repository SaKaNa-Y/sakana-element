import { createApp } from 'vue';
// Import from source for development
import SakanaElement from '../../core/index';
import App from './App.vue';
import '@sakana-element/theme/index.css';

createApp(App).use(SakanaElement).mount('#app');
