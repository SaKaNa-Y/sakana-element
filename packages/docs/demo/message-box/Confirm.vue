<template>
  <px-button @click="showConfirm">Show Confirm</px-button>
</template>

<script setup lang="ts">
import { PxMessageBox, PxMessage } from 'sakana-element';

const showConfirm = async () => {
  try {
    await PxMessageBox.confirm('Are you sure to delete this item?', 'Confirm');
    PxMessage.success('Deleted successfully');
  } catch {
    PxMessage.info('Cancelled');
  }
};
</script>
