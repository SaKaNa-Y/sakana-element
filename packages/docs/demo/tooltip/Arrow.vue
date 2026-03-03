<template>
  <div class="demo-tooltip">
    <px-tooltip content="With pixel arrow" :show-arrow="true" placement="top">
      <px-button>Top Arrow</px-button>
    </px-tooltip>
    <px-tooltip content="With pixel arrow" :show-arrow="true" placement="bottom">
      <px-button>Bottom Arrow</px-button>
    </px-tooltip>
    <px-tooltip content="No arrow (default)">
      <px-button>No Arrow</px-button>
    </px-tooltip>
  </div>
</template>

<style scoped>
.demo-tooltip {
  display: flex;
  gap: 12px;
}
</style>
