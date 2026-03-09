<template>
  <div class="demo-radio">
    <px-radio v-model="selected" value="a" label="Disabled selected" disabled />
    <px-radio v-model="selected" value="b" label="Disabled unselected" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref('a');
</script>

<style scoped>
.demo-radio {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
