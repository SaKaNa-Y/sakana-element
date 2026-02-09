<template>
  <div class="demo-input">
    <px-input v-model="input1" placeholder="请输入内容" />
    <px-input v-model="input2" placeholder="禁用状态" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input1 = ref('');
const input2 = ref('');
</script>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
</style>
