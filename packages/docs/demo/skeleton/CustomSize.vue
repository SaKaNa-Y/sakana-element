<template>
  <div class="demo-skeleton">
    <px-skeleton :width="250" :height="40" />
    <px-skeleton width="80%" height="3rem" />
    <px-skeleton variant="circular" :width="64" :height="64" />
  </div>
</template>

<style scoped>
.demo-skeleton {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}
</style>
