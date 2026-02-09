<template>
  <div class="demo-input">
    <px-input v-model="password" type="password" placeholder="请输入密码" show-password />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const password = ref('');
</script>

<style scoped>
.demo-input {
  max-width: 300px;
}
</style>
