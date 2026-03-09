<template>
  <div class="demo-radio">
    <px-radio-group v-model="selected">
      <px-radio value="apple" label="Apple" />
      <px-radio value="banana" label="Banana" />
      <px-radio value="cherry" label="Cherry" />
      <px-radio value="durian" label="Durian" />
    </px-radio-group>
    <p class="demo-radio__result">Selected: {{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref('apple');
</script>

<style scoped>
.demo-radio {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.demo-radio__result {
  font-family: var(--px-font-family);
  font-size: 14px;
  color: var(--px-text-color-secondary);
}
</style>
