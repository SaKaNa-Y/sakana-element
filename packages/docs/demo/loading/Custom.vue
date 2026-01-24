<template>
  <div class="demo-loading">
    <div
      v-loading="loading"
      px-loading-text="Loading..."
      px-loading-background="rgba(0, 0, 0, 0.7)"
      class="loading-area"
    >
      <p>Custom loading text and background</p>
    </div>
    <px-button @click="toggleLoading">Toggle Loading</px-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(true);

const toggleLoading = () => {
  loading.value = !loading.value;
};
</script>

<style scoped>
.demo-loading {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.loading-area {
  width: 100%;
  height: 150px;
  border: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
