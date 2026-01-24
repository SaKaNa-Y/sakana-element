<template>
  <px-button v-loading.fullscreen="fullscreenLoading" @click="openFullscreenLoading">
    Fullscreen Loading (3s)
  </px-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const fullscreenLoading = ref(false);

const openFullscreenLoading = () => {
  fullscreenLoading.value = true;
  setTimeout(() => {
    fullscreenLoading.value = false;
  }, 3000);
};
</script>
