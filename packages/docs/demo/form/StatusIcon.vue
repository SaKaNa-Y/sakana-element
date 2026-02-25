<template>
  <px-form ref="formRef" :model="form" :rules="rules" status-icon label-width="80px">
    <px-form-item label="Name" prop="name">
      <px-input v-model="form.name" placeholder="Enter name" />
    </px-form-item>
    <px-form-item label="Email" prop="email">
      <px-input v-model="form.email" placeholder="Enter email" />
    </px-form-item>
    <px-form-item>
      <px-button type="primary" @click="onSubmit">Validate</px-button>
      <px-button @click="onReset">Reset</px-button>
    </px-form-item>
  </px-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { z } from 'zod';

const formRef = ref();
const form = reactive({
  name: '',
  email: '',
});

const rules = {
  name: [{ schema: z.string().min(1, 'Name is required'), trigger: 'blur' }],
  email: [{ schema: z.string().email('Invalid email'), trigger: 'blur' }],
};

const onSubmit = async () => {
  try {
    await formRef.value.validate();
  } catch {
    // validation failed
  }
};

const onReset = () => {
  formRef.value.resetFields();
};
</script>
