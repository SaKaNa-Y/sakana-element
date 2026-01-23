import Select from './Select.vue';
import Option from './Option.vue';

import { withInstall } from '@sakana-element/utils';

export const PxSelect = withInstall(Select);
export const PxOption = withInstall(Option);

console.log('Select', Select, 'Option', Option);

export * from './types';
