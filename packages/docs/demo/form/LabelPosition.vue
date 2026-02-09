<template>
  <div class="demo-form">
    <div class="buttons">
      <px-button @click="labelPosition = 'left'">Left</px-button>
      <px-button @click="labelPosition = 'right'">Right</px-button>
      <px-button @click="labelPosition = 'top'">Top</px-button>
    </div>
    <px-form :model="form" :label-position="labelPosition" label-width="80px">
      <px-form-item label="Name">
        <px-input v-model="form.name" placeholder="Enter name" />
      </px-form-item>
      <px-form-item label="Email">
        <px-input v-model="form.email" placeholder="Enter email" />
      </px-form-item>
      <px-form-item>
        <px-button type="primary" @click="onSubmit">Submit</px-button>
        <px-button @click="onCancel">Cancel</px-button>
      </px-form-item>
    </px-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const labelPosition = ref<'left' | 'right' | 'top'>('right');

const form = reactive({
  name: '',
  email: '',
});

function onSubmit() {}

function onCancel() {
  form.name = '';
  form.email = '';
}
</script>

<style scoped>
.demo-form .buttons {
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
}
</style>
