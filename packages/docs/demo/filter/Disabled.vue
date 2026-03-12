<template>
  <div class="demo-filter">
    <p class="demo-filter__label">Group disabled:</p>
    <px-filter :options="options" disabled />
    <p class="demo-filter__label">Individual disabled:</p>
    <px-filter v-model="selected" :options="mixedOptions" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref<string | number | undefined>('a');
const options = [
  { value: 'a', label: 'Alpha' },
  { value: 'b', label: 'Beta' },
  { value: 'c', label: 'Gamma' },
];
const mixedOptions = [
  { value: 'a', label: 'Enabled' },
  { value: 'b', label: 'Disabled', disabled: true },
  { value: 'c', label: 'Enabled' },
];
</script>

<style scoped>
.demo-filter {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.demo-filter__label {
  font-family: var(--px-font-family);
  font-size: 14px;
  color: var(--px-text-color-secondary);
  margin: 0;
}
</style>
