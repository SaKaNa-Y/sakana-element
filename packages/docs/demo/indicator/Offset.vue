<template>
  <div class="demo-indicator">
    <px-indicator :offset="[0, 0]">
      <template #indicator>
        <px-badge type="danger" size="small">0,0</px-badge>
      </template>
      <div class="demo-box">Default</div>
    </px-indicator>

    <px-indicator :offset="[8, 8]">
      <template #indicator>
        <px-badge type="primary" size="small">8,8</px-badge>
      </template>
      <div class="demo-box">Outward</div>
    </px-indicator>

    <px-indicator :offset="[-8, -8]">
      <template #indicator>
        <px-badge type="success" size="small">-8,-8</px-badge>
      </template>
      <div class="demo-box">Inward</div>
    </px-indicator>
  </div>
</template>

<style scoped>
.demo-indicator {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  align-items: center;
}
.demo-box {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--px-border-color);
  font-family: var(--px-font-family);
  font-size: 12px;
}
</style>
