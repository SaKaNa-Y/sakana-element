<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end">
    <div>
      <p style="margin-bottom: 8px">Original</p>
      <px-pixelate src="/images/pixelate/001.png" :pixel-size="4" :width="260" />
    </div>
    <div>
      <p style="margin-bottom: 8px">Game Boy Palette</p>
      <px-pixelate src="/images/pixelate/001.png" :pixel-size="4" :palette="gameboyPalette" :width="260" />
    </div>
    <div>
      <p style="margin-bottom: 8px">Sunset Palette</p>
      <px-pixelate src="/images/pixelate/001.png" :pixel-size="4" :palette="sunsetPalette" :width="260" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Classic Game Boy green palette
const gameboyPalette = ['#0f380f', '#306230', '#8bac0f', '#9bbc0f'];

// Warm sunset palette
const sunsetPalette = ['#2b0f3e', '#5c2d82', '#c0392b', '#e67e22', '#f1c40f', '#ecf0f1'];
</script>
