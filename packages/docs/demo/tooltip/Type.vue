<template>
  <div class="demo-tooltip">
    <px-tooltip content="Primary" type="primary">
      <px-button type="primary">Primary</px-button>
    </px-tooltip>
    <px-tooltip content="Success" type="success">
      <px-button type="success">Success</px-button>
    </px-tooltip>
    <px-tooltip content="Warning" type="warning">
      <px-button type="warning">Warning</px-button>
    </px-tooltip>
    <px-tooltip content="Danger" type="danger">
      <px-button type="danger">Danger</px-button>
    </px-tooltip>
    <px-tooltip content="Info" type="info">
      <px-button type="info">Info</px-button>
    </px-tooltip>
  </div>
</template>

<style scoped>
.demo-tooltip {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
