<template>
  <div class="demo-card">
    <px-card shadow="hover">
      <template #header>Hover</template>
      Shadow appears on hover.
    </px-card>

    <px-card shadow="never">
      <template #header>Never</template>
      No shadow is displayed.
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
  width: 220px;
}
</style>
