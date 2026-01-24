<template>
  <div class="demo-message">
    <px-button @click="showMessages">Show Multiple Messages</px-button>
    <px-button @click="closeAll">Close All</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const showMessages = () => {
  PxMessage.success('Message 1');
  PxMessage.warning('Message 2');
  PxMessage.info('Message 3');
};

const closeAll = () => {
  PxMessage.closeAll();
};
</script>

<style scoped>
.demo-message {
  display: flex;
  gap: 12px;
}
</style>
