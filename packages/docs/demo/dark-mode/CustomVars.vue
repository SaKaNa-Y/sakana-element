<template>
  <div class="demo-custom-vars">
    <div class="demo-custom-vars__section">
      <h4>Default Theme</h4>
      <div class="demo-custom-vars__row">
        <px-button type="primary">Primary</px-button>
        <px-button type="success">Success</px-button>
        <px-button type="warning">Warning</px-button>
        <px-button type="danger">Danger</px-button>
      </div>
    </div>

    <div class="demo-custom-vars__section custom-theme">
      <h4>Custom Theme (overridden variables)</h4>
      <div class="demo-custom-vars__row">
        <px-button type="primary">Primary</px-button>
        <px-button type="success">Success</px-button>
        <px-button type="warning">Warning</px-button>
        <px-button type="danger">Danger</px-button>
      </div>
    </div>

    <div class="demo-custom-vars__code">
      <code>.custom-theme { --px-color-primary: #e64553; ... }</code>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.demo-custom-vars {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.demo-custom-vars__section {
  padding: 16px;
  border: 2px solid var(--px-border-color-lighter);
  background: var(--px-bg-color);
}

.demo-custom-vars__section h4 {
  margin: 0 0 12px;
  font-size: 14px;
  color: var(--px-text-color-primary);
}

.demo-custom-vars__row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.demo-custom-vars__code {
  padding: 10px 14px;
  font-size: 12px;
  background: var(--px-fill-color-lighter);
  border: 1px solid var(--px-border-color-lighter);
}

.demo-custom-vars__code code {
  color: var(--px-text-color-regular);
}

/* Custom theme overrides — this is what we're demonstrating */
.custom-theme {
  --px-color-primary: #e64553;
  --px-color-primary-dark: #c73a47;
  --px-color-primary-light-3: #eb6a76;
  --px-color-primary-light-5: #f08f98;
  --px-color-primary-light-7: #f5b4ba;
  --px-color-primary-light-8: #f8c7cc;
  --px-color-primary-light-9: #fce3e5;

  --px-color-success: #209fb5;
  --px-color-success-dark: #1a8599;

  --px-color-warning: #df8e1d;
  --px-color-warning-dark: #bf7a19;

  --px-color-danger: #d20f39;
  --px-color-danger-dark: #b30d31;
}
</style>
