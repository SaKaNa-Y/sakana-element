<template>
  <px-popconfirm
    title="This will permanently delete the file. Continue?"
    confirm-button-text="Yes"
    cancel-button-text="No"
    icon="warning-box"
    icon-color="#f56c6c"
    @confirm="onConfirm"
  >
    <px-button type="danger">Delete File</px-button>
  </px-popconfirm>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const onConfirm = () => {
  PxMessage.success('File deleted!');
};
</script>
