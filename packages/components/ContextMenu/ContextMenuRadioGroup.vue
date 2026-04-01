<script setup lang="ts">
import { provide, toRef } from 'vue';
import { CONTEXT_MENU_RADIO_GROUP_CTX_KEY } from './constants';
import type { ContextMenuRadioGroupEmits, ContextMenuRadioGroupProps } from './types';

defineOptions({
  name: 'PxContextMenuRadioGroup',
});

const props = defineProps<ContextMenuRadioGroupProps>();
const emit = defineEmits<ContextMenuRadioGroupEmits>();

provide(CONTEXT_MENU_RADIO_GROUP_CTX_KEY, {
  modelValue: toRef(props, 'modelValue'),
  handleSelect(value: string) {
    emit('update:modelValue', value);
    emit('change', value);
  },
});
</script>

<template>
  <div role="group" class="px-context-menu__radio-group">
    <slot />
  </div>
</template>

<style>
@import './style.css';
</style>
