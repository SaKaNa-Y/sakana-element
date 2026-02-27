<template>
  <div class="demo-message">
    <px-button @click="showWithTimer">With Timer Bar</px-button>
    <px-button @click="showWithoutTimer">Without Timer Bar</px-button>
    <px-button @click="showLongDuration">Long Duration (8s)</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const showWithTimer = () => {
  PxMessage({ message: 'Watch the timer bar below', duration: 5000 });
};
const showWithoutTimer = () => {
  PxMessage({ message: 'No timer bar here', duration: 5000, showTimer: false });
};
const showLongDuration = () => {
  PxMessage({ message: 'This stays for 8 seconds', duration: 8000, type: 'success' });
};
</script>

<style scoped>
.demo-message {
  display: flex;
  gap: 12px;
}
</style>
