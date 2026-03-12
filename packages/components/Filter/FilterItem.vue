<script setup lang="ts">
import { useId } from '@sakana-element/hooks';
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, inject, useSlots } from 'vue';
import { FILTER_COLOR_TEMPLATES, FILTER_CTX_KEY } from './constants';
import type { FilterItemProps } from './types';

defineOptions({ name: 'PxFilterItem', inheritAttrs: false });
const props = defineProps<FilterItemProps>();
const slots = useSlots();

const filterGroup = inject(FILTER_CTX_KEY, undefined);
const isGroup = !!filterGroup;

const inputId = useId().value;

const isMultiple = computed(() => filterGroup?.multiple.value ?? false);

const isActive = computed(() => {
  if (!isGroup) return false;
  const mv = filterGroup!.modelValue.value;
  if (isMultiple.value) {
    return Array.isArray(mv) && mv.includes(props.value);
  }
  return mv === props.value;
});

const isHidden = computed(() => {
  if (!isGroup) return false;
  if (isMultiple.value) return false;
  return filterGroup!.hasSelection.value && !isActive.value;
});

const isDisabled = computed(() => {
  if (filterGroup?.disabled.value) return true;
  return props.disabled ?? false;
});

const mergedSize = computed(() => filterGroup?.size.value);
const mergedType = computed(() => filterGroup?.type.value);
const mergedColor = computed(() => filterGroup?.color.value);
const mergedName = computed(() => filterGroup?.name.value);

const customColorStyle = computed(() => {
  const color = mergedColor.value;
  if (!color) return {};
  const palette = createColorPalette(color);
  return resolveColorVars(palette, 'px-filter-item', FILTER_COLOR_TEMPLATES.default);
});

function handleClick() {
  if (isDisabled.value || !isGroup) return;

  if (isMultiple.value) {
    filterGroup!.changeEvent(props.value);
    return;
  }

  // Single mode: toggle on/off
  filterGroup!.changeEvent(isActive.value ? undefined : props.value);
}
</script>

<template>
  <div
    class="px-filter-item"
    :class="{
      [`px-filter-item--${mergedSize}`]: mergedSize,
      [`px-filter-item--${mergedType}`]: mergedType,
      'is-active': isActive,
      'is-disabled': isDisabled,
      'is-hidden': isHidden,
    }"
    :style="customColorStyle"
    @click="handleClick"
  >
    <input
      class="px-filter-item__original"
      :type="isMultiple ? 'checkbox' : 'radio'"
      :aria-checked="isActive"
      :id="inputId"
      :name="mergedName"
      :disabled="isDisabled"
      :checked="isActive"
    />
    <span
      v-if="label || slots.default"
      class="px-filter-item__label"
    >
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<style>
@import './style.css';
</style>
