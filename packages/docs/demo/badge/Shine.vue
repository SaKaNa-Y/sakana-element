<template>
  <div class="demo-badge-group">
    <div class="demo-badge">
      <px-badge type="primary" shine>Primary</px-badge>
      <px-badge type="success" shine>Success</px-badge>
      <px-badge type="info" shine>Info</px-badge>
      <px-badge type="warning" shine>Warning</px-badge>
      <px-badge type="danger" shine>Danger</px-badge>
    </div>
    <div class="demo-badge">
      <px-badge type="primary" shine size="large">Large</px-badge>
      <px-badge type="primary" shine>Default</px-badge>
      <px-badge type="primary" shine size="small">Small</px-badge>
    </div>
    <div class="demo-badge">
      <px-badge type="success" shine outline>Outline</px-badge>
      <px-badge type="warning" shine dash>Dash</px-badge>
      <px-badge type="danger" shine round>Round</px-badge>
      <px-badge color="#8b5cf6" shine>Custom</px-badge>
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
