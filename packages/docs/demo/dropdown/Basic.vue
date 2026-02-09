<template>
  <px-dropdown :items="items" @command="handleCommand">
    <px-button>
      Dropdown Menu <px-icon icon="chevron-down" style="margin-left: 4px" />
    </px-button>
  </px-dropdown>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const items = [
  { label: 'Action 1', command: 'a' },
  { label: 'Action 2', command: 'b' },
  { label: 'Action 3', command: 'c' },
  { label: 'Action 4', command: 'd', divided: true },
];

const handleCommand = (command: string) => {
  PxMessage.info(`Command: ${command}`);
};
</script>
