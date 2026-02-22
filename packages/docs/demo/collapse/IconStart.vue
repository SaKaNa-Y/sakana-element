<script setup lang="ts">
import { ref } from 'vue';

const activeNames = ref(['1']);
</script>

<template>
  <px-collapse v-model="activeNames" icon-placement="start">
    <px-collapse-item title="Icon at Start" name="1">
      The arrow indicator is placed before the title text.
    </px-collapse-item>
    <px-collapse-item title="Left-side Arrow" name="2">
      This layout is common in file explorers and tree views.
    </px-collapse-item>
    <px-collapse-item title="Familiar Pattern" name="3">
      Users can quickly identify expandable sections.
    </px-collapse-item>
  </px-collapse>
</template>
