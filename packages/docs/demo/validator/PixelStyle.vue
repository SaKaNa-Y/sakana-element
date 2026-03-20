<template>
  <div class="demo-validator">
    <h4>Error State — RPG Speech Bubble</h4>
    <px-validator ref="errorRef" v-model="invalid" :rules="rules">
      <px-input v-model="invalid" placeholder="Leave empty and click validate" />
    </px-validator>
    <px-button type="danger" @click="triggerError">Validate</px-button>

    <h4>Success State — Pixel Checkmark</h4>
    <px-validator ref="successRef" v-model="valid" :rules="rules">
      <px-input v-model="valid" placeholder="Already filled" />
    </px-validator>
    <px-button type="success" @click="triggerSuccess">Validate</px-button>
  </div>
</template>

<script setup lang="ts">
import type { ValidatorInstance } from 'sakana-element';
import { ref } from 'vue';

const invalid = ref('');
const valid = ref('Hello World');
const rules = [{ required: true, trigger: 'change' }];

const errorRef = ref<ValidatorInstance>();
const successRef = ref<ValidatorInstance>();

function triggerError() {
  errorRef.value?.validate().catch(() => {});
}

function triggerSuccess() {
  successRef.value?.validate();
}
</script>

<style scoped>
.demo-validator {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
}
h4 {
  margin: 8px 0 0;
  font-family: var(--px-font-family);
}
</style>
