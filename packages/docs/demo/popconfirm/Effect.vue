<template>
  <div style="display: flex; gap: 12px;">
    <px-popconfirm title="Dark effect" effect="dark" @confirm="onConfirm">
      <px-button>Dark</px-button>
    </px-popconfirm>
    <px-popconfirm title="Light effect" effect="light" @confirm="onConfirm">
      <px-button>Light</px-button>
    </px-popconfirm>
  </div>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const onConfirm = () => {
  PxMessage.success('Confirmed!');
};
</script>
