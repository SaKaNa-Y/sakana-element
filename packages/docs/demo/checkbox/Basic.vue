<template>
  <div class="demo-checkbox">
    <px-checkbox v-model="value1" label="Option A" />
    <px-checkbox v-model="value2" label="Option B" />
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
