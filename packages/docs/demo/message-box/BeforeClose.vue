<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <px-button @click="showCallbackStyle">Callback Style</px-button>
    <px-button @click="showAsyncStyle">Async / Promise Style</px-button>
  </div>
</template>

<script setup lang="ts">
import { PxMessage, PxMessageBox } from 'sakana-element';

const showCallbackStyle = () => {
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

const showAsyncStyle = () => {
  PxMessageBox({
    title: 'Async Confirm',
    message: 'The confirm button will show a loading spinner for 1.5 seconds.',
    showCancelButton: true,
    beforeClose: (action, _instance, done) => {
      if (action === 'confirm') {
        return new Promise<void>((resolve) => {
          setTimeout(() => {
            done();
            PxMessage.success('Async operation completed');
            resolve();
          }, 1500);
        });
      }
      done();
    },
  });
};
</script>
