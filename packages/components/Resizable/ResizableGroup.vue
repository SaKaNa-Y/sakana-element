<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  shallowRef,
  triggerRef,
} from 'vue';
import { RESIZABLE_GROUP_CTX_KEY } from './constants';
import type {
  PanelData,
  ResizableGroupContext,
  ResizableGroupEmits,
  ResizableGroupProps,
} from './types';

defineOptions({
  name: 'PxResizableGroup',
});

const props = withDefaults(defineProps<ResizableGroupProps>(), {
  keyboardResizeBy: 10,
});

const emit = defineEmits<ResizableGroupEmits>();

const groupRef = ref<HTMLDivElement>();

// Panel registry: ordered array of panel data
const panels = reactive<PanelData[]>([]);
const panelSizes = shallowRef<Map<number, number>>(new Map());

// Handle registry: ordered array of handle IDs
const handles = reactive<number[]>([]);

let panelIdCounter = 0;
let handleIdCounter = 0;

function getNextHandleId(): number {
  return handleIdCounter++;
}

// --- Panel registration ---
function registerPanel(data: PanelData) {
  // Assign auto-incrementing ID
  data.id = panelIdCounter++;
  panels.push(data);
}

// Distribute sizes after all child panels have registered
// (Vue fires child onMounted before parent onMounted)
onMounted(() => {
  distributeInitialSizes();
});

function unregisterPanel(id: number) {
  const idx = panels.findIndex((p) => p.id === id);
  if (idx > -1) panels.splice(idx, 1);
  panelSizes.value.delete(id);
  triggerRef(panelSizes);
}

// --- Handle registration ---
function registerHandle(id: number) {
  handles.push(id);
}

function unregisterHandle(id: number) {
  const idx = handles.indexOf(id);
  if (idx > -1) handles.splice(idx, 1);
}

// --- Size distribution ---
function distributeInitialSizes() {
  // Try to restore from localStorage first
  if (props.autoSaveId) {
    try {
      const saved = localStorage.getItem(`px-resizable-${props.autoSaveId}`);
      if (saved) {
        const sizes = JSON.parse(saved) as number[];
        if (sizes.length === panels.length) {
          const newMap = new Map<number, number>();
          panels.forEach((p, i) => {
            newMap.set(p.id, sizes[i]);
          });
          panelSizes.value = newMap;
          return;
        }
      }
    } catch {
      // Ignore parse errors
    }
  }

  const newMap = new Map<number, number>();
  let usedSize = 0;
  let panelsWithoutDefault = 0;

  for (const panel of panels) {
    if (panel.defaultSize != null) {
      newMap.set(panel.id, panel.defaultSize);
      usedSize += panel.defaultSize;
    } else {
      panelsWithoutDefault++;
    }
  }

  const remaining = 100 - usedSize;
  const equalShare = panelsWithoutDefault > 0 ? remaining / panelsWithoutDefault : 0;

  for (const panel of panels) {
    if (panel.defaultSize == null) {
      newMap.set(panel.id, equalShare);
    }
  }

  panelSizes.value = newMap;
}

// --- Helpers ---
function clampSize(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/** Resize two adjacent panels, clamping both, and update the sizes map in-place. */
function resizeAdjacentPanels(
  panelBefore: PanelData,
  panelAfter: PanelData,
  newBeforeSize: number,
) {
  const totalBoth =
    (panelSizes.value.get(panelBefore.id) ?? 0) + (panelSizes.value.get(panelAfter.id) ?? 0);

  newBeforeSize = clampSize(newBeforeSize, panelBefore.minSize, panelBefore.maxSize);
  let newAfterSize = totalBoth - newBeforeSize;
  newAfterSize = clampSize(newAfterSize, panelAfter.minSize, panelAfter.maxSize);
  // Re-adjust before size if after was clamped
  newBeforeSize = totalBoth - newAfterSize;

  panelSizes.value.set(panelBefore.id, newBeforeSize);
  panelSizes.value.set(panelAfter.id, newAfterSize);
  triggerRef(panelSizes);
}

// --- Getters/setters ---
function getPanelSize(id: number): number {
  return panelSizes.value.get(id) ?? 0;
}

function setPanelSize(id: number, size: number, force = false) {
  const panel = panels.find((p) => p.id === id);
  if (!panel) return;

  const clamped = force ? size : clampSize(size, panel.minSize, panel.maxSize);
  const oldSize = panelSizes.value.get(id) ?? 0;
  const delta = clamped - oldSize;

  if (delta === 0) return;

  // Find an adjacent panel to absorb the delta (try next first, then previous)
  const idx = panels.indexOf(panel);
  const adjacent = panels[idx + 1] ?? panels[idx - 1];

  if (!adjacent) return;

  const adjacentSize = panelSizes.value.get(adjacent.id) ?? 0;
  const newAdjacentSize = adjacentSize - delta;

  if (!force && (newAdjacentSize < adjacent.minSize || newAdjacentSize > adjacent.maxSize)) return;

  panelSizes.value.set(id, clamped);
  panelSizes.value.set(adjacent.id, newAdjacentSize);
  triggerRef(panelSizes);

  emitLayout();
}

// --- Resize logic ---
let cachedRect: DOMRect | null = null;
let resizeHandleIndex = -1;
let dragEndCallback: (() => void) | null = null;

function startResize(handleId: number, event: MouseEvent | TouchEvent, onDragEnd?: () => void) {
  const handleIdx = handles.indexOf(handleId);
  if (handleIdx < 0) return;

  resizeHandleIndex = handleIdx;
  cachedRect = groupRef.value?.getBoundingClientRect() ?? null;
  dragEndCallback = onDragEnd ?? null;

  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);
}

function onPointerMove(e: MouseEvent | TouchEvent) {
  if (resizeHandleIndex < 0 || !cachedRect) return;

  const clientPos = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
  const clientPosY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

  const isHorizontal = props.direction === 'horizontal';
  const pos = isHorizontal ? clientPos : clientPosY;
  const start = isHorizontal ? cachedRect.left : cachedRect.top;
  const total = isHorizontal ? cachedRect.width : cachedRect.height;

  if (total === 0) return;

  // Calculate the new position as a percentage
  const posPercent = ((pos - start) / total) * 100;

  // The handle at index N separates panel N from panel N+1
  const panelBefore = panels[resizeHandleIndex];
  const panelAfter = panels[resizeHandleIndex + 1];

  if (!panelBefore || !panelAfter) return;

  // Sum of sizes before the left panel
  let sizeBeforePanelBefore = 0;
  for (let i = 0; i < resizeHandleIndex; i++) {
    sizeBeforePanelBefore += panelSizes.value.get(panels[i].id) ?? 0;
  }

  // The new size of the "before" panel
  const newBeforeSize = posPercent - sizeBeforePanelBefore;

  resizeAdjacentPanels(panelBefore, panelAfter, newBeforeSize);
  emitLayout();
}

function onPointerUp() {
  resizeHandleIndex = -1;
  cachedRect = null;

  window.removeEventListener('mousemove', onPointerMove);
  window.removeEventListener('mouseup', onPointerUp);
  window.removeEventListener('touchmove', onPointerMove);
  window.removeEventListener('touchend', onPointerUp);

  // Persist to localStorage only when drag ends
  persistLayout();

  // Notify the handle that drag has ended
  if (dragEndCallback) {
    dragEndCallback();
    dragEndCallback = null;
  }
}

// --- Keyboard resize ---
function keyboardResize(handleId: number, delta: number) {
  const handleIdx = handles.indexOf(handleId);
  if (handleIdx < 0) return;

  const panelBefore = panels[handleIdx];
  const panelAfter = panels[handleIdx + 1];

  if (!panelBefore || !panelAfter) return;

  const beforeSize = panelSizes.value.get(panelBefore.id) ?? 0;
  resizeAdjacentPanels(panelBefore, panelAfter, beforeSize + delta);

  emitLayout();
  persistLayout();
}

// --- Layout events & persistence ---
function emitLayout() {
  const sizes = panels.map((p) => panelSizes.value.get(p.id) ?? 0);
  emit('layout', sizes);
}

function persistLayout() {
  if (!props.autoSaveId) return;
  try {
    const sizes = panels.map((p) => panelSizes.value.get(p.id) ?? 0);
    localStorage.setItem(`px-resizable-${props.autoSaveId}`, JSON.stringify(sizes));
  } catch {
    // Ignore quota errors
  }
}

// Cleanup listeners on unmount
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onPointerMove);
  window.removeEventListener('mouseup', onPointerUp);
  window.removeEventListener('touchmove', onPointerMove);
  window.removeEventListener('touchend', onPointerUp);
});

// --- Provide context ---
const direction = computed(() => props.direction);

const keyboardResizeByRef = computed(() => props.keyboardResizeBy);

provide(RESIZABLE_GROUP_CTX_KEY, {
  direction,
  keyboardResizeBy: keyboardResizeByRef,
  registerPanel,
  unregisterPanel,
  getPanelSize,
  setPanelSize,
  startResize,
  keyboardResize,
  getNextHandleId,
  registerHandle,
  unregisterHandle,
  panelSizes,
});
</script>

<template>
  <div
    ref="groupRef"
    class="px-resizable-group"
    :class="{
      'is-horizontal': direction === 'horizontal',
      'is-vertical': direction === 'vertical',
    }"
  >
    <slot />
  </div>
</template>

<style>
@import './style.css';
</style>
