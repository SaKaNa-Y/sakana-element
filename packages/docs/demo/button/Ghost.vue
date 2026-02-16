<template>
  <div class="row">
    <px-button ghost>Default</px-button>
    <px-button type="primary" ghost>Primary</px-button>
    <px-button type="success" ghost>Success</px-button>
    <px-button type="info" ghost>Info</px-button>
    <px-button type="warning" ghost>Warning</px-button>
    <px-button type="danger" ghost>Danger</px-button>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.row :deep(.px-button + .px-button) {
  margin-left: 0;
}
</style>
