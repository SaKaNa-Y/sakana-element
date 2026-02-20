<template>
  <div class="demo-switch">
    <px-switch v-model="v1" active-icon="check" inactive-icon="close" />
    <px-switch v-model="v2" active-icon="sun" inactive-icon="moon" type="warning" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref(true);
const v2 = ref(false);
</script>

<style scoped>
.demo-switch {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
