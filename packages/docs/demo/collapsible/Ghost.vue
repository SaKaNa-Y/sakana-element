<template>
  <div class="demo-collapsible">
    <px-collapsible ghost>
      <px-collapsible-trigger>
        <span class="trigger-label">Ghost mode (no border)</span>
      </px-collapsible-trigger>
      <px-collapsible-content>
        <p>Content area without pixel border or shadow — useful when embedding inside other containers.</p>
      </px-collapsible-content>
    </px-collapsible>

    <px-collapsible ghost color="primary">
      <px-collapsible-trigger>
        <span class="trigger-label">Ghost + color</span>
      </px-collapsible-trigger>
      <px-collapsible-content>
        <p>Ghost mode combined with a preset color.</p>
      </px-collapsible-content>
    </px-collapsible>
  </div>
</template>

<style scoped>
.demo-collapsible {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}
.trigger-label {
  font-weight: 500;
}
</style>
