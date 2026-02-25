<script setup lang="ts">
import { type Ref } from 'vue';
import LoadingIndicator from './LoadingIndicator.vue';
import type { LoadingOptions } from './types';

defineOptions({
  name: 'PxLoading',
  inheritAttrs: false,
});
const props = defineProps<LoadingOptions>();
</script>

<template>
  <transition name="fade-in-linear" @after-leave="onAfterLeave">
    <div
      v-show="(props.visible as Ref).value"
      class="px-loading px-loading__mask"
      role="status"
      aria-live="polite"
      :class="{ 'is-fullscreen': fullscreen }"
    >
      <div class="px-loading__spinner">
        <LoadingIndicator v-if="props.spinner !== false" variant="spinner" size="lg" />
        <p v-if="text" class="px-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<style>
@import './style.css';
.px-loading {
  --px-loading-bg-color: v-bind(
    background
  ) !important;
  --px-loading-z-index: v-bind(
    zIndex
  ) !important;
}
</style>
