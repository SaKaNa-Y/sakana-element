<script setup lang="ts">
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, useSlots } from 'vue';
import { INDICATOR_COLOR_TEMPLATE } from './constants';
import type { IndicatorProps } from './types';

defineOptions({
  name: 'PxIndicator',
});

const props = withDefaults(defineProps<IndicatorProps>(), {
  placement: 'top-end',
  type: 'primary',
});

const slots = useSlots();
const isDot = computed(() => !slots.indicator);

const customColorStyle = computed(() => {
  if (!props.color) return {};
  return resolveColorVars(
    createColorPalette(props.color),
    'px-indicator',
    INDICATOR_COLOR_TEMPLATE,
  );
});

const offsetStyle = computed(() => {
  if (!props.offset) return {};
  return {
    '--px-indicator-offset-x': `${props.offset[0]}px`,
    '--px-indicator-offset-y': `${props.offset[1]}px`,
  };
});
</script>

<template>
  <div
    class="px-indicator"
    :class="{ 'is-inline': inline }"
  >
    <slot />
    <span
      v-if="processing && isDot"
      class="px-indicator__ping"
      :class="[
        `px-indicator__ping--${placement}`,
        `px-indicator__ping--${type}`,
      ]"
      :style="[customColorStyle, offsetStyle]"
    />
    <div
      class="px-indicator__item"
      :class="[
        `px-indicator__item--${placement}`,
        `px-indicator__item--${type}`,
        {
          'is-dot': isDot,
          'is-processing': processing,
        },
      ]"
      :style="[customColorStyle, offsetStyle]"
    >
      <slot name="indicator" />
    </div>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
