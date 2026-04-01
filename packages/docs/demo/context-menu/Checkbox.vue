<template>
  <px-context-menu :hide-on-click="false">
    <div class="demo-area">
      Right-click for checkbox items
    </div>
    <template #content>
      <px-context-menu-label>View</px-context-menu-label>
      <px-context-menu-checkbox-item v-model="showToolbar" label="Toolbar" />
      <px-context-menu-checkbox-item v-model="showStatusBar" label="Status Bar" />
      <px-context-menu-checkbox-item v-model="showMinimap" label="Minimap" />
    </template>
  </px-context-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showToolbar = ref(true);
const showStatusBar = ref(true);
const showMinimap = ref(false);
</script>

<style scoped>
.demo-area {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 120px;
  border: 2px dashed var(--px-border-color);
  font-family: var(--px-font-family);
  color: var(--px-text-color-secondary);
}
</style>
