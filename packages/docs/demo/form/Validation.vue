<template>
  <px-form ref="formRef" :model="form" :rules="rules" label-width="80px">
    <px-form-item label="Name" prop="name">
      <px-input v-model="form.name" placeholder="Enter name" />
    </px-form-item>
    <px-form-item label="Email" prop="email">
      <px-input v-model="form.email" placeholder="Enter email" />
    </px-form-item>
    <px-form-item>
      <px-button type="primary" @click="onSubmit">Submit</px-button>
      <px-button @click="onReset">Reset</px-button>
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

const rules = {
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 2, max: 20, message: 'Length should be 2 to 20', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Please input email', trigger: 'blur' },
    { type: 'email', message: 'Please input a valid email', trigger: 'blur' },
  ],
};

const onSubmit = async () => {
  try {
    await formRef.value.validate();
    PxMessage.success('Submit success!');
  } catch {
    PxMessage.danger('Validation failed');
  }
};

const onReset = () => {
  formRef.value.resetFields();
};
</script>
