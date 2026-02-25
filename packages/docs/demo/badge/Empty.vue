<template>
  <div class="demo-badge-group">
    <div class="demo-badge">
      <px-badge type="primary" />
      <px-badge type="success" />
      <px-badge type="info" />
      <px-badge type="warning" />
      <px-badge type="danger" />
    </div>
    <div class="demo-badge">
      <px-badge type="primary" size="large" />
      <px-badge type="primary" />
      <px-badge type="primary" size="small" />
    </div>
  </div>
</template>

<style scoped>
.demo-badge-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-badge {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
