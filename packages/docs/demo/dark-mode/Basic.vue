<template>
  <div class="demo-dark-mode">
    <div class="demo-dark-mode__status">
      <span>Theme: <code>{{ theme }}</code></span>
      <span>isDark: <code>{{ isDark }}</code></span>
    </div>
    <div class="demo-dark-mode__actions">
      <px-button @click="toggleTheme">Toggle Theme</px-button>
      <px-button type="primary" @click="setTheme('light')">Light</px-button>
      <px-button type="primary" @click="setTheme('dark')">Dark</px-button>
      <px-button type="info" @click="setTheme('system')">System</px-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'sakana-element';
import { useData } from 'vitepress';
import { watch } from 'vue';

const { isDark, theme, toggleTheme, setTheme } = useTheme();
const { isDark: vpIsDark } = useData();

// Sync VitePress → useTheme (immediate: true aligns initial state)
watch(
  vpIsDark,
  (dark) => {
    if (dark !== isDark.value) setTheme(dark ? 'dark' : 'light');
  },
  { immediate: true },
);

// Sync useTheme → VitePress
watch(isDark, (dark) => {
  if (dark !== vpIsDark.value) vpIsDark.value = dark;
});
</script>

<style scoped>
.demo-dark-mode__status {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  font-size: 14px;
}

.demo-dark-mode__status code {
  padding: 2px 6px;
  border: 1px solid var(--px-border-color-lighter);
  background: var(--px-fill-color-lighter);
}

.demo-dark-mode__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
