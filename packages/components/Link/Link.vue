<script setup lang="ts">
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed } from 'vue';
import type { LinkEmits, LinkProps } from './types';

defineOptions({
  name: 'PxLink',
});

const props = withDefaults(defineProps<LinkProps>(), {
  underline: true,
});

const emit = defineEmits<LinkEmits>();

const LINK_COLOR_TEMPLATE = {
  'text-color': 'color',
  'hover-color': 'dark',
};

const customColorStyle = computed(() => {
  if (!props.color) return {};
  return resolveColorVars(createColorPalette(props.color), 'px-link', LINK_COLOR_TEMPLATE);
});

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return;
  emit('click', event);
};
</script>

<template>
  <a
    class="px-link"
    :class="{
      [`px-link--${type}`]: type,
      'is-underline': underline,
      'is-disabled': disabled,
    }"
    :href="disabled ? undefined : href"
    :target="target"
    :style="customColorStyle"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<style scoped>
@import './style.css';
</style>
