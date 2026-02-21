<template>
  <div class="row">
    <px-button link>Default</px-button>
    <px-button type="primary" link>Primary</px-button>
    <px-button type="success" link>Success</px-button>
    <px-button type="info" link>Info</px-button>
    <px-button type="warning" link>Warning</px-button>
    <px-button type="danger" link>Danger</px-button>
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
