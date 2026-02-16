<template>
  <div class="row">
    <px-button dash>Default</px-button>
    <px-button type="primary" dash>Primary</px-button>
    <px-button type="success" dash>Success</px-button>
    <px-button type="info" dash>Info</px-button>
    <px-button type="warning" dash>Warning</px-button>
    <px-button type="danger" dash>Danger</px-button>
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
