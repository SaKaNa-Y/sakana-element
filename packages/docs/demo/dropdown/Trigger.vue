<template>
  <div class="demo-dropdown">
    <px-dropdown :items="items" trigger="hover">
      <px-button>Hover</px-button>
    </px-dropdown>
    <px-dropdown :items="items" trigger="click">
      <px-button>Click</px-button>
    </px-dropdown>
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'Action 1', command: 'a' },
  { label: 'Action 2', command: 'b' },
  { label: 'Action 3', command: 'c' }
];
</script>

<style scoped>
.demo-dropdown {
  display: flex;
  gap: 12px;
}
</style>
