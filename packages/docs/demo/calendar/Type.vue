<script setup lang="ts">
import { ref } from 'vue';

const date = ref<Date>();
</script>

<template>
  <div class="demo-calendar-types">
    <px-calendar v-model="date" type="primary" />
    <px-calendar v-model="date" type="success" />
    <px-calendar v-model="date" type="warning" />
    <px-calendar v-model="date" type="danger" />
    <px-calendar v-model="date" type="info" />
  </div>
</template>

<style scoped>
.demo-calendar-types {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
