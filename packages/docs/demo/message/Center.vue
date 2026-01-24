<template>
  <px-button @click="showMessage">Show Centered Message</px-button>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const showMessage = () => {
  PxMessage({
    message: 'Centered text message',
    center: true
  });
};
</script>
