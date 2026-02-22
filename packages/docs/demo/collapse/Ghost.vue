<script setup lang="ts">
import { ref } from 'vue';

const activeNames = ref(['1']);
</script>

<template>
  <px-collapse v-model="activeNames" ghost>
    <px-collapse-item title="Ghost Mode" name="1">
      This collapse uses ghost mode — no pixel border or shadow.
    </px-collapse-item>
    <px-collapse-item title="Clean Look" name="2">
      Perfect for embedding inside other containers.
    </px-collapse-item>
    <px-collapse-item title="Minimal Style" name="3">
      Keeps the interaction while removing visual weight.
    </px-collapse-item>
  </px-collapse>
</template>
