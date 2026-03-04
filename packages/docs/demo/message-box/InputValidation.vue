<template>
  <px-button @click="showValidation">Email Validation</px-button>
</template>

<script setup lang="ts">
import { PxMessage, PxMessageBox } from 'sakana-element';
import { z } from 'zod';

const showValidation = async () => {
  try {
    const { value } = await PxMessageBox.prompt(
      'Please enter your email address',
      'Email Validation',
      {
        inputPlaceholder: 'user@example.com',
        inputSchema: z.string().email(),
        inputErrorMessage: 'Please enter a valid email address',
      },
    );
    PxMessage.success(`Email submitted: ${value}`);
  } catch {
    PxMessage.info('Cancelled');
  }
};
</script>
