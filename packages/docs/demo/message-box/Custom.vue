<template>
  <px-button @click="showCustom">Custom MessageBox</px-button>
</template>

<script setup lang="ts">
import { PxMessageBox, PxMessage } from 'sakana-element';

const showCustom = async () => {
  try {
    await PxMessageBox({
      title: 'Warning',
      message: 'This action will permanently delete the file. Continue?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it',
      cancelButtonText: 'No, cancel'
    });
    PxMessage.success('Deleted!');
  } catch {
    PxMessage.info('Cancelled');
  }
};
</script>
