<script setup lang="ts">
import { computed, provide } from 'vue';
import PxIcon from '../Icon/Icon.vue';
import { FILTER_CTX_KEY } from './constants';
import FilterItem from './FilterItem.vue';
import type { FilterContext, FilterEmits, FilterProps } from './types';

defineOptions({ name: 'PxFilter' });
const props = withDefaults(defineProps<FilterProps>(), {
  disabled: false,
  multiple: false,
});
const emits = defineEmits<FilterEmits>();

const hasSelection = computed(() => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.length > 0;
  }
  return props.modelValue !== undefined;
});

const changeEvent: FilterContext['changeEvent'] = (value) => {
  if (props.multiple) {
    const current = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    if (value === undefined) {
      // Reset — handled by reset button
      emits('update:modelValue', []);
      emits('change', []);
      return;
    }
    const idx = current.indexOf(value);
    if (idx >= 0) {
      current.splice(idx, 1);
    } else {
      current.push(value);
    }
    emits('update:modelValue', current);
    emits('change', current);
  } else {
    emits('update:modelValue', value);
    emits('change', value);
  }
};

function handleReset() {
  changeEvent(undefined);
}

provide(FILTER_CTX_KEY, {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  size: computed(() => props.size),
  type: computed(() => props.type),
  color: computed(() => props.color),
  name: computed(() => props.name),
  multiple: computed(() => props.multiple),
  hasSelection,
  changeEvent,
});
</script>

<template>
  <div
    class="px-filter"
    :class="{ 'is-collapsed': !multiple && hasSelection }"
    :role="multiple ? 'group' : 'radiogroup'"
  >
    <div
      v-if="hasSelection"
      class="px-filter__reset"
      @click="handleReset"
    >
      <px-icon icon="close" />
    </div>
    <template v-if="options?.length">
      <FilterItem
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        :label="opt.label"
        :disabled="opt.disabled"
      />
    </template>
    <slot v-else />
  </div>
</template>

<style>
@import './style.css';
</style>
