<template>
  <px-button @click="showPrompt">Show Prompt</px-button>
</template>

<script setup lang="ts">
import { PxMessageBox, PxMessage } from 'sakana-element';

const showPrompt = async () => {
  try {
    const { value } = await PxMessageBox.prompt('Please input your name', 'Prompt');
    PxMessage.success(`Your name is: ${value}`);
  } catch {
    PxMessage.info('Cancelled');
  }
};
</script>
