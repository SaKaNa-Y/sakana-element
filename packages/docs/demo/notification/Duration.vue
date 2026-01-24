<template>
  <px-button @click="showNotification">Non-auto close</px-button>
</template>

<script setup lang="ts">
import { PxNotification } from 'sakana-element';

const showNotification = () => {
  PxNotification({
    title: 'Notice',
    message: 'This notification will not auto close',
    duration: 0
  });
};
</script>
