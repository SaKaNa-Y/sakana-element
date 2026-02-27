<template>
  <div class="demo-message">
    <px-button @click="showStar">Star Icon</px-button>
    <px-button @click="showHeart">Heart Icon</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';

const showStar = () => {
  PxMessage({ message: 'Starred message!', icon: 'star', type: 'warning' });
};
const showHeart = () => {
  PxMessage({ message: 'Liked message!', icon: 'heart', type: 'danger' });
};
</script>

<style scoped>
.demo-message {
  display: flex;
  gap: 12px;
}
</style>
