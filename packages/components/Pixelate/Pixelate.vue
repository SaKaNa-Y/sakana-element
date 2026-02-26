<script setup lang="ts">
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
  if (props.width != null) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  if (props.height != null) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
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

function hexToRgb(hex: string): number[] {
  const h = hex.replace('#', '');
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ];
}

function normalizePalette(palette: string[] | number[][]): number[][] {
  return palette.map((c) => (typeof c === 'string' ? hexToRgb(c) : c));
}

function findNearestColor(r: number, g: number, b: number, palette: number[][]): number[] {
  let minDist = Infinity;
  let nearest = palette[0];
  for (const color of palette) {
    const dist = (r - color[0]) ** 2 + (g - color[1]) ** 2 + (b - color[2]) ** 2;
    if (dist < minDist) {
      minDist = dist;
      nearest = color;
    }
  }
  return nearest;
}

function pixelate() {
  const canvas = canvasRef.value;
  const img = originRef.value;
  if (!canvas || !img || !imageLoaded.value) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = img.naturalWidth;
  const h = img.naturalHeight;
  canvas.width = w;
  canvas.height = h;

  // Draw background then original image
  ctx.fillStyle = props.background;
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);

  // Read pixel data
  const imageData = ctx.getImageData(0, 0, w, h);
  const data = imageData.data;
  const ps = Math.max(1, Math.round(props.pixelSize));

  const normalizedPalette = props.palette ? normalizePalette(props.palette) : null;

  // Clear for pixelated render
  ctx.fillStyle = props.background;
  ctx.fillRect(0, 0, w, h);

  // Process each pixel block
  for (let y = 0; y < h; y += ps) {
    for (let x = 0; x < w; x += ps) {
      const bw = Math.min(ps, w - x);
      const bh = Math.min(ps, h - y);
      let rSum = 0,
        gSum = 0,
        bSum = 0,
        count = 0;

      for (let by = 0; by < bh; by++) {
        for (let bx = 0; bx < bw; bx++) {
          const idx = ((y + by) * w + (x + bx)) * 4;
          rSum += data[idx];
          gSum += data[idx + 1];
          bSum += data[idx + 2];
          count++;
        }
      }

      let r = Math.round(rSum / count);
      let g = Math.round(gSum / count);
      let b = Math.round(bSum / count);

      // Grayscale transform (ITU-R BT.601 luma)
      if (props.grayscale) {
        const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
        r = g = b = gray;
      }

      // Palette mapping (Euclidean distance in RGB space)
      if (normalizedPalette) {
        [r, g, b] = findNearestColor(r, g, b, normalizedPalette);
      }

      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x, y, bw, bh);
    }
  }

  emit('rendered');
}

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
  return {
    width: canvas?.width ?? 0,
    height: canvas?.height ?? 0,
  };
}

function getImageData(): ImageData | null {
  const canvas = canvasRef.value;
  if (!canvas || !imageLoaded.value) return null;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}

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
