<template>
  <px-command :filter="fuzzyFilter" label="Custom filter">
    <px-command-input placeholder="Try fuzzy search..." />
    <px-command-list>
      <px-command-empty>No matches.</px-command-empty>
      <px-command-item value="calendar">Calendar</px-command-item>
      <px-command-item value="calculator">Calculator</px-command-item>
      <px-command-item value="contacts">Contacts</px-command-item>
      <px-command-item value="configuration">Configuration</px-command-item>
    </px-command-list>
  </px-command>
</template>

<script setup lang="ts">
function fuzzyFilter(value: string, search: string): boolean {
  if (!search) return true;
  const chars = search.toLowerCase().split('');
  let idx = 0;
  for (const char of value.toLowerCase()) {
    if (char === chars[idx]) idx++;
    if (idx === chars.length) return true;
  }
  return false;
}
</script>

<style scoped>
.px-command {
  max-width: 480px;
}
</style>
