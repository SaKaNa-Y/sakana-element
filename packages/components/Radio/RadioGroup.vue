<script setup lang="ts">
import { computed, provide } from 'vue';
import { useFormItem } from '../Form/hooks';
import { RADIO_GROUP_CTX_KEY } from './constants';
import type { RadioGroupContext, RadioGroupEmits, RadioGroupProps } from './types';

defineOptions({ name: 'PxRadioGroup' });
const props = withDefaults(defineProps<RadioGroupProps>(), {
  disabled: false,
});
const emits = defineEmits<RadioGroupEmits>();
const { formItem } = useFormItem();

const changeEvent: RadioGroupContext['changeEvent'] = (value) => {
  emits('update:modelValue', value);
  emits('change', value);
  /* v8 ignore next */
  formItem?.validate('change').catch((err: Error) => console.debug(err));
};

provide(RADIO_GROUP_CTX_KEY, {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  size: computed(() => props.size),
  type: computed(() => props.type),
  color: computed(() => props.color),
  name: computed(() => props.name),
  changeEvent,
});
</script>

<template>
  <div class="px-radio-group" role="radiogroup">
    <slot />
  </div>
</template>

<style>
@import './style.css';
</style>
