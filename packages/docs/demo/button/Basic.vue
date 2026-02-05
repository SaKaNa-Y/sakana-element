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
      <px-button plain>Plain</px-button>
      <px-button type="primary" plain>Primary</px-button>
      <px-button type="success" plain>Success</px-button>
      <px-button type="info" plain>Info</px-button>
      <px-button type="warning" plain>Warning</px-button>
      <px-button type="danger" plain>Danger</px-button>
    </div>
    <div class="row">
      <px-button round>Round</px-button>
      <px-button type="primary" round>Primary</px-button>
      <px-button type="success" round>Success</px-button>
      <px-button type="info" round>Info</px-button>
      <px-button type="warning" round>Warning</px-button>
      <px-button type="danger" round>Danger</px-button>
    </div>
    <div class="row">
      <px-button icon="search" circle />
      <px-button type="primary" icon="edit" circle />
      <px-button type="success" icon="check" circle />
      <px-button type="info" icon="message" circle />
      <px-button type="warning" icon="alert" circle />
      <px-button type="danger" icon="trash" circle />
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
  gap: 10px;
}
</style>
