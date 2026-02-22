<script setup lang="ts">
import { ref } from 'vue';

const activeNames = ref<string[]>([]);
</script>

<template>
  <px-collapse v-model="activeNames" trigger="focus">
    <px-collapse-item title="Focus to Open" name="1">
      This item opens when the header receives focus (Tab key or click).
    </px-collapse-item>
    <px-collapse-item title="Blur to Close" name="2">
      This item closes when focus moves away from the header.
    </px-collapse-item>
    <px-collapse-item title="Try Tab Key" name="3">
      Use Tab to navigate between items — they open and close automatically.
    </px-collapse-item>
  </px-collapse>
</template>
