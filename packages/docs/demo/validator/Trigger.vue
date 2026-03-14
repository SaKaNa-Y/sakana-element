<template>
  <div class="demo-validator">
    <p class="demo-validator__label">Validates on change:</p>
    <px-validator v-model="val1" :rules="[{ required: true, trigger: 'change' }]">
      <px-input v-model="val1" placeholder="Type and clear..." />
    </px-validator>

    <p class="demo-validator__label">Validates on blur:</p>
    <px-validator v-model="val2" :rules="[{ required: true, trigger: 'blur' }]">
      <px-input v-model="val2" placeholder="Focus and leave empty..." />
    </px-validator>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const val1 = ref('');
const val2 = ref('');
</script>

<style scoped>
.demo-validator {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
}
.demo-validator__label {
  font-family: var(--px-font-family);
  font-size: 14px;
  color: var(--px-text-color-secondary);
  margin: 0;
}
</style>
