<script setup>
import { ref } from 'vue';

const carouselRef = ref();
const current = ref(0);
</script>

<template>
  <div style="margin-bottom: 12px; display: flex; gap: 8px">
    <px-button @click="carouselRef?.prev()">Prev</px-button>
    <px-button @click="carouselRef?.next()">Next</px-button>
    <px-button @click="carouselRef?.goTo(0)">Go to 1</px-button>
    <px-button @click="carouselRef?.goTo(2)">Go to 3</px-button>
    <span style="line-height: 32px; margin-left: 8px">Current: {{ current }}</span>
  </div>
  <px-carousel ref="carouselRef" v-model="current" height="200px" show-arrow="always">
    <px-carousel-item v-for="i in 4" :key="i">
      <div
        :style="{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          background: `var(--px-color-info-light-${i + 5})`,
          color: 'var(--px-text-color-primary)',
        }"
      >
        Slide {{ i }}
      </div>
    </px-carousel-item>
  </px-carousel>
</template>
