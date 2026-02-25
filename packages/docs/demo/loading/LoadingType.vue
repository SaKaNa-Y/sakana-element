<template>
  <div style="display: flex; gap: 24px; align-items: center">
    <div v-for="t in types" :key="t" style="text-align: center">
      <px-loading-indicator :type="t" size="lg" />
      <p style="margin-top: 8px; font-size: 12px">{{ t }}</p>
    </div>
    <div style="text-align: center">
      <px-loading-indicator color="#8B5CF6" size="lg" />
      <p style="margin-top: 8px; font-size: 12px">custom</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const types = ['primary', 'success', 'info', 'warning', 'danger'] as const;
</script>
