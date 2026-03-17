<script setup lang="ts">
import { computed, provide } from 'vue';
import { useFormItem } from '../Form/hooks';
import { CHECKBOX_GROUP_CTX_KEY } from './constants';
import type { CheckboxGroupContext, CheckboxGroupEmits, CheckboxGroupProps } from './types';

defineOptions({ name: 'PxCheckboxGroup' });
const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  disabled: false,
});
const emits = defineEmits<CheckboxGroupEmits>();
const { formItem } = useFormItem();

const changeEvent: CheckboxGroupContext['changeEvent'] = (value) => {
  emits('update:modelValue', value);
  emits('change', value);
  formItem?.validate('change').catch((err: Error) => console.debug(err));
};

provide(CHECKBOX_GROUP_CTX_KEY, {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  size: computed(() => props.size),
  type: computed(() => props.type),
  color: computed(() => props.color),
  min: computed(() => props.min),
  max: computed(() => props.max),
  changeEvent,
});
</script>

<template>
  <div class="px-checkbox-group" role="group">
    <slot />
  </div>
</template>

<style>
@import './style.css';
</style>
