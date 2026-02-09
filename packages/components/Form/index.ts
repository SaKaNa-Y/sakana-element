import { withInstall } from '@sakana-element/utils';
import Form from './Form.vue';
import FormItem from './FormItem.vue';

export const PxForm = withInstall(Form);
export const PxFormItem = withInstall(FormItem);

export * from './hooks';
export * from './types';
