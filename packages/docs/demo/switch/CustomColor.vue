<template>
  <div class="demo-switch">
    <px-switch v-model="v1" active-color="#8b5cf6" inactive-color="#d4d4d8" />
    <px-switch v-model="v2" active-color="#f97316" />
    <px-switch v-model="v3" active-color="#ec4899" inactive-color="#6b7280" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref(true);
const v2 = ref(false);
const v3 = ref(true);
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
