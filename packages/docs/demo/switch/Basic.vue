<template>
  <div class="demo-switch">
    <px-switch v-model="value1" />
    <px-switch v-model="value2" active-text="开" inactive-text="关" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value1 = ref(false);
const value2 = ref(true);
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
