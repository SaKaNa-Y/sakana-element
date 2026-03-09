<template>
  <div class="demo-radio">
    <px-radio v-model="v1" value="a" label="Coral" color="#ff6b6b" />
    <px-radio v-model="v2" value="a" label="Teal" color="#20c997" />
    <px-radio v-model="v3" value="a" label="Purple" color="#845ef7" />
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
