<template>
  <div class="demo-switch">
    <px-switch v-model="v1" type="primary" />
    <px-switch v-model="v2" type="success" />
    <px-switch v-model="v3" type="warning" />
    <px-switch v-model="v4" type="danger" />
    <px-switch v-model="v5" type="info" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref(true);
const v2 = ref(true);
const v3 = ref(true);
const v4 = ref(true);
const v5 = ref(true);
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
