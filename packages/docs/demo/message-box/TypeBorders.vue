<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <px-button type="info" @click="showType('info')">Info</px-button>
    <px-button type="success" @click="showType('success')">Success</px-button>
    <px-button type="warning" @click="showType('warning')">Warning</px-button>
    <px-button type="danger" @click="showType('danger')">Danger</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessageBox } from 'sakana-element';

const showType = (type: 'info' | 'success' | 'warning' | 'danger') => {
  PxMessageBox({
    title: `${type.charAt(0).toUpperCase() + type.slice(1)} Type`,
    message: `This message box uses the "${type}" type, which colors the border, shadow, and divider.`,
    type,
    showCancelButton: true,
  }).catch(() => {});
};
</script>
