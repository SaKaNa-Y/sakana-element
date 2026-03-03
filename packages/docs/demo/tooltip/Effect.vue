<template>
  <div class="demo-tooltip">
    <px-tooltip content="Dark effect (default)" effect="dark">
      <px-button>Dark</px-button>
    </px-tooltip>
    <px-tooltip content="Light effect" effect="light">
      <px-button>Light</px-button>
    </px-tooltip>
  </div>
</template>

<style scoped>
.demo-tooltip {
  display: flex;
  gap: 12px;
}
</style>
