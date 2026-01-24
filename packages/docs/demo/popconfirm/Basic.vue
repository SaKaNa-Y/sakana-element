<template>
  <px-popconfirm title="Are you sure to delete this?" @confirm="onConfirm" @cancel="onCancel">
    <px-button type="danger">Delete</px-button>
  </px-popconfirm>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const onConfirm = () => {
  PxMessage.success('Deleted!');
};

const onCancel = () => {
  PxMessage.info('Cancelled');
};
</script>
