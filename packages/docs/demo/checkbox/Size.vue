<template>
  <div class="demo-checkbox">
    <px-checkbox v-model="v1" label="Small" size="small" />
    <px-checkbox v-model="v2" label="Default" />
    <px-checkbox v-model="v3" label="Large" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref(true);
const v2 = ref(true);
const v3 = ref(true);
</script>

<style scoped>
.demo-checkbox {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
