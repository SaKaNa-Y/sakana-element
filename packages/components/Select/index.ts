import { withInstall } from '@sakana-element/utils';
import Option from './Option.vue';
import Select from './Select.vue';

export const PxSelect = withInstall(Select);
export const PxOption = withInstall(Option);

export * from './types';
