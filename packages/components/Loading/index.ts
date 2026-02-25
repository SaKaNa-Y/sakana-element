import { withInstall } from '@sakana-element/utils';
import type { App } from 'vue';
import { vLoading } from './directive';
import LoadingIndicator from './LoadingIndicator.vue';
import { Loading } from './service';

export const PxLoadingIndicator = withInstall(LoadingIndicator);

export const PxLoading = {
  name: 'PxLoading',
  install(app: App) {
    app.directive('loading', vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading,
};

export default PxLoading;

export { vLoading, vLoading as PxLoadingDirective, Loading as PxLoadingService };

export * from './types';
