<template>
  <px-button @click="showNotification">Show Notification</px-button>
</template>

<script setup lang="ts">
import { PxNotification } from 'sakana-element';

const showNotification = () => {
  PxNotification({
    title: 'Title',
    message: 'This is a notification message'
  });
};
</script>
