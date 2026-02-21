<template>
  <div class="demo-select">
    <h4>Default</h4>
    <px-select v-model="v1" color="#626aef" placeholder="Indigo #626aef" :options="options" />
    <px-select v-model="v2" color="#ff6b9d" placeholder="Pink #ff6b9d" :options="options" />
    <px-select v-model="v3" color="#36cfc9" placeholder="Teal #36cfc9" :options="options" />

    <h4>Ghost</h4>
    <px-select v-model="v4" color="#626aef" ghost placeholder="Indigo ghost" :options="options" />
    <px-select v-model="v5" color="#ff6b9d" ghost placeholder="Pink ghost" :options="options" />
    <px-select v-model="v6" color="#36cfc9" ghost placeholder="Teal ghost" :options="options" />
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
const v6 = ref('');
</script>

<style scoped>
.demo-select {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
.demo-select h4 {
  margin: 8px 0 0;
}
</style>
