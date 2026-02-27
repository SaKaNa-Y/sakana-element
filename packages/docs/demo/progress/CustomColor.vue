<template>
  <div class="demo-progress">
    <px-progress :percentage="60" color="#ff6600" />
    <px-progress :percentage="percentage" :color="dynamicColor" />
    <div>
      <px-button size="small" @click="decrease"><px-icon icon="minus" /></px-button>
      <px-button size="small" @click="increase"><px-icon icon="plus" /></px-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const percentage = ref(30);

const dynamicColor = (p: number) => {
  if (p < 30) return '#f56c6c';
  if (p < 70) return '#e6a23c';
  return '#67c23a';
};

const increase = () => {
  percentage.value = Math.min(100, percentage.value + 10);
};
const decrease = () => {
  percentage.value = Math.max(0, percentage.value - 10);
};
</script>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
