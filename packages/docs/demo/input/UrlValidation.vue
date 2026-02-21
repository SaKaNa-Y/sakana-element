<template>
  <div class="demo-input">
    <px-form :model="form" :rules="rules" label-position="left" label-width="50px">
      <px-form-item prop="url" label="URL">
        <px-input v-model="form.url" type="url" placeholder="https://example.com">
          <template #prefix>
            <px-icon icon="link" />
          </template>
        </px-input>
      </px-form-item>
    </px-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  url: '',
});

const rules = {
  url: [
    { required: true, message: 'Please enter a URL', trigger: 'blur' },
    { type: 'url', message: 'Please enter a valid URL', trigger: 'blur' },
  ],
};
</script>

<style scoped>
.demo-input {
  max-width: 400px;
}
</style>
