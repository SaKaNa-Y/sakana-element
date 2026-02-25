<template>
  <px-button @click="showBeforeClose">BeforeClose Callback</px-button>
</template>

<script setup lang="ts">
import { PxMessage, PxMessageBox } from 'sakana-element';

const showBeforeClose = () => {
  PxMessageBox({
    title: 'Confirm',
    message: 'Are you sure? The dialog will close after 1 second.',
    showCancelButton: true,
    beforeClose: (action, _instance, done) => {
      if (action === 'confirm') {
        setTimeout(() => {
          done();
          PxMessage.success('Confirmed after delay');
        }, 1000);
      } else {
        done();
      }
    },
  });
};
</script>
