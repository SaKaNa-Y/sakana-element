<template>
  <div>
    <div style="margin-bottom: 12px; display: flex; gap: 8px; flex-wrap: wrap">
      <px-button type="primary" @click="reRender">Re-render</px-button>
      <px-button @click="showSize">Get Size</px-button>
      <px-button @click="showImageData">Get ImageData</px-button>
    </div>
    <p v-if="info" style="margin-bottom: 8px; font-family: monospace">{{ info }}</p>
    <px-pixelate ref="pixelateRef" src="/images/pixelate/001.png" :pixel-size="pixelSize" :width="400" />
  </div>
</template>

<script setup lang="ts">
import type { PixelateInstance } from 'sakana-element';
import { ref } from 'vue';

const pixelateRef = ref<PixelateInstance>();
const info = ref('');
const pixelSize = ref(8);

function reRender() {
  pixelSize.value = Math.max(1, Math.floor(Math.random() * 16) + 1);
  info.value = `Re-rendered with pixelSize = ${pixelSize.value}`;
}

function showSize() {
  const size = pixelateRef.value?.getSize();
  info.value = size ? `Canvas size: ${size.width} × ${size.height}` : 'Not rendered yet';
}

function showImageData() {
  const data = pixelateRef.value?.getImageData();
  info.value = data
    ? `ImageData: ${data.width} × ${data.height} (${data.data.length} bytes)`
    : 'No ImageData available';
}
</script>
