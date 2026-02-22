<script setup lang="ts">
import { ref } from 'vue';

const activeNames = ref(['1']);
</script>

<template>
  <px-collapse v-model="activeNames" color="#e91e63">
    <px-collapse-item title="Custom Hex Color" name="1">
      This collapse uses a custom hex color (#e91e63).
    </px-collapse-item>
    <px-collapse-item title="Second Item" name="2">
      Content of the second item.
    </px-collapse-item>
    <px-collapse-item title="Third Item" name="3">
      Content of the third item.
    </px-collapse-item>
  </px-collapse>
</template>
