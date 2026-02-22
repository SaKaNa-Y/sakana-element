<script setup lang="ts">
import { provide, useSlots } from 'vue';
import { BREADCRUMB_CTX_KEY } from './constants';
import type { BreadcrumbProps } from './types';

defineOptions({
  name: 'PxBreadcrumb',
});

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
});

const slots = useSlots();

provide(BREADCRUMB_CTX_KEY, {
  separator: props.separator,
  separatorSlot: slots.separator,
});
</script>

<template>
  <nav class="px-breadcrumb" aria-label="Breadcrumb">
    <ol class="px-breadcrumb__list">
      <slot></slot>
    </ol>
  </nav>
</template>

<style scoped>
@import './style.css';
</style>
