<template>
  <div class="demo-checkbox">
    <px-checkbox v-model="value1" label="Disabled unchecked" disabled />
    <px-checkbox v-model="value2" label="Disabled checked" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(true);
</script>

<style scoped>
.demo-checkbox {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
