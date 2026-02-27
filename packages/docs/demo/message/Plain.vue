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
  PxMessage({ message: 'Plain info message', plain: true, type: 'info' });
};
const showSuccess = () => {
  PxMessage({ message: 'Plain success message', plain: true, type: 'success' });
};
const showWarning = () => {
  PxMessage({ message: 'Plain warning message', plain: true, type: 'warning' });
};
const showDanger = () => {
  PxMessage({ message: 'Plain danger message', plain: true, type: 'danger' });
};
</script>

<style scoped>
.demo-message {
  display: flex;
  gap: 12px;
}
</style>
