<template>
  <div class="demo-tooltip">
    <px-tooltip content="Disabled tooltip" :disabled="disabled">
      <px-button>{{ disabled ? 'Disabled' : 'Enabled' }}</px-button>
    </px-tooltip>
    <px-button @click="disabled = !disabled">Toggle</px-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const disabled = ref(false);
</script>

<style scoped>
.demo-tooltip {
  display: flex;
  gap: 12px;
}
</style>
