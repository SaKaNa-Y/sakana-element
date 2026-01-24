<template>
  <px-button @click="showMessage">Show Closable Message</px-button>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const showMessage = () => {
  PxMessage({
    message: 'This is a closable message',
    showClose: true,
    duration: 0
  });
};
</script>
