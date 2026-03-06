<template>
  <px-dropdown :items="items" trigger="click" @command="handleCommand">
    <px-button>
      Click &amp; Navigate <px-icon icon="chevron-down" style="margin-left: 4px" />
    </px-button>
  </px-dropdown>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const items = [
  { label: 'Home', command: 'home', icon: 'home' },
  { label: 'Edit', command: 'edit', icon: 'edit' },
  { label: 'Disabled', command: 'disabled', disabled: true },
  { label: 'Search', command: 'search', icon: 'search' },
  { label: 'Settings', command: 'settings', icon: 'sliders', divided: true },
];

const handleCommand = (command: string) => {
  PxMessage.info(`Selected: ${command}`);
};
</script>
