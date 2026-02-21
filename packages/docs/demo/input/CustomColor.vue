<template>
  <div class="demo-input">
    <h4>Default</h4>
    <px-input v-model="v1" color="#626aef" placeholder="Indigo #626aef" />
    <px-input v-model="v2" color="#ff6b9d" placeholder="Pink #ff6b9d" />
    <px-input v-model="v3" color="#36cfc9" placeholder="Teal #36cfc9" />

    <h4>Ghost</h4>
    <px-input v-model="v4" color="#626aef" ghost placeholder="Indigo ghost" />
    <px-input v-model="v5" color="#ff6b9d" ghost placeholder="Pink ghost" />
    <px-input v-model="v6" color="#36cfc9" ghost placeholder="Teal ghost" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref('');
const v2 = ref('');
const v3 = ref('');
const v4 = ref('');
const v5 = ref('');
const v6 = ref('');
</script>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
.demo-input h4 {
  margin: 8px 0 0;
}
</style>
