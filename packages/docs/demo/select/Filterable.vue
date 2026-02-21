<template>
  <div class="demo-select">
    <px-select v-model="value" filterable placeholder="Type to search">
      <px-option label="Apple" value="apple" />
      <px-option label="Banana" value="banana" />
      <px-option label="Cherry" value="cherry" />
      <px-option label="Grape" value="grape" />
      <px-option label="Orange" value="orange" />
    </px-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
</script>

<style scoped>
.demo-select {
  max-width: 300px;
}
</style>
