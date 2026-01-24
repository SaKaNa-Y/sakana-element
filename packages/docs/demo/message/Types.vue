<template>
  <div class="demo-message">
    <px-button @click="showSuccess">Success</px-button>
    <px-button @click="showWarning">Warning</px-button>
    <px-button @click="showInfo">Info</px-button>
    <px-button @click="showDanger">Danger</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const showSuccess = () => {
  PxMessage.success('Success!');
};
const showWarning = () => {
  PxMessage.warning('Warning!');
};
const showInfo = () => {
  PxMessage.info('Info message');
};
const showDanger = () => {
  PxMessage.danger('Danger!');
};
</script>

<style scoped>
.demo-message {
  display: flex;
  gap: 12px;
}
</style>
