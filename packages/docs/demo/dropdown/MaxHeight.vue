<template>
  <px-dropdown :items="items" :max-height="200" @command="handleCommand">
    <px-button>
      Long Menu <px-icon icon="chevron-down" style="margin-left: 4px" />
    </px-button>
  </px-dropdown>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const items = Array.from({ length: 20 }, (_, i) => ({
  label: `Action ${i + 1}`,
  command: `action-${i + 1}`,
}));

const handleCommand = (command: string) => {
  PxMessage.info(`Command: ${command}`);
};
</script>
