<script setup lang="ts">
import { computed } from 'vue';
import type { LoadingIndicatorProps } from './types';

defineOptions({ name: 'PxLoadingIndicator' });

const props = withDefaults(defineProps<LoadingIndicatorProps>(), {
  variant: 'spinner',
  size: 'md',
  type: 'primary',
});

const customColorStyle = computed(() => {
  if (!props.color) return {};
  return { '--px-loading-indicator-color': props.color };
});
</script>

<template>
  <span
    class="px-loading-indicator"
    :class="[
      `px-loading-indicator--${variant}`,
      `px-loading-indicator--${size}`,
      `px-loading-indicator--${type}`,
    ]"
    :style="customColorStyle"
    role="status"
    aria-label="Loading"
  >
    <span class="px-loading-indicator__inner" />
  </span>
</template>

<style scoped>
@import './indicator.css';
</style>
