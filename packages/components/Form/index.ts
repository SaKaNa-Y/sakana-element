import Form from './Form.vue';
import FormItem from './FormItem.vue';

import { withInstall } from '@sakana-element/utils';

export const PxForm = withInstall(Form);
export const PxFormItem = withInstall(FormItem);

export * from './types';
export * from './hooks';
