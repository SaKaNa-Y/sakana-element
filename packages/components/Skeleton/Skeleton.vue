<script setup lang="ts">
import { addUnit } from '@sakana-element/utils';
import { computed } from 'vue';
import type { SkeletonProps } from './types';

defineOptions({ name: 'PxSkeleton' });

const props = withDefaults(defineProps<SkeletonProps>(), {
  loading: true,
  animated: true,
  animation: 'shimmer',
  variant: 'rectangular',
  rows: 1,
});

const dimensionStyle = computed(() => {
  const style: Record<string, string> = {};
  const w = addUnit(props.width);
  const h = addUnit(props.height);
  if (w) style.width = w;
  if (h) style.height = h;
  return style;
});

const isTextRows = computed(() => props.variant === 'text' && props.rows > 1);

function getRowStyle(index: number) {
  if (index === props.rows) {
    return { ...dimensionStyle.value, width: dimensionStyle.value.width ?? '60%' };
  }
  return dimensionStyle.value;
}
</script>

<template>
  <div
    v-if="loading"
    class="px-skeleton"
    :class="[
      `px-skeleton--${variant}`,
      {
        [`px-skeleton--${size}`]: size && size !== 'default',
        'is-loading': loading,
        'is-animated': animated,
        [`is-animation-${animation}`]: animated,
      },
    ]"
  >
    <template v-if="isTextRows">
      <div
        v-for="i in rows"
        :key="i"
        class="px-skeleton__row"
        :style="getRowStyle(i)"
      />
    </template>
    <div v-else class="px-skeleton__bone" :style="dimensionStyle" />
  </div>
  <template v-else>
    <slot />
  </template>
</template>

<style>
@import './style.css';
</style>
