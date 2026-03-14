<template>
  <div class="demo-validator">
    <px-validator ref="validatorRef" v-model="username" :rules="rules">
      <px-input v-model="username" placeholder="Username" />
    </px-validator>
    <div class="demo-validator__actions">
      <px-button type="primary" @click="handleValidate">Validate</px-button>
      <px-button @click="handleReset">Reset</px-button>
    </div>
    <p class="demo-validator__result">
      Status: {{ validatorRef?.validateStatus ?? 'init' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ValidatorInstance } from 'sakana-element';
import { ref } from 'vue';
import { z } from 'zod';

const username = ref('');
const validatorRef = ref<ValidatorInstance>();

const rules = [{ schema: z.string().min(3, 'Username must be at least 3 characters') }];

const handleValidate = async () => {
  try {
    await validatorRef.value?.validate();
  } catch {
    // validation failed
  }
};

const handleReset = () => {
  validatorRef.value?.reset();
};
</script>

<style scoped>
.demo-validator {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
}
.demo-validator__actions {
  display: flex;
  gap: 8px;
}
.demo-validator__result {
  font-family: var(--px-font-family);
  font-size: 14px;
  color: var(--px-text-color-secondary);
  margin: 0;
}
</style>
