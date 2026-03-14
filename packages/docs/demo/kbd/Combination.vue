<template>
  <div class="demo-kbd">
    <div class="demo-kbd-row">
      <span>Copy:</span>
      <px-kbd :keys="['ctrl']">C</px-kbd>
    </div>
    <div class="demo-kbd-row">
      <span>Paste:</span>
      <px-kbd :keys="['ctrl']">V</px-kbd>
    </div>
    <div class="demo-kbd-row">
      <span>Undo:</span>
      <px-kbd :keys="['ctrl']">Z</px-kbd>
    </div>
    <div class="demo-kbd-row">
      <span>Save:</span>
      <px-kbd :keys="['command']">S</px-kbd>
    </div>
    <div class="demo-kbd-row">
      <span>Search:</span>
      <px-kbd :keys="['ctrl', 'shift']">P</px-kbd>
    </div>
    <div class="demo-kbd-row">
      <span>Screenshot:</span>
      <px-kbd :keys="['command', 'shift']">4</px-kbd>
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
