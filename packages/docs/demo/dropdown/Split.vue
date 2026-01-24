<template>
  <px-dropdown :items="items" split-button type="primary" @click="handleClick" @command="handleCommand">
    Actions
  </px-dropdown>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const items = [
  { label: 'Action 1', command: 'a' },
  { label: 'Action 2', command: 'b' },
  { label: 'Action 3', command: 'c' }
];

const handleClick = () => {
  PxMessage.info('Button clicked');
};

const handleCommand = (command: string) => {
  PxMessage.info(`Command: ${command}`);
};
</script>
