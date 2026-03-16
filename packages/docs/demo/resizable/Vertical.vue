<template>
  <div class="demo-resizable">
    <px-resizable-group direction="vertical">
      <px-resizable-panel :default-size="40">
        <div class="demo-panel">Top</div>
      </px-resizable-panel>
      <px-resizable-handle />
      <px-resizable-panel :default-size="60">
        <div class="demo-panel">Bottom</div>
      </px-resizable-panel>
    </px-resizable-group>
  </div>
</template>

<style scoped>
.demo-resizable {
  height: 300px;
  border: 2px solid var(--px-border-color);
}
.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: var(--px-font-family);
}
</style>
