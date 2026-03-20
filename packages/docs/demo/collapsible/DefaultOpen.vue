<template>
  <div class="demo-collapsible">
    <px-collapsible default-open>
      <px-collapsible-trigger>
        <span class="trigger-label">Starts expanded</span>
      </px-collapsible-trigger>
      <px-collapsible-content>
        <p>This content is visible by default when the component mounts.</p>
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
