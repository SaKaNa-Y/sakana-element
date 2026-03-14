<template>
  <div class="demo-validator">
    <px-validator v-model="name" :rules="rules">
      <px-input v-model="name" placeholder="Enter your name" />
    </px-validator>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const rules = [{ required: true, trigger: 'change' }];
</script>

<style scoped>
.demo-validator {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
}
</style>
