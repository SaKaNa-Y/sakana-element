<template>
  <div class="demo-tooltip">
    <px-tooltip ref="tooltipRef" content="Manual control" :manual="true">
      <px-button>Manual Tooltip</px-button>
    </px-tooltip>
    <px-button @click="tooltipRef?.show()">Show</px-button>
    <px-button @click="tooltipRef?.hide()">Hide</px-button>
    <px-button @click="tooltipRef?.toggle()">Toggle</px-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tooltipRef = ref();
</script>

<style scoped>
.demo-tooltip {
  display: flex;
  gap: 12px;
}
</style>
