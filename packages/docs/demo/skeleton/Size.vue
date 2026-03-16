<template>
  <div class="demo-skeleton">
    <div class="demo-skeleton__item">
      <span class="demo-skeleton__label">large</span>
      <px-skeleton size="large" width="200px" />
    </div>
    <div class="demo-skeleton__item">
      <span class="demo-skeleton__label">default</span>
      <px-skeleton width="200px" />
    </div>
    <div class="demo-skeleton__item">
      <span class="demo-skeleton__label">small</span>
      <px-skeleton size="small" width="200px" />
    </div>
  </div>
</template>

<style scoped>
.demo-skeleton {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-skeleton__item {
  display: flex;
  align-items: center;
  gap: 12px;
}
.demo-skeleton__label {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-family: var(--px-font-family, monospace);
  min-width: 60px;
}
</style>
