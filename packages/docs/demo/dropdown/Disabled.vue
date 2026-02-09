<template>
  <px-dropdown :items="items" @command="handleCommand">
    <px-button>
      Dropdown <px-icon icon="chevron-down" style="margin-left: 4px" />
    </px-button>
  </px-dropdown>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const items = [
  { label: 'Action 1', command: 'a' },
  { label: 'Action 2 (disabled)', command: 'b', disabled: true },
  { label: 'Action 3', command: 'c' },
  { label: 'Action 4 (disabled)', command: 'd', disabled: true },
];

const handleCommand = (command: string) => {
  PxMessage.info(`Command: ${command}`);
};
</script>
