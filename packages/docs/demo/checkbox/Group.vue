<template>
  <div class="demo-checkbox">
    <px-checkbox-group v-model="selected">
      <px-checkbox value="apple" label="Apple" />
      <px-checkbox value="banana" label="Banana" />
      <px-checkbox value="cherry" label="Cherry" />
      <px-checkbox value="durian" label="Durian" />
    </px-checkbox-group>
    <p class="demo-checkbox__result">Selected: {{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref(['apple', 'cherry']);
</script>

<style scoped>
.demo-checkbox {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.demo-checkbox__result {
  font-family: var(--px-font-family);
  font-size: 14px;
  color: var(--px-text-color-secondary);
}
</style>
