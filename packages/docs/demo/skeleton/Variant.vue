<template>
  <div class="demo-skeleton">
    <div class="demo-skeleton__item">
      <span class="demo-skeleton__label">rectangular</span>
      <px-skeleton variant="rectangular" width="120px" height="80px" />
    </div>
    <div class="demo-skeleton__item">
      <span class="demo-skeleton__label">circular</span>
      <px-skeleton variant="circular" />
    </div>
    <div class="demo-skeleton__item">
      <span class="demo-skeleton__label">rounded</span>
      <px-skeleton variant="rounded" width="120px" height="80px" />
    </div>
    <div class="demo-skeleton__item">
      <span class="demo-skeleton__label">text</span>
      <px-skeleton variant="text" width="200px" />
    </div>
  </div>
</template>

<style scoped>
.demo-skeleton {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 24px;
}
.demo-skeleton__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.demo-skeleton__label {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-family: var(--px-font-family, monospace);
}
</style>
