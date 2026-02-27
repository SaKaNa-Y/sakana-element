<template>
  <div class="demo-message">
    <px-button @click="showMessages">Show Messages (max 3)</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

let count = 0;
const showMessages = () => {
  count++;
  PxMessage({
    message: `Message #${count}`,
    duration: 5000,
    max: 3,
  });
};
</script>

<style scoped>
.demo-message {
  display: flex;
  gap: 12px;
}
</style>
