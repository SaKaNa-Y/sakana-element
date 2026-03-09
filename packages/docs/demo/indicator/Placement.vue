<template>
  <div class="demo-indicator-grid">
    <px-indicator
      v-for="p in placements"
      :key="p"
      :placement="p"
      type="danger"
    >
      <template #indicator>
        <px-badge type="danger" size="small">{{ p }}</px-badge>
      </template>
      <div class="demo-box" />
    </px-indicator>
  </div>
</template>

<script setup lang="ts">
const placements = [
  'top-start',
  'top-center',
  'top-end',
  'middle-start',
  'middle-center',
  'middle-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
] as const;
</script>

<style scoped>
.demo-indicator-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 720px;
  padding: 40px;
  justify-items: center;
}
.demo-box {
  width: 80px;
  height: 80px;
  border: 2px solid var(--px-border-color);
}
</style>
