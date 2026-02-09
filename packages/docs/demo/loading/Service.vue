<template>
  <px-button @click="openLoading">Service Loading (3s)</px-button>
</template>

<script setup lang="ts">
import { PxLoadingService } from 'sakana-element';

const openLoading = () => {
  const loading = PxLoadingService({
    lock: true,
    text: 'Loading...',
    fullscreen: true,
    background: 'rgba(0, 0, 0, 0.7)',
  });
  setTimeout(() => {
    loading.close();
  }, 3000);
};
</script>
