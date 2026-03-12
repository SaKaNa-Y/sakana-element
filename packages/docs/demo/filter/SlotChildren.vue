<template>
  <div class="demo-filter">
    <px-filter v-model="selected" type="primary">
      <px-filter-item value="all" label="All" />
      <px-filter-item value="photos" label="Photos" />
      <px-filter-item value="videos" label="Videos" />
      <px-filter-item value="documents" label="Documents" />
    </px-filter>
    <p class="demo-filter__result">Selected: {{ selected ?? 'none' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref<string | number | undefined>('all');
</script>

<style scoped>
.demo-filter {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.demo-filter__result {
  font-family: var(--px-font-family);
  font-size: 14px;
  color: var(--px-text-color-secondary);
}
</style>
