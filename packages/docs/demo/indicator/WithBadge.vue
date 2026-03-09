<template>
  <div class="demo-indicator">
    <px-indicator>
      <template #indicator>
        <px-badge type="danger" size="small">3</px-badge>
      </template>
      <px-button>Messages</px-button>
    </px-indicator>

    <px-indicator placement="top-start">
      <template #indicator>
        <px-badge type="warning" size="small">99+</px-badge>
      </template>
      <px-button type="primary">Notifications</px-button>
    </px-indicator>

    <px-indicator>
      <template #indicator>
        <px-badge type="success" size="small" icon="check" />
      </template>
      <px-button type="success" plain>Verified</px-button>
    </px-indicator>
  </div>
</template>

<style scoped>
.demo-indicator {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
}
</style>
