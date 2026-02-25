<template>
  <div style="display: flex; gap: 24px; align-items: center">
    <div v-for="s in sizes" :key="s" style="text-align: center">
      <px-loading-indicator :size="s" />
      <p style="margin-top: 8px; font-size: 12px">{{ s }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const sizes = ['xs', 'sm', 'md', 'lg'] as const;
</script>
