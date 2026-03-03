<template>
  <div>
    <px-button @click="open = true">Escape Disabled</px-button>
    <px-drawer v-model="open" :close-on-esc="false">
      <template #sidebar>
        <p>Press Escape — nothing happens.</p>
        <px-button @click="open = false">Close Manually</px-button>
      </template>
    </px-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
</script>
