<script setup lang="ts">
import { ref } from 'vue';

const date = ref<Date>();
</script>

<template>
  <div class="demo-calendar-color">
    <px-calendar v-model="date" color="#e64553" />
    <px-calendar v-model="date" color="#8839ef" />
    <px-calendar v-model="date" color="#40a02b" />
  </div>
</template>

<style scoped>
.demo-calendar-color {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
