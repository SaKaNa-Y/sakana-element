<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px">
    <px-card v-for="t in types" :key="t" :type="t" ghost style="width: 180px">
      <template #header>{{ t }}</template>
      Ghost style — no border, no background, just colored text.
    </px-card>
  </div>
</template>

<script setup lang="ts">
const types = ['primary', 'success', 'info', 'warning', 'danger'] as const;
</script>
