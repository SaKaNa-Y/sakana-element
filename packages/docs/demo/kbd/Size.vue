<template>
  <div class="demo-kbd">
    <div class="demo-kbd-row">
      <span>Small:</span>
      <px-kbd size="small" :keys="['ctrl']">C</px-kbd>
    </div>
    <div class="demo-kbd-row">
      <span>Default:</span>
      <px-kbd :keys="['ctrl']">C</px-kbd>
    </div>
    <div class="demo-kbd-row">
      <span>Large:</span>
      <px-kbd size="large" :keys="['ctrl']">C</px-kbd>
    </div>
  </div>
</template>

<style scoped>
.demo-kbd {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-kbd-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--px-font-family);
  font-size: 14px;
}
</style>
