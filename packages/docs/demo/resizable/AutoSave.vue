<template>
  <div class="demo-resizable">
    <p style="margin-bottom: 8px; font-family: var(--px-font-family)">
      Resize the panels, then reload the page — the layout is saved.
    </p>
    <div class="demo-container">
      <px-resizable-group direction="horizontal" auto-save-id="demo-layout">
        <px-resizable-panel :default-size="40">
          <div class="demo-panel">Saved Panel A</div>
        </px-resizable-panel>
        <px-resizable-handle />
        <px-resizable-panel :default-size="60">
          <div class="demo-panel">Saved Panel B</div>
        </px-resizable-panel>
      </px-resizable-group>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
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
