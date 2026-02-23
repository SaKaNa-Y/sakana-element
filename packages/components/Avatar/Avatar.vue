<script setup lang="ts">
import {
  createColorPalette,
  resolveColorVars,
  SIMPLE_COLOR_TEMPLATES,
} from '@sakana-element/utils';
import { computed } from 'vue';
import type { AvatarProps } from './types';

defineOptions({ name: 'PxAvatar' });

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 'default',
  shape: 'circle',
  border: true,
});

const customColorStyle = computed(() => {
  if (!props.color) return {};
  return resolveColorVars(
    createColorPalette(props.color),
    'px-avatar',
    SIMPLE_COLOR_TEMPLATES.default,
  );
});
</script>

<template>
  <span
    class="px-avatar"
    :class="{
      [`px-avatar--${size}`]: size && size !== 'default',
      'is-square': shape === 'square',
      'is-border': border,
    }"
    :style="customColorStyle"
  >
    <slot />
    <span
      v-if="status"
      class="px-avatar__indicator"
      :class="`is-${status}`"
    />
  </span>
</template>

<style scoped>
@import './style.css';
</style>
