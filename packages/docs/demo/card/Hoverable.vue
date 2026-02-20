<template>
  <div class="demo-card">
    <px-card hoverable>
      <template #header>Hoverable Card</template>
      Hover over this card to see the elevation effect.
    </px-card>

    <px-card hoverable>
      <template #header>Another Hoverable</template>
      Click and release to see the active state.
    </px-card>
  </div>
</template>

<style scoped>
.demo-card {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.demo-card .px-card {
  width: 280px;
}
</style>
