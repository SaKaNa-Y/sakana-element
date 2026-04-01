<template>
  <px-context-menu @command="handleCommand">
    <div class="demo-area">
      Right-click for submenu
    </div>
    <template #content>
      <px-context-menu-item label="Back" command="back" />
      <px-context-menu-item label="Forward" command="forward" />
      <px-context-menu-item label="Reload" command="reload" :shortcut="['Ctrl', 'R']" />
      <px-context-menu-separator />
      <px-context-menu-sub label="More Tools">
        <px-context-menu-item label="Save Page As..." command="save" :shortcut="['Ctrl', 'S']" />
        <px-context-menu-item label="Create Shortcut" command="shortcut" />
        <px-context-menu-item label="Developer Tools" command="devtools" :shortcut="['F12']" />
      </px-context-menu-sub>
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
