<template>
  <px-form ref="formRef" :model="form" inline label-width="60px">
    <px-form-item label="Name" prop="name">
      <px-input v-model="form.name" placeholder="Name" />
    </px-form-item>
    <px-form-item label="Email" prop="email">
      <px-input v-model="form.email" placeholder="Email" />
    </px-form-item>
    <px-form-item>
      <px-button type="primary" @click="onSearch">Search</px-button>
    </px-form-item>
  </px-form>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';
import { reactive, ref } from 'vue';

const formRef = ref();
const form = reactive({
  name: '',
  email: '',
});

const onSearch = () => {
  PxMessage.success('Search submitted!');
};
</script>
