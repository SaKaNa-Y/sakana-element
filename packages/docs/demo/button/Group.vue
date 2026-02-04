<template>
  <div class="demo-button">
    <div class="row">
      <px-button-group disabled>
        <px-button type="primary" icon="arrow-left">Previous Page</px-button>
        <px-button type="primary">
          Next Page<px-icon icon="arrow-right" style="margin-left: 8px" />
        </px-button>
      </px-button-group>
    </div>
    <div class="row">
      <px-button-group type="warning" size="small">
        <px-button type="primary" icon="edit" round />
        <px-button type="primary" icon="share" />
        <px-button type="primary" icon="trash" round />
      </px-button-group>
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
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
