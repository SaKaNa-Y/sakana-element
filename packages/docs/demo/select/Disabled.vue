<template>
  <div class="demo-select">
    <px-select v-model="value" placeholder="有禁用选项">
      <px-option label="选项一" value="1" />
      <px-option label="选项二（禁用）" value="2" disabled />
      <px-option label="选项三" value="3" />
    </px-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<style scoped>
.demo-select {
  max-width: 300px;
}
</style>
