<template>
  <px-carousel height="200px" direction="vertical">
    <px-carousel-item v-for="i in 4" :key="i">
      <div
        :style="{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          background: `var(--px-color-warning-light-${i + 5})`,
          color: 'var(--px-text-color-primary)',
        }"
      >
        Slide {{ i }}
      </div>
    </px-carousel-item>
  </px-carousel>
</template>
