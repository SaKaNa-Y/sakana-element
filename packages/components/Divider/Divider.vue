<script setup lang="ts">
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, useSlots } from 'vue';
import type { DividerProps } from './types';

defineOptions({ name: 'PxDivider' });

const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal',
  contentPosition: 'center',
  borderStyle: 'solid',
});

const slots = useSlots();

const DIVIDER_COLOR_TEMPLATE = {
  'line-color': 'color',
};

const customColorStyle = computed(() => {
  if (!props.color) return {};
  return resolveColorVars(createColorPalette(props.color), 'px-divider', DIVIDER_COLOR_TEMPLATE);
});

const hasContent = computed(() => {
  return props.direction === 'horizontal' && (!!slots.default || !!props.content);
});
</script>

<template>
  <div
    class="px-divider"
    :class="{
      'is-vertical': direction === 'vertical',
      [`px-divider--${contentPosition}`]: hasContent,
      [`px-divider--${type}`]: type,
      [`px-divider--${borderStyle}`]: borderStyle !== 'solid',
    }"
    :style="customColorStyle"
    role="separator"
    :aria-orientation="direction"
  >
    <span v-if="hasContent" class="px-divider__text">
      <slot>{{ content }}</slot>
    </span>
  </div>
</template>

<style>
@import './style.css';
</style>
