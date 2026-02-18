<template>
  <div class="demo-input">
    <px-input v-model="input1" placeholder="Prefix icon" prefix-icon="search" />
    <px-input v-model="input2" placeholder="Suffix icon" suffix-icon="edit" />
    <px-input v-model="input3" placeholder="With slot prefix">
      <template #prefix>
        <px-icon icon="coin" />
      </template>
    </px-input>
    <px-input v-model="input4" placeholder="With slot suffix">
      <template #suffix>
        <px-icon icon="mail" />
      </template>
    </px-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');
</script>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
</style>
