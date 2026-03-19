<script setup>
import { ref } from 'vue';

const color = ref('primary');
const colors = ['primary', 'success', 'warning', 'danger', 'info'];
</script>

<template>
  <div style="margin-bottom: 12px; display: flex; gap: 8px">
    <px-button
      v-for="c in colors"
      :key="c"
      :type="c"
      :plain="color !== c"
      size="small"
      @click="color = c"
    >
      {{ c }}
    </px-button>
  </div>
  <px-carousel height="200px" :color="color">
    <px-carousel-item v-for="i in 4" :key="i">
      <div
        :style="{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          background: `var(--px-fill-color-light)`,
          color: 'var(--px-text-color-primary)',
        }"
      >
        Slide {{ i }}
      </div>
    </px-carousel-item>
  </px-carousel>
</template>
