<script setup lang="ts">
import { ref } from 'vue';

const activeNames = ref(['1']);
</script>
<template>
  <px-collapse v-model="activeNames">
    <px-collapse-item title="How do I create an account?" name="1" icon="plus">
      Click the "Sign Up" button in the top right corner and follow the registration process.
    </px-collapse-item>
    <px-collapse-item title="I forgot my password. What should I do?" name="2" icon="plus">
      Click "Forgot Password" on the login page to reset your password via email.
    </px-collapse-item>
    <px-collapse-item title="How do I update my profile information?" name="3" icon="plus">
      Go to Settings > Profile to update your personal information.
    </px-collapse-item>
  </px-collapse>
</template>
