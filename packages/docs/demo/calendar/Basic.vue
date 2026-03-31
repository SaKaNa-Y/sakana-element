<script setup lang="ts">
import { ref } from 'vue';

const date = ref<Date>();
</script>

<template>
  <div class="demo-calendar">
    <px-calendar v-model="date" />
    <p v-if="date">Selected: {{ date.toLocaleDateString() }}</p>
  </div>
</template>

<style scoped>
.demo-calendar {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}
</style>
