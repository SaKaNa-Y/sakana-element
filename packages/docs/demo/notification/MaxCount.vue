<template>
  <div class="demo-notification">
    <px-button @click="showNotification">Show Notification (max 3)</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxNotification } from 'sakana-element';

let count = 0;
const showNotification = () => {
  count++;
  PxNotification({
    title: `Notification #${count}`,
    message: 'Only 3 notifications are visible at once.',
    duration: 5000,
    max: 3,
  });
};
</script>

<style scoped>
.demo-notification {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
