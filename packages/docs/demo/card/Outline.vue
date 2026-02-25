<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px">
    <px-card v-for="t in types" :key="t" :type="t" outline style="width: 180px">
      <template #header>{{ t }}</template>
      Outline style with colored border and transparent background.
    </px-card>
  </div>
</template>

<script setup lang="ts">
const types = ['primary', 'success', 'info', 'warning', 'danger'] as const;
</script>
