<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import { RESIZABLE_GROUP_CTX_KEY } from './constants';
import type { ResizableHandleEmits, ResizableHandleProps } from './types';

defineOptions({
  name: 'PxResizableHandle',
});

const props = withDefaults(defineProps<ResizableHandleProps>(), {
  disabled: false,
  hitAreaMargins: 0,
});

const emit = defineEmits<ResizableHandleEmits>();

const ctx = inject(RESIZABLE_GROUP_CTX_KEY)!;
if (!ctx) {
  throw new Error('PxResizableHandle must be used inside PxResizableGroup');
}

let handleId = -1;
const isDragging = ref(false);

onMounted(() => {
  handleId = ctx.getNextHandleId();
  ctx.registerHandle(handleId);
});

onBeforeUnmount(() => {
  ctx.unregisterHandle(handleId);
});

const isVertical = computed(() => ctx.direction.value === 'vertical');

function onPointerDown() {
  if (props.disabled) return;
  isDragging.value = true;
  emit('dragging', true);

  // Pass a callback so the Group notifies us when drag ends,
  // avoiding duplicate window event listeners
  ctx.startResize(handleId, () => {
    isDragging.value = false;
    emit('dragging', false);
  });
}

function onKeyDown(e: KeyboardEvent) {
  if (props.disabled) return;

  const step =
    ctx.direction.value === 'horizontal'
      ? e.key === 'ArrowRight'
        ? 1
        : e.key === 'ArrowLeft'
          ? -1
          : 0
      : e.key === 'ArrowDown'
        ? 1
        : e.key === 'ArrowUp'
          ? -1
          : 0;

  if (step === 0) return;

  e.preventDefault();
  ctx.keyboardResize(handleId, step * ctx.keyboardResizeBy.value);
}

const hitAreaStyle = computed(() => {
  if (!props.hitAreaMargins) return {};
  // Applied as a CSS variable for the ::before pseudo-element
  return { '--px-handle-hit-area': `${props.hitAreaMargins}px` } as Record<string, string>;
});
</script>

<template>
  <div
    class="px-resizable-handle"
    :class="{
      'is-disabled': props.disabled,
      'is-vertical': isVertical,
      'is-dragging': isDragging,
      'has-hit-area': !!props.hitAreaMargins,
    }"
    :style="hitAreaStyle"
    role="separator"
    tabindex="0"
    @mousedown="onPointerDown"
    @touchstart.passive="onPointerDown"
    @keydown="onKeyDown"
  />
</template>
