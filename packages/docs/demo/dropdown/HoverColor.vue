<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap">
    <px-dropdown :items="items" hover-color="#22c55e" @command="handleCommand">
      <px-button>
        Green <px-icon icon="chevron-down" style="margin-left: 4px" />
      </px-button>
    </px-dropdown>

    <px-dropdown :items="items" hover-color="#ef4444" @command="handleCommand">
      <px-button>
        Red <px-icon icon="chevron-down" style="margin-left: 4px" />
      </px-button>
    </px-dropdown>

    <px-dropdown :items="items" hover-color="#f59e0b" @command="handleCommand">
      <px-button>
        Amber <px-icon icon="chevron-down" style="margin-left: 4px" />
      </px-button>
    </px-dropdown>
  </div>
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
