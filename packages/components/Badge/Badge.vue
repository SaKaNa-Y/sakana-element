<script setup lang="ts">
import { darken, getTextColor, lighten } from '@sakana-element/utils';
import { computed } from 'vue';
import type { BadgeProps } from './types';

defineOptions({
  name: 'PxBadge',
});

const props = withDefaults(defineProps<BadgeProps>(), {
  type: 'primary',
  size: 'default',
});

const customColorStyle = computed(() => {
  if (!props.color) return {};

  const color = props.color;
  const textColor = getTextColor(color);
  const darkColor = darken(color, 15);
  const lightColor = lighten(color, 35);

  if (props.outline) {
    return {
      '--px-badge-text-color': color,
      '--px-badge-bg-color': 'transparent',
      '--px-badge-border-color': color,
      '--px-badge-shadow-color': 'transparent',
    } as Record<string, string>;
  }

  if (props.dash) {
    return {
      '--px-badge-text-color': color,
      '--px-badge-bg-color': lightColor,
      '--px-badge-border-color': color,
      '--px-badge-shadow-color': 'transparent',
    } as Record<string, string>;
  }

  return {
    '--px-badge-text-color': textColor,
    '--px-badge-bg-color': color,
    '--px-badge-border-color': darkColor,
    '--px-badge-shadow-color': darkColor,
  } as Record<string, string>;
});
</script>

<template>
  <span
    class="px-badge"
    :class="{
      [`px-badge--${type}`]: type,
      [`px-badge--${size}`]: size && size !== 'default',
      'is-outline': outline,
      'is-dash': dash,
      'is-round': round,
    }"
    :style="customColorStyle"
  >
    <slot></slot>
  </span>
</template>

<style scoped>
@import './style.css';
</style>
