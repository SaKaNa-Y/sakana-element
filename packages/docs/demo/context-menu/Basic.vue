<template>
  <px-context-menu :items="items" @command="handleCommand">
    <div class="demo-area">
      Right-click here
    </div>
  </px-context-menu>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const items = [
  { label: 'Cut', command: 'cut' },
  { label: 'Copy', command: 'copy' },
  { label: 'Paste', command: 'paste' },
  { label: 'Delete', command: 'delete', divided: true },
];

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
