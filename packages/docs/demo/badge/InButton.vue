<template>
  <div class="demo-badge">
    <px-button type="primary">
      Inbox
      <px-badge type="danger" size="small">8</px-badge>
    </px-button>
    <px-button type="info">
      Notifications
      <px-badge type="danger" size="small" />
    </px-button>
  </div>
</template>

<style scoped>
.demo-badge {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
