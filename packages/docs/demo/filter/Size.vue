<template>
  <div class="demo-filter">
    <px-filter v-model="v1" :options="options" size="small" />
    <px-filter v-model="v2" :options="options" />
    <px-filter v-model="v3" :options="options" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = [
  { value: 'a', label: 'Small' },
  { value: 'b', label: 'Default' },
  { value: 'c', label: 'Large' },
];

const v1 = ref<string | number | undefined>('a');
const v2 = ref<string | number | undefined>('b');
const v3 = ref<string | number | undefined>('c');
</script>

<style scoped>
.demo-filter {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
</style>
