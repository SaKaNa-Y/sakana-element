<template>
  <div class="demo-input">
    <px-input v-model="date" type="date" placeholder="Select date">
      <template #prefix>
        <px-icon icon="calendar" />
      </template>
    </px-input>
    <px-input v-model="time" type="time" placeholder="Select time">
      <template #prefix>
        <px-icon icon="clock" />
      </template>
    </px-input>
    <px-input v-model="url" type="url" placeholder="https://example.com">
      <template #prefix>
        <px-icon icon="link" />
      </template>
    </px-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const date = ref('');
const time = ref('');
const url = ref('');
</script>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
</style>
