<template>
  <div class="demo-drawer">
    <px-button @click="open200 = true">200px</px-button>
    <px-button @click="open50 = true">50%</px-button>
    <px-drawer v-model="open200" size="200px">
      <template #sidebar>
        <p>Narrow drawer (200px)</p>
      </template>
    </px-drawer>
    <px-drawer v-model="open50" size="50%">
      <template #sidebar>
        <p>Wide drawer (50%)</p>
      </template>
    </px-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open200 = ref(false);
const open50 = ref(false);
</script>

<style scoped>
.demo-drawer {
  display: flex;
  gap: 12px;
}
</style>
