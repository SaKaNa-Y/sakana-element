<template>
  <div class="demo-resizable">
    <px-resizable-group direction="horizontal">
      <px-resizable-panel :default-size="30" :min-size="20" :max-size="50">
        <div class="demo-panel">Min 20% / Max 50%</div>
      </px-resizable-panel>
      <px-resizable-handle />
      <px-resizable-panel :default-size="70">
        <div class="demo-panel">Flexible</div>
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
  font-size: 12px;
}
</style>
