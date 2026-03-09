<template>
  <div class="demo-radio">
    <px-radio v-model="selected" value="a" label="Option A" />
    <px-radio v-model="selected" value="b" label="Option B" />
    <p class="demo-radio__result">Selected: {{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref('a');
</script>

<style scoped>
.demo-radio {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.demo-radio__result {
  font-family: var(--px-font-family);
  font-size: 14px;
  color: var(--px-text-color-secondary);
}
</style>
