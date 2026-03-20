<template>
  <div class="demo-collapsible">
    <px-button @click="isOpen = !isOpen">
      {{ isOpen ? 'Close' : 'Open' }} from outside
    </px-button>

    <px-collapsible v-model="isOpen" color="primary">
      <px-collapsible-trigger>
        <span class="trigger-label">Controlled state: {{ isOpen ? 'Open' : 'Closed' }}</span>
      </px-collapsible-trigger>
      <px-collapsible-content>
        <p>This collapsible is controlled via <code>v-model</code>. You can toggle it from the button above or by clicking the trigger.</p>
      </px-collapsible-content>
    </px-collapsible>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<style scoped>
.demo-collapsible {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}
.trigger-label {
  font-weight: 500;
}
</style>
