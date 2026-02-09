<template>
  <div class="demo-switch">
    <px-switch v-model="value1" size="large" />
    <px-switch v-model="value2" />
    <px-switch v-model="value3" size="small" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
