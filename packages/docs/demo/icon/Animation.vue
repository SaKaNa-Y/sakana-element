<template>
  <div class="demo-icon">
    <div class="icon-item">
      <px-icon icon="spinner" spin size="2x" />
      <span>spin</span>
    </div>
    <div class="icon-item">
      <px-icon icon="spinner" pulse size="2x" />
      <span>pulse</span>
    </div>
    <div class="icon-item">
      <px-icon icon="bell" shake size="2x" />
      <span>shake</span>
    </div>
    <div class="icon-item">
      <px-icon icon="heart" beat size="2x" type="danger" />
      <span>beat</span>
    </div>
    <div class="icon-item">
      <px-icon icon="star" bounce size="2x" type="warning" />
      <span>bounce</span>
    </div>
    <div class="icon-item">
      <px-icon icon="circle" fade size="2x" />
      <span>fade</span>
    </div>
  </div>
</template>

<style scoped>
.demo-icon {
  display: flex;
  align-items: center;
  gap: 30px;
}
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.icon-item span {
  font-size: 12px;
  color: #666;
}
</style>
