<template>
  <div class="demo-drawer">
    <px-button @click="withOverlay = true">With Overlay</px-button>
    <px-button @click="noOverlay = true">No Overlay</px-button>
    <px-button @click="noClose = true">No Close on Overlay</px-button>
    <px-drawer v-model="withOverlay">
      <template #sidebar>
        <p>Click overlay to close</p>
      </template>
    </px-drawer>
    <px-drawer v-model="noOverlay" :show-overlay="false">
      <template #sidebar>
        <p>No overlay background</p>
        <px-button @click="noOverlay = false">Close</px-button>
      </template>
    </px-drawer>
    <px-drawer v-model="noClose" :close-on-click-overlay="false">
      <template #sidebar>
        <p>Overlay click won't close</p>
        <px-button @click="noClose = false">Close</px-button>
      </template>
    </px-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const withOverlay = ref(false);
const noOverlay = ref(false);
const noClose = ref(false);
</script>

<style scoped>
.demo-drawer {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
