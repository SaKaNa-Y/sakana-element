<template>
  <div class="demo-progress">
    <px-progress :percentage="60" :format="hpFormat" type="danger" />
    <px-progress :percentage="75" :format="stepsFormat" type="success" />
  </div>
</template>

<script setup lang="ts">
const hpFormat = (p: number) => `${Math.round(p * 2)}/200 HP`;
const stepsFormat = (p: number) => `${Math.round(p / 25)}/4 ★`;
</script>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
