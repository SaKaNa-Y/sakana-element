<script lang="ts">
const nextId = 0;
</script>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount } from 'vue';
import { CAROUSEL_CTX_KEY } from './constants';

defineOptions({
  name: 'PxCarouselItem',
});
const ctx = inject(CAROUSEL_CTX_KEY, void 0);
const uid = nextId++;

const itemIndex = computed(() => {
  if (!ctx) return -1;
  return ctx.items.value.indexOf(uid);
});

const isActive = computed(() => {
  if (!ctx) return false;
  return ctx.currentIndex.value === itemIndex.value;
});

// Register during setup (synchronous) so parent knows about items before first render
ctx?.registerItem(uid);

onBeforeUnmount(() => {
  ctx?.unregisterItem(uid);
});
</script>

<template>
  <div
    class="px-carousel-item"
    :class="{ 'is-active': isActive }"
    role="tabpanel"
    :aria-hidden="!isActive"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
