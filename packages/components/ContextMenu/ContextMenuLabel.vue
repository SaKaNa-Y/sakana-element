<script setup lang="ts">
import type { ContextMenuLabelProps } from './types';

defineOptions({
  name: 'PxContextMenuLabel',
});

withDefaults(defineProps<ContextMenuLabelProps>(), {
  inset: false,
});
</script>

<template>
  <li class="px-context-menu__label" :class="{ 'is-inset': inset }">
    <slot />
  </li>
</template>

<style>
@import './style.css';
</style>
