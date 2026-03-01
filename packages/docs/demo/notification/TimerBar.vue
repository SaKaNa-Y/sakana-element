<template>
  <div class="demo-notification">
    <px-button @click="showTimer">With Timer Bar (default)</px-button>
    <px-button @click="showNoTimer">Without Timer Bar</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxNotification } from 'sakana-element';

const showTimer = () => {
  PxNotification({
    title: 'Timer Bar',
    message: 'Watch the progress bar at the bottom.',
    type: 'info',
    duration: 5000,
  });
};

const showNoTimer = () => {
  PxNotification({
    title: 'No Timer Bar',
    message: 'Timer bar is hidden.',
    type: 'info',
    duration: 5000,
    showTimer: false,
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
