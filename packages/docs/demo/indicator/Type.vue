<template>
  <div class="demo-indicator">
    <px-indicator v-for="t in types" :key="t" :type="t">
      <div class="demo-box">{{ t }}</div>
    </px-indicator>
  </div>
</template>

<script setup lang="ts">
const types = ['primary', 'success', 'info', 'warning', 'danger'] as const;
</script>

<style scoped>
.demo-indicator {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
}
.demo-box {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--px-border-color);
  font-family: var(--px-font-family);
  font-size: 12px;
}
</style>
