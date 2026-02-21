<template>
  <div class="demo-input">
    <px-input v-model="v1" color="primary" placeholder="Primary" />
    <px-input v-model="v2" color="success" placeholder="Success" />
    <px-input v-model="v3" color="warning" placeholder="Warning" />
    <px-input v-model="v4" color="danger" placeholder="Danger" />
    <px-input v-model="v5" color="info" placeholder="Info" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref('');
const v2 = ref('');
const v3 = ref('');
const v4 = ref('');
const v5 = ref('');
</script>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
</style>
