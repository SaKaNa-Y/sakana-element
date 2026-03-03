<template>
  <div class="demo-tooltip">
    <px-tooltip content="You can hover over me" :enterable="true">
      <px-button>Enterable (default)</px-button>
    </px-tooltip>
    <px-tooltip content="I will disappear immediately" :enterable="false">
      <px-button>Not Enterable</px-button>
    </px-tooltip>
  </div>
</template>

<style scoped>
.demo-tooltip {
  display: flex;
  gap: 12px;
}
</style>
