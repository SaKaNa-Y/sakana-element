<template>
  <div class="demo-notification">
    <px-button v-for="t in types" :key="t" :type="t === 'danger' ? 'danger' : t" @click="show(t)">
      {{ t }}
    </px-button>
  </div>
</template>

<script setup lang="ts">
import { PxNotification } from 'sakana-element';

const types = ['info', 'success', 'warning', 'danger'] as const;

const show = (type: (typeof types)[number]) => {
  PxNotification({
    title: 'Plain Notification',
    message: `This is a ${type} plain notification.`,
    type,
    plain: true,
  });
};
</script>

<style scoped>
.demo-notification {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
