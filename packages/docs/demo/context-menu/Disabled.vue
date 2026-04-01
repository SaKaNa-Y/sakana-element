<template>
  <px-context-menu @command="handleCommand">
    <div class="demo-area">
      Right-click — some items disabled
    </div>
    <template #content>
      <px-context-menu-item label="Cut" command="cut" />
      <px-context-menu-item label="Copy" command="copy" />
      <px-context-menu-item label="Paste" command="paste" disabled />
      <px-context-menu-item label="Delete" command="delete" disabled />
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
