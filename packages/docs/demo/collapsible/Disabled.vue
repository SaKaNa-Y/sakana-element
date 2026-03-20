<template>
  <div class="demo-collapsible">
    <px-collapsible disabled>
      <px-collapsible-trigger>
        <span class="trigger-label">Disabled (cannot toggle)</span>
      </px-collapsible-trigger>
      <px-collapsible-content>
        <p>This content is hidden and cannot be toggled.</p>
      </px-collapsible-content>
    </px-collapsible>
  </div>
</template>

<style scoped>
.demo-collapsible {
  max-width: 400px;
}
.trigger-label {
  font-weight: 500;
}
</style>
