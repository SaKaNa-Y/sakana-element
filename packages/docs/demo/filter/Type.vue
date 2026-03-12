<template>
  <div class="demo-filter">
    <px-filter v-model="v1" :options="options" type="primary" />
    <px-filter v-model="v2" :options="options" type="success" />
    <px-filter v-model="v3" :options="options" type="warning" />
    <px-filter v-model="v4" :options="options" type="danger" />
    <px-filter v-model="v5" :options="options" type="info" />
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
const v4 = ref<string | number | undefined>('a');
const v5 = ref<string | number | undefined>('a');
</script>

<style scoped>
.demo-filter {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
