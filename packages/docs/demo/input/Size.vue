<template>
  <div class="demo-input">
    <px-input v-model="input1" size="large" placeholder="大尺寸" />
    <px-input v-model="input2" placeholder="默认尺寸" />
    <px-input v-model="input3" size="small" placeholder="小尺寸" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
</style>
