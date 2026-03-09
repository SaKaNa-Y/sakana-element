<template>
  <div class="demo-radio">
    <px-radio v-model="v1" value="a" label="Small" size="small" />
    <px-radio v-model="v2" value="a" label="Default" />
    <px-radio v-model="v3" value="a" label="Large" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref('a');
const v2 = ref('a');
const v3 = ref('a');
</script>

<style scoped>
.demo-radio {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
