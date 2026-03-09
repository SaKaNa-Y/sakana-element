<template>
  <div class="demo-indicator">
    <px-indicator processing>
      <div class="demo-box">Live</div>
    </px-indicator>

    <px-indicator processing type="danger">
      <div class="demo-box">Alert</div>
    </px-indicator>

    <px-indicator processing type="success">
      <div class="demo-box">Online</div>
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
