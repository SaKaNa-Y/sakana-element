<script setup lang="ts">
import { defaultPixelIcons } from 'sakana-element';
import { computed, ref } from 'vue';

const search = ref('');
const copiedName = ref('');

const allIconNames = computed(() => Object.keys(defaultPixelIcons).sort());

const filteredIcons = computed(() => {
  const keyword = search.value.trim().toLowerCase();
  if (!keyword) return allIconNames.value;
  return allIconNames.value.filter((name) => name.toLowerCase().includes(keyword));
});

function copyIconName(name: string) {
  navigator.clipboard.writeText(name).then(() => {
    copiedName.value = name;
    setTimeout(() => {
      copiedName.value = '';
    }, 1500);
  });
}
</script>

<template>
  <div class="icon-collection">
    <div class="icon-search">
      <px-icon icon="search" size="sm" class="search-icon" />
      <input
        v-model="search"
        type="text"
        class="search-input"
        placeholder="Search icon name..."
      />
      <span class="icon-count">{{ filteredIcons.length }} icons</span>
    </div>

    <div v-if="filteredIcons.length" class="icon-grid">
      <div
        v-for="name in filteredIcons"
        :key="name"
        class="icon-card"
        :class="{ 'icon-card--copied': copiedName === name }"
        :title="`Click to copy: ${name}`"
        @click="copyIconName(name)"
      >
        <px-icon :icon="name" size="lg" />
        <span class="icon-name">{{ name }}</span>
        <span v-if="copiedName === name" class="copied-tip">Copied!</span>
      </div>
    </div>

    <div v-else class="icon-empty">
      <px-icon icon="search" size="2x" />
      <p>No icons found for "{{ search }}"</p>
    </div>
  </div>
</template>

<style scoped>
.icon-collection {
  width: 100%;
}

.icon-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 2px solid var(--px-color-border, #ccc);
  background: var(--px-color-bg, #fff);
  margin-bottom: 16px;
}

.search-icon {
  color: var(--px-color-text-placeholder, #999);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--px-font-family, monospace);
  font-size: 14px;
  color: var(--px-color-text, #333);
}

.search-input::placeholder {
  color: var(--px-color-text-placeholder, #999);
}

.icon-count {
  font-size: 12px;
  color: var(--px-color-text-secondary, #888);
  white-space: nowrap;
  flex-shrink: 0;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 8px;
  max-height: 520px;
  overflow-y: auto;
  padding: 4px;
}

.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 4px 8px;
  border: 2px solid var(--px-color-border-light, #e0e0e0);
  background: var(--px-color-bg, #fff);
  cursor: pointer;
  position: relative;
  transition: border-color 0.15s, background-color 0.15s;
}

.icon-card:hover {
  border-color: var(--px-color-primary, #7287fd);
  background: var(--px-color-primary-light-9, #eef1fe);
}

.icon-card--copied {
  border-color: var(--px-color-success, #40a070);
  background: var(--px-color-success-light-9, #e2f7eb);
}

.icon-name {
  font-size: 10px;
  color: var(--px-color-text-secondary, #888);
  text-align: center;
  word-break: break-all;
  line-height: 1.3;
  max-width: 100%;
}

.copied-tip {
  position: absolute;
  top: 2px;
  right: 4px;
  font-size: 10px;
  color: var(--px-color-success, #40a070);
  font-weight: bold;
}

.icon-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 40px;
  color: var(--px-color-text-placeholder, #999);
}

.icon-empty p {
  margin: 0;
  font-size: 14px;
}
</style>
