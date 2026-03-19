<script setup>
import { ref } from 'vue';

const trigger = ref('click');
</script>

<template>
  <div style="margin-bottom: 12px">
    <label>
      <input type="radio" value="click" v-model="trigger" /> Click
    </label>
    <label style="margin-left: 12px">
      <input type="radio" value="hover" v-model="trigger" /> Hover
    </label>
  </div>
  <px-carousel height="200px" :indicator-trigger="trigger">
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
