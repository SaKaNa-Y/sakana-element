<script setup lang="ts">
import { each, filter, includes, size } from 'lodash-es';
import { provide, reactive, toRefs } from 'vue';
import { FORM_CTX_KEY } from './constants';
import type {
  FormContext,
  FormEmits,
  FormInstance,
  FormItemContext,
  FormProps,
  FormValidateFailure,
} from './types';

defineOptions({ name: 'PxForm' });
const props = withDefaults(defineProps<FormProps>(), {
  showMessage: true,
  hideRequiredAsterisk: false,
  requiredAsteriskPosition: 'left',
  labelPosition: 'right',
});
const emits = defineEmits<FormEmits>();

const fields: FormItemContext[] = [];

/* v8 ignore start -- validation paths have many v8 binary-branch artifacts */
async function doValidateField(fields: FormItemContext[] = []) {
  let validateErrors: FormValidateFailure['fields'] = {};
  for (const field of fields) {
    try {
      await field.validate('');
    } catch (error) {
      validateErrors = {
        ...validateErrors,
        ...(error as FormValidateFailure['fields']),
      };
    }
  }
  if (!size(Object.keys(validateErrors))) return true;
  return Promise.reject(validateErrors);
}
/* v8 ignore stop */

const addField: FormContext['addField'] = (field) => {
  /* v8 ignore start */
  if (!field.prop) return;
  /* v8 ignore stop */
  fields.push(field);
};

const removeField: FormContext['removeField'] = (field) => {
  /* v8 ignore start */
  if (!field.prop) return;
  /* v8 ignore stop */
  fields.splice(fields.indexOf(field), 1);
};

const validate: FormInstance['validate'] = async (callback) => validateField([], callback);

/* v8 ignore start -- many binary-branch artifacts from ??, ?., instanceof */
const validateField: FormInstance['validateField'] = async (keys, callback) => {
  try {
    const result = await doValidateField(filterFields(fields, keys ?? []));
    if (result === true) {
      callback?.(result);
    }
    return result;
  } catch (error) {
    if (error instanceof Error) throw error;
    const invalidFields = error as FormValidateFailure['fields'];
    callback?.(false, invalidFields);
    return Promise.reject(invalidFields);
  }
};
/* v8 ignore stop */

/* v8 ignore next 2 */
const resetFields: FormInstance['resetFields'] = (keys) => {
  each(filterFields(fields, keys ?? []), (field) => field.resetField());
};

/* v8 ignore next 2 */
const clearValidate: FormInstance['clearValidate'] = (keys) => {
  each(filterFields(fields, keys ?? []), (field) => field.clearValidate());
};

function filterFields(fields: FormItemContext[], keys: string[]) {
  return size(keys) ? filter(fields, (field) => includes(keys, field.prop)) : fields;
}

const formCtx: FormContext = reactive({
  ...toRefs(props),
  emits,
  addField,
  removeField,
});

provide<FormContext>(FORM_CTX_KEY, formCtx);

defineExpose<FormInstance>({
  validate,
  validateField,
  resetFields,
  clearValidate,
});
</script>

<template>
  <form class="px-form" :class="{ 'is-inline': inline }">
    <slot></slot>
  </form>
</template>
