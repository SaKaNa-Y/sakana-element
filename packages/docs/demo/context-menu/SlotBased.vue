<template>
  <px-context-menu @command="handleCommand">
    <div class="demo-area">
      Right-click for slot-based menu
    </div>
    <template #content>
      <px-context-menu-label>Edit</px-context-menu-label>
      <px-context-menu-item label="Undo" command="undo" :shortcut="['Ctrl', 'Z']" />
      <px-context-menu-item label="Redo" command="redo" :shortcut="['Ctrl', 'Y']" />
      <px-context-menu-separator />
      <px-context-menu-item label="Cut" command="cut" icon="cut" :shortcut="['Ctrl', 'X']" />
      <px-context-menu-item label="Copy" command="copy" icon="clipboard" :shortcut="['Ctrl', 'C']" />
      <px-context-menu-item label="Paste" command="paste" :shortcut="['Ctrl', 'V']" />
    </template>
  </px-context-menu>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const handleCommand = (command: string) => {
  PxMessage.info(`Command: ${command}`);
};
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
