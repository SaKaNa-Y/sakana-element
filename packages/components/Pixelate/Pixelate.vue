<script setup lang="ts">
import { addUnit, pixelateCanvas } from '@sakana-element/utils';
import { computed, ref, watch } from 'vue';
import { DEFAULT_BACKGROUND, DEFAULT_PIXEL_SIZE } from './constants';
import type { PixelateEmits, PixelateProps } from './types';

defineOptions({
  name: 'PxPixelate',
});

const props = withDefaults(defineProps<PixelateProps>(), {
  pixelSize: DEFAULT_PIXEL_SIZE,
  grayscale: false,
  background: DEFAULT_BACKGROUND,
});

const emit = defineEmits<PixelateEmits>();

const canvasRef = ref<HTMLCanvasElement>();
const originRef = ref<HTMLImageElement>();
const imageLoaded = ref(false);

const containerStyle = computed(() => {
  const style: Record<string, string> = {};
  if (props.width != null) style.width = addUnit(props.width) ?? '';
  if (props.height != null) style.height = addUnit(props.height) ?? '';
  return style;
});

const canvasStyle = computed(() => {
  const style: Record<string, string> = {
    'image-rendering': 'pixelated',
  };
  if (props.width != null) style.width = '100%';
  if (props.height != null) style.height = '100%';
  return style;
});

function pixelate() {
  const canvas = canvasRef.value;
  const img = originRef.value;
  /* v8 ignore start -- image onload never fires in browser-mode Vitest */
  if (!canvas || !img || !imageLoaded.value) return;

  pixelateCanvas(canvas, img, {
    pixelSize: props.pixelSize,
    grayscale: props.grayscale,
    palette: props.palette,
    background: props.background,
  });

  emit('rendered');
}
/* v8 ignore stop */

function onImageLoad() {
  imageLoaded.value = true;
  pixelate();
}

function onImageError(e: Event) {
  emit('error', e);
}

// Re-pixelate when visual props change (image already loaded)
watch(
  () => [props.pixelSize, props.grayscale, props.palette, props.background],
  /* v8 ignore next */
  () => {
    if (imageLoaded.value) pixelate();
  },
);

// Reload when src changes
watch(
  () => props.src,
  () => {
    imageLoaded.value = false;
  },
);

function render() {
  pixelate();
}

function getSize(): { width: number; height: number } {
  const canvas = canvasRef.value;
  /* v8 ignore start -- optional chaining branch artifact */
  return {
    width: canvas?.width ?? 0,
    height: canvas?.height ?? 0,
  };
  /* v8 ignore stop */
}

/* v8 ignore start -- depends on image load */
function getImageData(): ImageData | null {
  const canvas = canvasRef.value;
  if (!canvas || !imageLoaded.value) return null;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
/* v8 ignore stop */

defineExpose({
  render,
  canvasRef,
  originRef,
  getSize,
  getImageData,
});
</script>

<template>
  <div class="px-pixelate" :style="containerStyle">
    <canvas ref="canvasRef" :style="canvasStyle" />
    <img
      ref="originRef"
      :src="src"
      style="display: none"
      crossorigin="anonymous"
      @load="onImageLoad"
      @error="onImageError"
    />
  </div>
</template>
