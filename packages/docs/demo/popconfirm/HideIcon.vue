<template>
  <px-popconfirm title="Confirm action?" hide-icon @confirm="onConfirm">
    <px-button>Action</px-button>
  </px-popconfirm>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const onConfirm = () => {
  PxMessage.success('Action confirmed!');
};
</script>
