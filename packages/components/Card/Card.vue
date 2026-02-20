<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { CardProps } from './types';

defineOptions({
  name: 'PxCard',
});

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'always',
});

const slots = useSlots();

const shadowClass = computed(() => {
  const val = props.shadow;
  if (val === true) return 'px-card--shadow-always';
  if (val === false) return 'px-card--shadow-never';
  return `px-card--shadow-${val}`;
});
</script>

<template>
  <div
    class="px-card"
    :class="[
      shadowClass,
      {
        [`px-card--${size}`]: size,
        'is-hoverable': hoverable,
      },
    ]"
  >
    <div v-if="slots.header" class="px-card__header">
      <slot name="header"></slot>
    </div>
    <div class="px-card__body">
      <slot></slot>
    </div>
    <div v-if="slots.footer" class="px-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
