<template>
  <div class="demo-badge">
    <px-badge type="primary" icon="heart">Like</px-badge>
    <px-badge type="success" icon="check">Done</px-badge>
    <px-badge type="warning" icon="notification">Alert</px-badge>
    <px-badge type="info" icon="bookmark">Saved</px-badge>
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
