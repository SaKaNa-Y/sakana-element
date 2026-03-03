<template>
  <px-popconfirm title="Are you sure?" disabled @confirm="onConfirm">
    <px-button>Disabled Popconfirm</px-button>
  </px-popconfirm>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const onConfirm = () => {
  PxMessage.success('Confirmed!');
};
</script>
