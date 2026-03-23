<script setup lang="ts">
import type { CommandListProps } from './types';

defineOptions({
  name: 'PxCommandList',
});

const props = withDefaults(defineProps<CommandListProps>(), {
  maxHeight: '300px',
});
</script>

<template>
  <div
    class="px-command-list"
    role="listbox"
    :style="{ maxHeight: props.maxHeight }"
  >
    <slot />
  </div>
</template>

