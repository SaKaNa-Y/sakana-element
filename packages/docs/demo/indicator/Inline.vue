<template>
  <div class="demo-indicator">
    <p>
      You have
      <px-indicator inline type="danger">
        <template #indicator>
          <px-badge type="danger" size="small">3</px-badge>
        </template>
        <strong>unread messages</strong>
      </px-indicator>
      in your inbox.
    </p>
  </div>
</template>

<style scoped>
.demo-indicator {
  font-family: var(--px-font-family);
  font-size: var(--px-font-size-base);
  line-height: 2;
}
</style>
