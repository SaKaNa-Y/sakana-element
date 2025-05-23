import Form from './Form.vue';
import FormItem from './FormItem.vue';

import { withInstall } from '@sakana-element/utils';

export const ErForm = withInstall(Form);
export const ErFormItem = withInstall(FormItem);

export * from './types';
export * from './hooks';
