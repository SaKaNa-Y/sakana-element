<template>
  <px-button @click="showAlert">Show Alert</px-button>
</template>

<script setup lang="ts">
import { PxMessageBox } from 'sakana-element';

const showAlert = () => {
  PxMessageBox.alert('This is an alert message', 'Alert');
};
</script>
