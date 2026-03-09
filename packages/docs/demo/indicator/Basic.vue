<template>
  <div class="demo-indicator">
    <px-indicator>
      <div class="demo-box">Content</div>
    </px-indicator>

    <px-indicator type="danger">
      <div class="demo-box">Alerts</div>
    </px-indicator>

    <px-indicator type="success">
      <template #indicator>
        <px-badge type="success" size="small">New</px-badge>
      </template>
      <div class="demo-box">Updates</div>
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
