<script setup>
import { ref } from 'vue';

const showArrow = ref('hover');
</script>

<template>
  <div style="margin-bottom: 12px">
    <label>
      <input type="radio" value="always" v-model="showArrow" /> Always
    </label>
    <label style="margin-left: 12px">
      <input type="radio" value="hover" v-model="showArrow" /> Hover
    </label>
    <label style="margin-left: 12px">
      <input type="radio" value="never" v-model="showArrow" /> Never
    </label>
  </div>
  <px-carousel height="200px" :show-arrow="showArrow">
    <px-carousel-item v-for="i in 3" :key="i">
      <div
        :style="{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          background: `var(--px-color-danger-light-${i + 5})`,
          color: 'var(--px-text-color-primary)',
        }"
      >
        Slide {{ i }}
      </div>
    </px-carousel-item>
  </px-carousel>
</template>
