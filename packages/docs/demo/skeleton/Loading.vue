<template>
  <div class="demo-skeleton">
    <px-button @click="loading = !loading" size="small">
      {{ loading ? 'Show Content' : 'Show Skeleton' }}
    </px-button>
    <px-skeleton :loading="loading" width="300px">
      <p class="demo-skeleton__content">Content loaded successfully!</p>
    </px-skeleton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(true);
</script>

<style scoped>
.demo-skeleton {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-skeleton__content {
  margin: 0;
  font-family: var(--px-font-family, monospace);
}
</style>
