<script setup lang="ts">
import { ref } from 'vue';

const date = ref<Date>();

const isWeekend = (d: Date) => d.getDay() === 0 || d.getDay() === 6;

const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
</script>

<template>
  <div class="demo-calendar-disabled">
    <div>
      <p>Disable weekends:</p>
      <px-calendar v-model="date" :disabled-date="isWeekend" />
    </div>
    <div>
      <p>Date range (current month only):</p>
      <px-calendar v-model="date" :min-date="minDate" :max-date="maxDate" />
    </div>
  </div>
</template>

<style scoped>
.demo-calendar-disabled {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
</style>
