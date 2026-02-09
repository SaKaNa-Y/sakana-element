import { withInstall } from '@sakana-element/utils';
import ConfigProvider from './ConfigProvider.vue';

export const PxConfigProvider = withInstall(ConfigProvider);

export * from './hooks';
export * from './types';
