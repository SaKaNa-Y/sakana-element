<template>
  <div style="display: flex; gap: 24px; align-items: center">
    <div v-for="v in variants" :key="v" style="text-align: center">
      <px-loading-indicator :variant="v" size="lg" />
      <p style="margin-top: 8px; font-size: 12px">{{ v }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const variants = ['spinner', 'dots', 'bars', 'ring'] as const;
</script>
