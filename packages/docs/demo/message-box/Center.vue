<template>
  <px-button @click="showCenter">Center Layout</px-button>
</template>

<script setup lang="ts">
import { PxMessageBox } from 'sakana-element';

const showCenter = () => {
  PxMessageBox({
    title: 'Warning',
    message: 'This will center the title and footer.',
    type: 'warning',
    center: true,
    showCancelButton: true,
  });
};
</script>
