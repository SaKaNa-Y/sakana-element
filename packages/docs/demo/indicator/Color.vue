<template>
  <div class="demo-indicator">
    <px-indicator color="#ff6600">
      <div class="demo-box">Orange</div>
    </px-indicator>

    <px-indicator color="#9333ea">
      <div class="demo-box">Purple</div>
    </px-indicator>

    <px-indicator color="#06b6d4">
      <template #indicator>
        <px-badge color="#06b6d4" size="small">5</px-badge>
      </template>
      <div class="demo-box">Cyan</div>
    </px-indicator>
  </div>
</template>

<style scoped>
.demo-indicator {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
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
  font-size: var(--px-font-size-base);
}
</style>
