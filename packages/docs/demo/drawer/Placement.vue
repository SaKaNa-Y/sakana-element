<template>
  <div class="demo-drawer">
    <px-button @click="leftOpen = true">Left (default)</px-button>
    <px-button @click="rightOpen = true">Right</px-button>
    <px-drawer v-model="leftOpen" placement="left">
      <template #sidebar>
        <p>Left sidebar content</p>
      </template>
    </px-drawer>
    <px-drawer v-model="rightOpen" placement="right">
      <template #sidebar>
        <p>Right sidebar content</p>
      </template>
    </px-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftOpen = ref(false);
const rightOpen = ref(false);
</script>

<style scoped>
.demo-drawer {
  display: flex;
  gap: 12px;
}
</style>
