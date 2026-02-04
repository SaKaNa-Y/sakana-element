<template>
  <div class="demo-size">
    <div class="row">
      <px-button size="large">Large</px-button>
      <px-button>Default</px-button>
      <px-button size="small">Small</px-button>
      <px-button size="large" icon="search">Search</px-button>
      <px-button icon="search">Search</px-button>
      <px-button size="small" icon="search">Search</px-button>
    </div>
    <div class="row">
      <px-button size="large" round>Large</px-button>
      <px-button round>Default</px-button>
      <px-button size="small" round>Small</px-button>
      <px-button size="large" icon="search" round>Search</px-button>
      <px-button icon="search" round>Search</px-button>
      <px-button size="small" icon="search" round>Search</px-button>
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
}
</style>
