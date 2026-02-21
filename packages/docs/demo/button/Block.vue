<template>
  <div class="column">
    <px-button block>Default Block</px-button>
    <px-button type="primary" block>Primary Block</px-button>
    <px-button type="success" block>Success Block</px-button>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}
</style>
