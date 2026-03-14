<template>
  <div class="demo-validator">
    <px-validator v-model="email" :rules="emailRules">
      <px-input v-model="email" placeholder="Email address" />
    </px-validator>
    <px-validator v-model="password" :rules="passwordRules">
      <px-input v-model="password" type="password" placeholder="Password (min 6 chars)" />
    </px-validator>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { z } from 'zod';

const email = ref('');
const password = ref('');

const emailRules = [{ schema: z.string().email('Please enter a valid email'), trigger: 'change' }];
const passwordRules = [
  { schema: z.string().min(6, 'Password must be at least 6 characters'), trigger: 'change' },
];
</script>

<style scoped>
.demo-validator {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
}
</style>
