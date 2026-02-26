<script setup lang="ts">
import {
  type ColorTemplate,
  createColorPalette,
  resolveColorVars,
  SIMPLE_COLOR_TEMPLATES,
} from '@sakana-element/utils';
import { computed, useSlots } from 'vue';
import type { CardProps } from './types';

defineOptions({
  name: 'PxCard',
});

const GHOST_TEMPLATE = {
  'text-color': 'color',
  'bg-color': 'transparent',
  'border-color': 'transparent',
  'shadow-color': 'transparent',
};

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

const customColorStyle = computed(() => {
  if (!props.color) return {};
  const variant = props.ghost
    ? 'ghost'
    : props.outline
      ? 'outline'
      : props.dash
        ? 'dash'
        : 'default';
  const templates: Record<string, ColorTemplate> = {
    ...SIMPLE_COLOR_TEMPLATES,
    ghost: GHOST_TEMPLATE,
  };
  return resolveColorVars(createColorPalette(props.color), 'px-card', templates[variant]);
});
</script>

<template>
  <div
    class="px-card"
    :class="[
      shadowClass,
      {
        [`px-card--${type}`]: type,
        [`px-card--${size}`]: size,
        'is-hoverable': hoverable,
        'is-outline': outline,
        'is-dash': dash,
        'is-ghost': ghost,
      },
    ]"
    :style="customColorStyle"
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
