<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <px-button @click="showCustomClass">Custom Class</px-button>
    <px-button @click="showCustomStyle">Custom Style</px-button>
    <px-button @click="showWidth">Custom Width</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessageBox } from 'sakana-element';

const showCustomClass = () => {
  PxMessageBox.alert('This dialog has a custom CSS class applied.', 'Custom Class', {
    customClass: 'my-custom-msgbox',
  }).catch(() => {});
};

const showCustomStyle = () => {
  PxMessageBox.alert('This dialog has custom inline styles.', 'Custom Style', {
    customStyle: {
      '--px-message-box-bg': '#f0f9eb',
      '--px-message-box-border-color': '#67c23a',
    } as any,
  }).catch(() => {});
};

const showWidth = () => {
  PxMessageBox.alert('This dialog is 600px wide.', 'Custom Width (number)', { width: 600 }).catch(
    () => {},
  );
};
</script>

<style>
.my-custom-msgbox {
  --px-message-box-bg: #fdf6ec;
  --px-message-box-border-color: #e6a23c;
}
</style>
