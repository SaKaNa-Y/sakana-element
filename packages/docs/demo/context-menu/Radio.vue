<template>
  <px-context-menu :hide-on-click="false">
    <div class="demo-area">
      Right-click for radio items
    </div>
    <template #content>
      <px-context-menu-label>Theme</px-context-menu-label>
      <px-context-menu-radio-group v-model="theme">
        <px-context-menu-radio-item label="Light" value="light" />
        <px-context-menu-radio-item label="Dark" value="dark" />
        <px-context-menu-radio-item label="System" value="system" />
      </px-context-menu-radio-group>
    </template>
  </px-context-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const theme = ref('light');
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
