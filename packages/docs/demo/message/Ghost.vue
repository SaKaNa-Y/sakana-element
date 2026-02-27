<template>
  <div class="demo-message">
    <px-button @click="showInfo">Info</px-button>
    <px-button @click="showSuccess">Success</px-button>
    <px-button @click="showWarning">Warning</px-button>
    <px-button @click="showDanger">Danger</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const showInfo = () => {
  PxMessage({ message: 'Ghost info message', ghost: true, type: 'info' });
};
const showSuccess = () => {
  PxMessage({ message: 'Ghost success message', ghost: true, type: 'success' });
};
const showWarning = () => {
  PxMessage({ message: 'Ghost warning message', ghost: true, type: 'warning' });
};
const showDanger = () => {
  PxMessage({ message: 'Ghost danger message', ghost: true, type: 'danger' });
};
</script>

<style scoped>
.demo-message {
  display: flex;
  gap: 12px;
}
</style>
