<template>
  <div class="demo-select">
    <px-select v-model="v1" size="large" placeholder="Large">
      <px-option label="选项一" value="1" />
      <px-option label="选项二" value="2" />
      <px-option label="选项三" value="3" />
    </px-select>
    <px-select v-model="v2" placeholder="Default">
      <px-option label="选项一" value="1" />
      <px-option label="选项二" value="2" />
      <px-option label="选项三" value="3" />
    </px-select>
    <px-select v-model="v3" size="small" placeholder="Small">
      <px-option label="选项一" value="1" />
      <px-option label="选项二" value="2" />
      <px-option label="选项三" value="3" />
    </px-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref('');
const v2 = ref('');
const v3 = ref('');
</script>

<style scoped>
.demo-select {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 300px;
}
</style>
