<script setup lang="ts">
import { ref } from 'vue';

const panelRef = ref();

function toggleCollapse() {
  if (!panelRef.value) return;
  if (panelRef.value.getSize() <= 5) {
    panelRef.value.expand();
  } else {
    panelRef.value.collapse();
  }
}
</script>

<template>
  <px-button @click="toggleCollapse" style="margin-bottom: 12px">
    Toggle Sidebar
  </px-button>
  <div class="demo-resizable">
    <px-resizable-group direction="horizontal">
      <px-resizable-panel
        ref="panelRef"
        :default-size="30"
        collapsible
        :collapsed-size="0"
      >
        <div class="demo-panel">Sidebar</div>
      </px-resizable-panel>
      <px-resizable-handle />
      <px-resizable-panel :default-size="70">
        <div class="demo-panel">Content</div>
      </px-resizable-panel>
    </px-resizable-group>
  </div>
</template>

<style scoped>
.demo-resizable {
  height: 200px;
  border: 2px solid var(--px-border-color);
}
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: var(--px-font-family);
}
</style>
