<template>
  <div class="demo-switch">
    <px-switch v-model="value" disabled />
    <px-switch v-model="value2" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
const value2 = ref(true)
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
