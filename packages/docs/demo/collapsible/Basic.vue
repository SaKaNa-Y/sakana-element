<template>
  <div class="demo-collapsible">
    <px-collapsible>
      <px-collapsible-trigger>
        <span class="trigger-label">Click to toggle</span>
      </px-collapsible-trigger>
      <px-collapsible-content>
        <p>This is the collapsible content. It can contain any elements.</p>
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
