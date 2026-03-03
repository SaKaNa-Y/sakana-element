<template>
  <div class="demo-tooltip">
    <div ref="triggerRef" class="virtual-trigger">
      Virtual Trigger Element
    </div>
    <px-tooltip
      content="I'm triggered by the element above"
      :virtual-triggering="true"
      :virtual-ref="triggerRef"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const triggerRef = ref();
</script>

<style scoped>
.demo-tooltip {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.virtual-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 2px dashed var(--px-border-color);
  cursor: pointer;
  font-family: var(--px-font-family);
}
</style>
