<template>
  <px-dropdown :items="items" @command="handleCommand">
    <px-button>
      Icon Menu <px-icon icon="chevron-down" style="margin-left: 4px" />
    </px-button>
  </px-dropdown>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const items = [
  { label: 'Edit', command: 'edit', icon: 'edit' },
  { label: 'Search', command: 'search', icon: 'search' },
  { label: 'Bookmark', command: 'bookmark', icon: 'bookmark' },
  { label: 'Delete', command: 'delete', icon: 'trash', divided: true },
];

const handleCommand = (command: string) => {
  PxMessage.info(`Command: ${command}`);
};
</script>
