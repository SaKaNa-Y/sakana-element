<template>
  <px-button @click="showMessage">Show Message</px-button>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const showMessage = () => {
  PxMessage('This is a message');
};
</script>
