<template>
  <div class="demo-resizable">
    <px-resizable-group direction="horizontal">
      <px-resizable-panel :default-size="50">
        <div class="demo-panel">Panel A</div>
      </px-resizable-panel>
      <px-resizable-handle />
      <px-resizable-panel :default-size="50">
        <div class="demo-panel">Panel B</div>
      </px-resizable-panel>
    </px-resizable-group>
  </div>
</template>

<style scoped>
.demo-resizable {
  height: 200px;
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
