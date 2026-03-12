<template>
  <div class="demo-filter">
    <px-filter v-model="v1" :options="options" color="#ff6b6b" />
    <px-filter v-model="v2" :options="options" color="#20c997" />
    <px-filter v-model="v3" :options="options" color="#845ef7" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = [
  { value: 'a', label: 'Alpha' },
  { value: 'b', label: 'Beta' },
  { value: 'c', label: 'Gamma' },
];

const v1 = ref<string | number | undefined>('a');
const v2 = ref<string | number | undefined>('a');
const v3 = ref<string | number | undefined>('a');
</script>

<style scoped>
.demo-filter {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
