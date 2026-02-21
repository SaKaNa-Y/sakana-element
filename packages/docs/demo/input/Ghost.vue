<template>
  <div class="demo-input">
    <px-input v-model="v1" ghost placeholder="Ghost default" />
    <px-input v-model="v2" ghost color="primary" placeholder="Ghost primary" />
    <px-input v-model="v3" ghost color="success" placeholder="Ghost success" />
    <px-input v-model="v4" ghost color="danger" placeholder="Ghost danger" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref('');
const v2 = ref('');
const v3 = ref('');
const v4 = ref('');
</script>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
</style>
