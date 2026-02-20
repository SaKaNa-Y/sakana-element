<template>
  <div class="demo-card">
    <px-card size="small">
      <template #header>Small</template>
      A compact card for secondary content or dense layouts.
    </px-card>

    <px-card>
      <template #header>Default</template>
      A standard card with the default size.
    </px-card>

    <px-card size="large">
      <template #header>Large</template>
      A spacious card for featured or prominent content.
    </px-card>
  </div>
</template>

<style scoped>
.demo-card {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
}

.demo-card .px-card {
  width: 260px;
}
</style>
