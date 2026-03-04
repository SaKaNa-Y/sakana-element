<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <px-button @click="show(true)">Distinguish (default)</px-button>
    <px-button @click="show(false)">Not Distinguished</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessage, PxMessageBox } from 'sakana-element';

const show = async (distinguish: boolean) => {
  try {
    await PxMessageBox({
      title: distinguish ? 'Distinguish Close' : 'Not Distinguished',
      message: distinguish
        ? 'Close button fires "close", cancel button fires "cancel".'
        : 'Both close button and cancel button fire "cancel".',
      showCancelButton: true,
      distinguishCancelAndClose: distinguish,
    });
    PxMessage.success('Action: confirm');
  } catch (action) {
    PxMessage.info(`Action: ${action}`);
  }
};
</script>
