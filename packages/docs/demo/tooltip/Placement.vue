<template>
  <div class="demo-tooltip">
    <px-tooltip content="Top" placement="top">
      <px-button>Top</px-button>
    </px-tooltip>
    <px-tooltip content="Bottom" placement="bottom">
      <px-button>Bottom</px-button>
    </px-tooltip>
    <px-tooltip content="Left" placement="left">
      <px-button>Left</px-button>
    </px-tooltip>
    <px-tooltip content="Right" placement="right">
      <px-button>Right</px-button>
    </px-tooltip>
  </div>
</template>

<style scoped>
.demo-tooltip {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
