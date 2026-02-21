<template>
  <div class="demo-select">
    <px-select v-model="v1" color="primary" placeholder="Primary" :options="options" />
    <px-select v-model="v2" color="success" placeholder="Success" :options="options" />
    <px-select v-model="v3" color="warning" placeholder="Warning" :options="options" />
    <px-select v-model="v4" color="danger" placeholder="Danger" :options="options" />
    <px-select v-model="v5" color="info" placeholder="Info" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = [
  { value: '1', label: 'Option A' },
  { value: '2', label: 'Option B' },
  { value: '3', label: 'Option C' },
];

const v1 = ref('');
const v2 = ref('');
const v3 = ref('');
const v4 = ref('');
const v5 = ref('');
</script>

<style scoped>
.demo-select {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
</style>
