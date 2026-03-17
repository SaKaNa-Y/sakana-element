<script setup lang="ts">
import { addUnit, clamp, pixelateCanvas } from '@sakana-element/utils';
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import {
  DEFAULT_DIFF_BACKGROUND,
  DEFAULT_DIFF_PIXEL_SIZE,
  DEFAULT_POSITION,
  PRESET_DIFF_COLORS,
} from './constants';
import type { DiffEmits, DiffProps } from './types';

defineOptions({
  name: 'PxDiff',
});

const props = withDefaults(defineProps<DiffProps>(), {
  pixelSize: DEFAULT_DIFF_PIXEL_SIZE,
  grayscale: false,
  background: DEFAULT_DIFF_BACKGROUND,
  initialPosition: DEFAULT_POSITION,
});

const emit = defineEmits<DiffEmits>();

const containerRef = ref<HTMLDivElement>();
const canvasRef = ref<HTMLCanvasElement>();
const originRef = ref<HTMLImageElement>();
const imageLoaded = ref(false);
const isDragging = ref(false);

const position = ref(clamp(props.initialPosition, 0, 100));

const containerStyle = computed(() => {
  const style: Record<string, string> = {};
  /* v8 ignore start */
  if (props.width != null) style.width = addUnit(props.width) ?? '';
  if (props.height != null) style.height = addUnit(props.height) ?? '';
  /* v8 ignore stop */
  return style;
});

const containerClasses = computed(() => {
  const cls: string[] = ['px-diff'];
  if (props.color && PRESET_DIFF_COLORS.has(props.color)) {
    cls.push(`px-diff--${props.color}`);
  }
  return cls;
});

const beforeClipStyle = computed(() => ({
  clipPath: `inset(0 ${100 - position.value}% 0 0)`,
}));

const handleStyle = computed(() => ({
  left: `${position.value}%`,
}));

// --- Pixelation rendering ---
/* v8 ignore start -- canvas rendering not testable in jsdom */
function renderPixelation() {
  const canvas = canvasRef.value;
  const img = originRef.value;
  if (!canvas || !img || !imageLoaded.value) return;

  pixelateCanvas(canvas, img, {
    pixelSize: props.pixelSize,
    grayscale: props.grayscale,
    palette: props.palette,
    background: props.background,
  });

  emit('rendered');
  /* v8 ignore stop */
}

function onImageLoad() {
  imageLoaded.value = true;
  renderPixelation();
}

function onImageError(e: Event) {
  emit('error', e);
}

// Re-render when visual props change
watch(
  () => [props.pixelSize, props.grayscale, props.palette, props.background],
  /* v8 ignore start */
  () => {
    if (imageLoaded.value) renderPixelation();
  },
  /* v8 ignore stop */
);

// Reload when src changes
watch(
  () => props.src,
  () => {
    imageLoaded.value = false;
  },
);

// --- Pointer interaction ---
let cachedRect: DOMRect | null = null;

/* v8 ignore start -- pointer interaction branch artifacts (??, ?., ternary) */
function updatePosition(clientX: number) {
  const rect = cachedRect ?? containerRef.value?.getBoundingClientRect();
  if (!rect) return;
  const x = clientX - rect.left;
  const pct = clamp((x / rect.width) * 100, 0, 100);
  position.value = Math.round(pct);
  emit('change', position.value);
}

function onPointerDown(e: MouseEvent | TouchEvent) {
  isDragging.value = true;
  cachedRect = containerRef.value?.getBoundingClientRect() ?? null;
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
  updatePosition(clientX);

  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);
  window.addEventListener('touchmove', onPointerMove);
  window.addEventListener('touchend', onPointerUp);
}

function onPointerMove(e: MouseEvent | TouchEvent) {
  if (!isDragging.value) return;
  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
  updatePosition(clientX);
}
/* v8 ignore stop */

function onPointerUp() {
  isDragging.value = false;
  cachedRect = null;
  window.removeEventListener('mousemove', onPointerMove);
  window.removeEventListener('mouseup', onPointerUp);
  window.removeEventListener('touchmove', onPointerMove);
  window.removeEventListener('touchend', onPointerUp);
}

// --- Keyboard interaction ---
function onKeyDown(e: KeyboardEvent) {
  const step = e.shiftKey ? 10 : 1;
  let newPos = position.value;

  if (e.key === 'ArrowLeft') {
    newPos = clamp(position.value - step, 0, 100);
    e.preventDefault();
  } else if (e.key === 'ArrowRight') {
    newPos = clamp(position.value + step, 0, 100);
    e.preventDefault();
  } else {
    return;
  }

  position.value = newPos;
  emit('change', newPos);
}

// --- Exposed methods ---
function setPosition(pos: number) {
  position.value = clamp(pos, 0, 100);
}

function getPosition(): number {
  return position.value;
}

defineExpose({
  setPosition,
  getPosition,
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onPointerMove);
  window.removeEventListener('mouseup', onPointerUp);
  window.removeEventListener('touchmove', onPointerMove);
  window.removeEventListener('touchend', onPointerUp);
});
</script>

<template>
  <div
    ref="containerRef"
    :class="containerClasses"
    :style="containerStyle"
  >
    <!-- Before panel (original / left slot) -->
    <div class="px-diff__before" :style="beforeClipStyle">
      <slot name="before">
        <img v-if="src" :src="src" class="px-diff__img" />
      </slot>
    </div>

    <!-- After panel (pixelated / right slot) -->
    <div class="px-diff__after">
      <slot name="after">
        <template v-if="src">
          <canvas ref="canvasRef" class="px-diff__canvas" />
          <img
            ref="originRef"
            :src="src"
            style="display: none"
            crossorigin="anonymous"
            @load="onImageLoad"
            @error="onImageError"
          />
        </template>
      </slot>
    </div>

    <!-- Handle / divider -->
    <div
      class="px-diff__handle"
      :style="handleStyle"
      role="separator"
      tabindex="0"
      :aria-valuenow="position"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Comparison slider"
      @keydown="onKeyDown"
    >
      <div
        class="px-diff__handle-grip"
        @mousedown.prevent="onPointerDown"
        @touchstart.prevent="onPointerDown"
      />
    </div>
  </div>
</template>

<style>
@import './style.css';
</style>
