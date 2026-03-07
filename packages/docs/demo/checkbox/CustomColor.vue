<template>
  <div class="demo-checkbox">
    <px-checkbox v-model="v1" label="Coral" color="#ff6b6b" />
    <px-checkbox v-model="v2" label="Teal" color="#20c997" />
    <px-checkbox v-model="v3" label="Purple" color="#845ef7" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref(true);
const v2 = ref(true);
const v3 = ref(true);
</script>

<style scoped>
.demo-checkbox {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
