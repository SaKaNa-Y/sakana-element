<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <px-popconfirm title="Top placement" placement="top" @confirm="onConfirm">
      <px-button>Top</px-button>
    </px-popconfirm>
    <px-popconfirm title="Bottom placement" placement="bottom" @confirm="onConfirm">
      <px-button>Bottom</px-button>
    </px-popconfirm>
    <px-popconfirm title="Left placement" placement="left" @confirm="onConfirm">
      <px-button>Left</px-button>
    </px-popconfirm>
    <px-popconfirm title="Right placement" placement="right" @confirm="onConfirm">
      <px-button>Right</px-button>
    </px-popconfirm>
  </div>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const onConfirm = () => {
  PxMessage.success('Confirmed!');
};
</script>
