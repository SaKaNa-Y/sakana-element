<template>
  <div class="demo-notification">
    <px-button @click="showSuccess">Success</px-button>
    <px-button @click="showWarning">Warning</px-button>
    <px-button @click="showInfo">Info</px-button>
    <px-button @click="showDanger">Danger</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxNotification } from 'sakana-element';

const showSuccess = () => {
  PxNotification.success({
    title: 'Success',
    message: 'Operation completed successfully'
  });
};
const showWarning = () => {
  PxNotification.warning({
    title: 'Warning',
    message: 'This is a warning message'
  });
};
const showInfo = () => {
  PxNotification.info({
    title: 'Info',
    message: 'This is an info message'
  });
};
const showDanger = () => {
  PxNotification.danger({
    title: 'Danger',
    message: 'This is a danger message'
  });
};
</script>

<style scoped>
.demo-notification {
  display: flex;
  gap: 12px;
}
</style>
