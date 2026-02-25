<template>
  <div class="demo-badge-text">
    <h2>
      Inbox
      <px-badge type="danger">99+</px-badge>
    </h2>
    <p>
      This feature is
      <px-badge type="success" size="small">NEW</px-badge>
      and ready to use.
    </p>
    <h3>
      Messages
      <px-badge type="primary" />
    </h3>
  </div>
</template>

<style scoped>
.demo-badge-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
