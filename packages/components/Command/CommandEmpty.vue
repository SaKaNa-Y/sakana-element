<script setup lang="ts">
import { computed, inject } from 'vue';
import { COMMAND_CTX_KEY } from './constants';

defineOptions({
  name: 'PxCommandEmpty',
});

const ctx = inject(COMMAND_CTX_KEY)!;

const isHidden = computed(() => ctx.visibleItems.value.length > 0);
</script>

<template>
  <div class="px-command-empty" :class="{ 'is-hidden': isHidden }">
    <slot>No results found.</slot>
  </div>
</template>

