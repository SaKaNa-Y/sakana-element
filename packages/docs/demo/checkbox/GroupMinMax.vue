<template>
  <div class="demo-checkbox">
    <p class="demo-checkbox__tip">Min: 1, Max: 3</p>
    <px-checkbox-group v-model="selected" :min="1" :max="3">
      <px-checkbox value="a" label="Option A" />
      <px-checkbox value="b" label="Option B" />
      <px-checkbox value="c" label="Option C" />
      <px-checkbox value="d" label="Option D" />
      <px-checkbox value="e" label="Option E" />
    </px-checkbox-group>
    <p class="demo-checkbox__result">Selected: {{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref(['a', 'b']);
</script>

<style scoped>
.demo-checkbox {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.demo-checkbox__tip {
  font-family: var(--px-font-family);
  font-size: 14px;
  color: var(--px-text-color-secondary);
}
.demo-checkbox__result {
  font-family: var(--px-font-family);
  font-size: 14px;
  color: var(--px-text-color-secondary);
}
</style>
