<template>
  <div class="demo-icon-flip">
    <h4>Flip / 翻转</h4>
    <div class="demo-row">
      <div class="icon-item">
        <px-icon icon="arrow-right" size="2x" />
        <span>original</span>
      </div>
      <div class="icon-item">
        <px-icon icon="arrow-right" size="2x" flip="horizontal" />
        <span>horizontal</span>
      </div>
      <div class="icon-item">
        <px-icon icon="arrow-right" size="2x" flip="vertical" />
        <span>vertical</span>
      </div>
      <div class="icon-item">
        <px-icon icon="arrow-right" size="2x" flip="both" />
        <span>both</span>
      </div>
    </div>

    <h4>Rotation / 旋转</h4>
    <div class="demo-row">
      <div class="icon-item">
        <px-icon icon="arrow-right" size="2x" />
        <span>0°</span>
      </div>
      <div class="icon-item">
        <px-icon icon="arrow-right" size="2x" :rotation="90" />
        <span>90°</span>
      </div>
      <div class="icon-item">
        <px-icon icon="arrow-right" size="2x" :rotation="180" />
        <span>180°</span>
      </div>
      <div class="icon-item">
        <px-icon icon="arrow-right" size="2x" :rotation="270" />
        <span>270°</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-icon-flip h4 {
  margin: 0 0 12px;
  font-size: 14px;
  color: #888;
}
.demo-icon-flip h4:not(:first-child) {
  margin-top: 20px;
}
.demo-row {
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
