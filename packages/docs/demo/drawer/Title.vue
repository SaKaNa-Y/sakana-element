<template>
  <div>
    <px-button @click="open = true">Drawer with Title</px-button>
    <px-drawer v-model="open" title="Settings">
      <template #sidebar>
        <p>The header shows a pixel-dashed divider below the title.</p>
      </template>
    </px-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
</script>
