<template>
  <px-button @click="showDraggable">Draggable MessageBox</px-button>
</template>

<script setup lang="ts">
import { PxMessageBox } from 'sakana-element';

const showDraggable = () => {
  PxMessageBox({
    title: 'Draggable',
    message: 'Drag the header to move this dialog around.',
    showCancelButton: true,
    draggable: true,
  }).catch(() => {});
};
</script>
