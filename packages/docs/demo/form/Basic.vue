<template>
  <px-form :model="form" label-width="80px">
    <px-form-item label="Name">
      <px-input v-model="form.name" placeholder="Enter name" />
    </px-form-item>
    <px-form-item label="Email">
      <px-input v-model="form.email" placeholder="Enter email" />
    </px-form-item>
    <px-form-item label="Active">
      <px-switch v-model="form.active" />
    </px-form-item>
    <px-form-item>
      <px-button type="primary" @click="onSubmit">Submit</px-button>
      <px-button @click="onReset">Reset</px-button>
    </px-form-item>
  </px-form>
</template>

<script setup lang="ts">
import { PxMessage } from 'sakana-element';
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  active: false,
});

const onSubmit = () => {
  PxMessage.success('Submit!');
};

const onReset = () => {
  form.name = '';
  form.email = '';
  form.active = false;
};
</script>
