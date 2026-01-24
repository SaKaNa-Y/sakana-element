<template>
  <div class="demo-input">
    <px-input v-model="input" placeholder="可清空" clearable />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref('Hello World')
</script>

<style scoped>
.demo-input {
  max-width: 300px;
}
</style>
