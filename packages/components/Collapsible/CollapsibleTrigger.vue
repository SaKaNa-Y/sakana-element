<script setup lang="ts">
import { inject } from 'vue';
import { COLLAPSIBLE_CTX_KEY } from './constants';

defineOptions({
  name: 'PxCollapsibleTrigger',
});

const ctx = inject(COLLAPSIBLE_CTX_KEY)!;

function handleClick() {
  ctx.toggle();
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    ctx.toggle();
  }
}
</script>

<template>
  <div
    class="px-collapsible-trigger"
    role="button"
    :tabindex="ctx.disabled.value ? -1 : 0"
    :aria-expanded="ctx.open.value"
    :aria-controls="`${ctx.id}-content`"
    :data-state="ctx.open.value ? 'open' : 'closed'"
    :data-disabled="ctx.disabled.value || undefined"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <slot />
  </div>
</template>

<style scoped>
@import './style.css';
</style>
