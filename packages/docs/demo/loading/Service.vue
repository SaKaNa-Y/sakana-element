<template>
  <px-button @click="openLoading">Service Loading (3s)</px-button>
</template>

<script setup lang="ts">
import { vLoading } from 'sakana-element';

const openLoading = () => {
  const loading = vLoading.service({
    lock: true,
    text: 'Loading...',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  setTimeout(() => {
    loading.close();
  }, 3000);
};
</script>
