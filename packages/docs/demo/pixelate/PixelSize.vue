<template>
  <div>
    <div style="margin-bottom: 12px">
      <label>Pixel Size: {{ pixelSize }}</label>
      <input type="range" v-model.number="pixelSize" min="1" max="32" style="margin-left: 8px" />
    </div>
    <px-pixelate src="/images/pixelate/001.png" :pixel-size="pixelSize" :width="400" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pixelSize = ref(8);
</script>
