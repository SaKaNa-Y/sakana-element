<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <px-button @click="showNoEscape">Disable ESC Close</px-button>
    <px-button @click="showNoHashChange">Disable Hash Close</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessageBox } from 'sakana-element';

const showNoEscape = () => {
  PxMessageBox({
    title: 'No ESC Close',
    message: 'Pressing Escape will NOT close this dialog. Use the buttons instead.',
    showCancelButton: true,
    closeOnPressEscape: false,
  }).catch(() => {});
};

const showNoHashChange = () => {
  PxMessageBox({
    title: 'No Hash Close',
    message: 'Changing the URL hash will NOT close this dialog.',
    showCancelButton: true,
    closeOnHashChange: false,
  }).catch(() => {});
};
</script>
