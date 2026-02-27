<script setup lang="ts">
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed } from 'vue';
import { PROGRESS_COLOR_TEMPLATE } from './constants';
import type { ProgressInstance, ProgressProps } from './types';

defineOptions({ name: 'PxProgress' });

const props = withDefaults(defineProps<ProgressProps>(), {
  percentage: 0,
  type: 'primary',
  size: 'default',
  variant: 'solid',
  stripedFlow: false,
  indeterminate: false,
  strokeWidth: 0,
  showText: true,
  textInside: false,
});

const clampedPercentage = computed(() => Math.max(0, Math.min(100, props.percentage)));

const effectiveColor = computed(() => {
  if (!props.color) return '';
  if (typeof props.color === 'function') {
    return props.color(clampedPercentage.value);
  }
  return props.color;
});

const customColorStyle = computed(() => {
  if (!effectiveColor.value) return {};
  return resolveColorVars(
    createColorPalette(effectiveColor.value),
    'px-progress',
    PROGRESS_COLOR_TEMPLATE,
  );
});

const barStyle = computed(() => {
  const style: Record<string, string> = {
    ...customColorStyle.value,
  };

  if (!props.indeterminate) {
    style.width = `${clampedPercentage.value}%`;
  }

  if (props.strokeWidth) {
    style['--px-progress-height'] = `${props.strokeWidth}px`;
  }

  return style;
});

const displayText = computed(() => {
  if (props.format) return props.format(clampedPercentage.value);
  return `${clampedPercentage.value}%`;
});

const statusClass = computed(() => (props.status ? `px-progress--${props.status}` : ''));

defineExpose<ProgressInstance>({ clampedPercentage });
</script>

<template>
  <div
    class="px-progress"
    :class="[
      `px-progress--${type}`,
      `px-progress--${size}`,
      statusClass,
      {
        [`px-progress--${variant}`]: variant !== 'solid',
        'is-striped-flow': stripedFlow && variant === 'striped',
        'is-indeterminate': indeterminate,
        'is-text-inside': textInside,
      },
    ]"
    role="progressbar"
    :aria-valuenow="indeterminate ? undefined : clampedPercentage"
    :aria-valuemin="0"
    :aria-valuemax="100"
  >
    <div class="px-progress__track">
      <div class="px-progress__fill" :style="barStyle">
        <span v-if="showText && textInside && !indeterminate" class="px-progress__inner-text">
          {{ displayText }}
        </span>
      </div>
    </div>
    <span v-if="showText && !textInside && !indeterminate" class="px-progress__text">
      {{ displayText }}
    </span>
  </div>
</template>

<style>
@import './style.css';
</style>
