<template>
  <div class="demo-resizable">
    <px-resizable-group direction="vertical">
      <px-resizable-panel :default-size="60">
        <px-resizable-group direction="horizontal">
          <px-resizable-panel :default-size="30">
            <div class="demo-panel">Sidebar</div>
          </px-resizable-panel>
          <px-resizable-handle />
          <px-resizable-panel :default-size="70">
            <div class="demo-panel">Editor</div>
          </px-resizable-panel>
        </px-resizable-group>
      </px-resizable-panel>
      <px-resizable-handle />
      <px-resizable-panel :default-size="40">
        <div class="demo-panel">Terminal</div>
      </px-resizable-panel>
    </px-resizable-group>
  </div>
</template>

<style scoped>
.demo-resizable {
  height: 350px;
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
