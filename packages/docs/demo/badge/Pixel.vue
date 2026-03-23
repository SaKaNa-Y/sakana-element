<template>
  <div class="demo-badge-group">
    <div class="demo-badge">
      <px-badge type="primary" pixel>Primary</px-badge>
      <px-badge type="success" pixel>Success</px-badge>
      <px-badge type="info" pixel>Info</px-badge>
      <px-badge type="warning" pixel>Warning</px-badge>
      <px-badge type="danger" pixel>Danger</px-badge>
    </div>
    <div class="demo-badge">
      <px-badge type="primary" pixel size="large">Large</px-badge>
      <px-badge type="primary" pixel>Default</px-badge>
      <px-badge type="primary" pixel size="small">Small</px-badge>
    </div>
    <div class="demo-badge">
      <px-badge type="success" pixel outline>Outline</px-badge>
      <px-badge type="warning" pixel dash>Dash</px-badge>
      <px-badge type="danger" pixel round>Round</px-badge>
      <px-badge color="#8b5cf6" pixel>Custom</px-badge>
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
