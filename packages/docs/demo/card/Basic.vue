<template>
  <div class="demo-card">
    <px-card>
      <template #header>Card Header</template>
      A simple card with header, body, and footer sections.
      <template #footer>Card Footer</template>
    </px-card>

    <px-card>
      This is a card with only body content.
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
