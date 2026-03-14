<template>
  <div class="demo-validator">
    <px-validator v-model="age" :rules="rules">
      <px-input v-model="age" placeholder="Enter your age" />
    </px-validator>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { z } from 'zod';

const age = ref('');
const rules = [
  {
    schema: z.string().regex(/^\d+$/).pipe(z.coerce.number().min(1).max(150)),
    message: 'Please enter a valid age (1-150)',
    trigger: 'change',
  },
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
