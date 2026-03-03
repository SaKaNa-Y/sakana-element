<template>
  <px-tooltip trigger="click">
    <px-button>Rich Content</px-button>
    <template #content>
      <div class="custom-content">
        <strong>Custom Tooltip</strong>
        <p>Supports rich HTML content via the <code>content</code> slot.</p>
      </div>
    </template>
  </px-tooltip>
</template>

<style scoped>
.custom-content {
  max-width: 200px;
}
.custom-content p {
  margin: 4px 0 0;
  font-size: 12px;
  opacity: 0.85;
}
</style>
