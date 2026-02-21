<template>
  <div class="row">
    <px-button responsive>Responsive</px-button>
    <px-button type="primary" responsive>Primary</px-button>
    <px-button type="success" responsive>Success</px-button>
  </div>
  <p class="hint">↔ Resize your browser window to see the button adapt.</p>
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
.hint {
  margin-top: 12px;
  font-size: 12px;
  color: var(--px-text-color-secondary);
}
</style>
