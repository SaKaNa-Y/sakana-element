<template>
  <div class="demo-notification">
    <px-button @click="showTopRight">Top Right</px-button>
    <px-button @click="showTopLeft">Top Left</px-button>
    <px-button @click="showBottomRight">Bottom Right</px-button>
    <px-button @click="showBottomLeft">Bottom Left</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxNotification } from 'sakana-element';

const showTopRight = () => {
  PxNotification({
    title: 'Top Right',
    message: 'This is a notification',
    position: 'top-right',
  });
};
const showTopLeft = () => {
  PxNotification({
    title: 'Top Left',
    message: 'This is a notification',
    position: 'top-left',
  });
};
const showBottomRight = () => {
  PxNotification({
    title: 'Bottom Right',
    message: 'This is a notification',
    position: 'bottom-right',
  });
};
const showBottomLeft = () => {
  PxNotification({
    title: 'Bottom Left',
    message: 'This is a notification',
    position: 'bottom-left',
  });
};
</script>

<style scoped>
.demo-notification {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
