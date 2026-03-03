<template>
  <div>
    <px-button @click="open = true">Open Drawer</px-button>
    <px-drawer v-model="open">
      <p>Main page content</p>
      <template #sidebar>
        <p>Sidebar content goes here.</p>
      </template>
    </px-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
</script>
