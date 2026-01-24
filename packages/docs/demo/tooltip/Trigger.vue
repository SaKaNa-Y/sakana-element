<template>
  <div class="demo-tooltip">
    <px-tooltip content="Hover trigger" trigger="hover">
      <px-button>Hover</px-button>
    </px-tooltip>
    <px-tooltip content="Click trigger" trigger="click">
      <px-button>Click</px-button>
    </px-tooltip>
    <px-tooltip content="Right click trigger" trigger="contextmenu">
      <px-button>Right Click</px-button>
    </px-tooltip>
  </div>
</template>

<style scoped>
.demo-tooltip {
  display: flex;
  gap: 12px;
}
</style>
