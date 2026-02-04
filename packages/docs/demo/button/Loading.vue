<template>
  <div class="row">
    <px-button type="primary" loading>Loading</px-button>
    <px-button type="primary" loading-icon="circle-notch" loading
      >Loading</px-button
    >
    <px-button type="primary" loading>
      <template #loading>
        <px-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </px-button>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
