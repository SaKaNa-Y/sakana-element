<template>
  <div class="demo-checkbox">
    <px-checkbox v-model="v1" label="Primary" type="primary" />
    <px-checkbox v-model="v2" label="Success" type="success" />
    <px-checkbox v-model="v3" label="Warning" type="warning" />
    <px-checkbox v-model="v4" label="Danger" type="danger" />
    <px-checkbox v-model="v5" label="Info" type="info" />
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
.demo-checkbox {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
