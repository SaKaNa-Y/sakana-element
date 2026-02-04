<template>
  <div class="demo-button">
    <div class="row">
      <px-button>Default</px-button>
      <px-button type="primary">Primary</px-button>
      <px-button type="success">Success</px-button>
      <px-button type="info">Info</px-button>
      <px-button type="warning">Warning</px-button>
      <px-button type="danger">Danger</px-button>
    </div>
    <div class="row">
      <px-button disabled>Default</px-button>
      <px-button type="primary" disabled>Primary</px-button>
      <px-button type="success" disabled>Success</px-button>
      <px-button type="info" disabled>Info</px-button>
      <px-button type="warning" disabled>Warning</px-button>
      <px-button type="danger" disabled>Danger</px-button>
    </div>
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.row {
  display: grid;
  grid-template-columns: repeat(6, auto);
  justify-content: start;
  align-items: center;
  gap: 12px;
}
</style>
