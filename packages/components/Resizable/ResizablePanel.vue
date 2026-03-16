<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { RESIZABLE_GROUP_CTX_KEY } from './constants';
import type {
  PanelData,
  ResizablePanelEmits,
  ResizablePanelInstance,
  ResizablePanelProps,
} from './types';

defineOptions({
  name: 'PxResizablePanel',
});

const props = withDefaults(defineProps<ResizablePanelProps>(), {
  minSize: 10,
  maxSize: 100,
  collapsible: false,
  collapsedSize: 0,
});

const emit = defineEmits<ResizablePanelEmits>();

const ctx = inject(RESIZABLE_GROUP_CTX_KEY);
if (!ctx) {
  throw new Error('PxResizablePanel must be used inside PxResizableGroup');
}

const panelId = ref(-1);
const isCollapsed = ref(false);
let sizeBeforeCollapse = 0;

const panelData: PanelData = {
  id: 0, // Will be assigned by group
  minSize: props.minSize,
  maxSize: props.maxSize,
  collapsible: props.collapsible,
  collapsedSize: props.collapsedSize,
  defaultSize: props.defaultSize,
};

// Keep panelData in sync when props change reactively
watch(
  () => [props.minSize, props.maxSize, props.collapsible, props.collapsedSize] as const,
  ([minSize, maxSize, collapsible, collapsedSize]) => {
    panelData.minSize = minSize;
    panelData.maxSize = maxSize;
    panelData.collapsible = collapsible;
    panelData.collapsedSize = collapsedSize;
  },
);

onMounted(() => {
  ctx.registerPanel(panelData);
  panelId.value = panelData.id;
});

onBeforeUnmount(() => {
  ctx.unregisterPanel(panelId.value);
});

const currentSize = computed(() => {
  return ctx.panelSizes.value.get(panelId.value) ?? 0;
});

// Watch for size changes and emit resize event
watch(currentSize, (newSize, oldSize) => {
  if (oldSize !== undefined && newSize !== oldSize) {
    emit('resize', newSize);
  }
});

const panelStyle = computed(() => ({
  flexBasis: `${currentSize.value}%`,
  flexGrow: 0,
  flexShrink: 0,
}));

// --- Exposed methods ---
function collapse() {
  if (!props.collapsible || isCollapsed.value) return;
  sizeBeforeCollapse = currentSize.value;
  isCollapsed.value = true;
  ctx.setPanelSize(panelId.value, props.collapsedSize, true);
  emit('collapse');
}

function expand() {
  if (!isCollapsed.value) return;
  isCollapsed.value = false;
  ctx.setPanelSize(panelId.value, sizeBeforeCollapse, true);
  emit('expand');
}

function getSize(): number {
  return currentSize.value;
}

function resize(size: number) {
  ctx.setPanelSize(panelId.value, size);
}

defineExpose<ResizablePanelInstance>({
  collapse,
  expand,
  getSize,
  resize,
});
</script>

<template>
  <div
    class="px-resizable-panel"
    :class="{ 'is-collapsed': isCollapsed }"
    :style="panelStyle"
  >
    <slot />
  </div>
</template>
