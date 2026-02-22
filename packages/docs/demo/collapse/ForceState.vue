<script setup lang="ts">
import { ref } from 'vue';

const activeNames = ref(['2']);
</script>

<template>
  <px-collapse v-model="activeNames">
    <px-collapse-item title="Always Open (force-open)" name="1" force-open>
      This item is always expanded, regardless of the v-model value. Clicking the header has no effect.
    </px-collapse-item>
    <px-collapse-item title="Normal Item" name="2">
      This item behaves normally — click to toggle.
    </px-collapse-item>
    <px-collapse-item title="Always Closed (force-close)" name="3" force-close>
      This item is always collapsed. Even if its name is in the v-model array, it stays closed.
    </px-collapse-item>
  </px-collapse>
</template>
