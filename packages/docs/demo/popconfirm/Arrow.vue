<template>
  <div style="display: flex; gap: 12px;">
    <px-popconfirm title="With arrow" show-arrow @confirm="onConfirm">
      <px-button>Show Arrow</px-button>
    </px-popconfirm>
    <px-popconfirm title="Without arrow" @confirm="onConfirm">
      <px-button>No Arrow</px-button>
    </px-popconfirm>
  </div>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const onConfirm = () => {
  PxMessage.success('Confirmed!');
};
</script>
