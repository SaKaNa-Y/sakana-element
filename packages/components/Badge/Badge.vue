<script setup lang="ts">
import {
  createColorPalette,
  resolveColorVars,
  SIMPLE_COLOR_TEMPLATES,
} from '@sakana-element/utils';
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
  const variant = props.outline ? 'outline' : props.dash ? 'dash' : 'default';
  return resolveColorVars(
    createColorPalette(props.color),
    'px-badge',
    SIMPLE_COLOR_TEMPLATES[variant],
  );
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
