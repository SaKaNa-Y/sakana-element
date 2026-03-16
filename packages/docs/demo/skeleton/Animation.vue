<template>
  <div class="demo-skeleton">
    <div>
      <p class="demo-skeleton__label">shimmer (default)</p>
      <px-skeleton animation="shimmer" width="200px" />
    </div>
    <div>
      <p class="demo-skeleton__label">pulse</p>
      <px-skeleton animation="pulse" width="200px" />
    </div>
    <div>
      <p class="demo-skeleton__label">dither</p>
      <px-skeleton animation="dither" width="200px" />
    </div>
    <div>
      <p class="demo-skeleton__label">static</p>
      <px-skeleton :animated="false" width="200px" />
    </div>
  </div>
</template>

<style scoped>
.demo-skeleton {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
.demo-skeleton__label {
  margin-bottom: 8px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-family: var(--px-font-family, monospace);
}
</style>
