<template>
  <div class="demo-filter">
    <px-filter v-model="selected" :options="options" />
    <p class="demo-filter__result">Selected: {{ selected ?? 'none' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref<string | number | undefined>('vue');
const options = [
  { value: 'vue', label: 'Vue' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];
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
