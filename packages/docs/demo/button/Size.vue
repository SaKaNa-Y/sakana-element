<template>
  <div class="demo-size">
    <div class="row">
      <px-button size="large">Large</px-button>
      <px-button>Default</px-button>
      <px-button size="small">Small</px-button>
      <px-button size="large" round>Large</px-button>
      <px-button round>Default</px-button>
      <px-button size="small" round>Small</px-button>
    </div>
    <div class="row">
      <px-button size="large" icon="search" circle />
      <px-button icon="search" circle />
      <px-button size="small" icon="search" circle />
    </div>
  </div>
</template>

<style scoped>
.demo-size {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
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
