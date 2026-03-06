<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap">
    <px-dropdown :items="items" show-arrow @command="handleCommand">
      <px-button>
        Bottom (default) <px-icon icon="chevron-down" style="margin-left: 4px" />
      </px-button>
    </px-dropdown>

    <px-dropdown :items="items" show-arrow placement="right" @command="handleCommand">
      <px-button>
        Right <px-icon icon="chevron-down" style="margin-left: 4px" />
      </px-button>
    </px-dropdown>

    <px-dropdown :items="items" show-arrow placement="top" @command="handleCommand">
      <px-button>
        Top <px-icon icon="chevron-down" style="margin-left: 4px" />
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
];

const handleCommand = (command: string) => {
  PxMessage.info(`Command: ${command}`);
};
</script>
