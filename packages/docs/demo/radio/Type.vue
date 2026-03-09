<template>
  <div class="demo-radio">
    <px-radio v-model="v1" value="a" label="Primary" type="primary" />
    <px-radio v-model="v2" value="a" label="Success" type="success" />
    <px-radio v-model="v3" value="a" label="Warning" type="warning" />
    <px-radio v-model="v4" value="a" label="Danger" type="danger" />
    <px-radio v-model="v5" value="a" label="Info" type="info" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const v1 = ref('a');
const v2 = ref('a');
const v3 = ref('a');
const v4 = ref('a');
const v5 = ref('a');
</script>

<style scoped>
.demo-radio {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
