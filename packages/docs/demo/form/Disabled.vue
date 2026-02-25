<template>
  <px-form :model="form" disabled label-width="80px">
    <px-form-item label="Name" prop="name">
      <px-input v-model="form.name" placeholder="Enter name" />
    </px-form-item>
    <px-form-item label="Email" prop="email">
      <px-input v-model="form.email" placeholder="Enter email" />
    </px-form-item>
    <px-form-item label="Active" prop="active">
      <px-switch v-model="form.active" />
    </px-form-item>
    <px-form-item>
      <px-button type="primary" disabled>Submit</px-button>
    </px-form-item>
  </px-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  name: 'Sakana',
  email: 'sakana@example.com',
  active: true,
});
</script>
