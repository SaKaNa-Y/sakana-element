import ConfigProvider from './ConfigProvider.vue';
import { withInstall } from '@sakana-element/utils';

export const PxConfigProvider = withInstall(ConfigProvider);

export * from './types';
export * from './hooks';
