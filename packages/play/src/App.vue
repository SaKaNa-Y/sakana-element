<script setup>
import { ref } from 'vue';

const value = ref('');
const switchValue = ref(false);
</script>

<template>
  <div class="demo-container">
    <h1 class="demo-title">Pixel-Style UI Demo</h1>

    <!-- Buttons Section -->
    <section class="demo-section">
      <h2 class="demo-section-title">Buttons</h2>

      <div class="demo-group">
        <h3 class="demo-group-title">Types</h3>
        <div class="demo-row">
          <px-button>Default</px-button>
          <px-button type="primary">Primary</px-button>
          <px-button type="success">Success</px-button>
          <px-button type="warning">Warning</px-button>
          <px-button type="danger">Danger</px-button>
          <px-button type="info">Info</px-button>
        </div>
      </div>

      <div class="demo-group">
        <h3 class="demo-group-title">Sizes</h3>
        <div class="demo-row">
          <px-button size="large" type="primary">Large</px-button>
          <px-button type="primary">Default</px-button>
          <px-button size="small" type="primary">Small</px-button>
        </div>
      </div>

      <div class="demo-group">
        <h3 class="demo-group-title">States</h3>
        <div class="demo-row">
          <px-button type="primary" plain>Plain</px-button>
          <px-button type="primary" disabled>Disabled</px-button>
          <px-button type="primary" loading>Loading</px-button>
        </div>
      </div>

      <div class="demo-group">
        <h3 class="demo-group-title">Plain Variants</h3>
        <div class="demo-row">
          <px-button plain>Default</px-button>
          <px-button type="primary" plain>Primary</px-button>
          <px-button type="success" plain>Success</px-button>
          <px-button type="warning" plain>Warning</px-button>
          <px-button type="danger" plain>Danger</px-button>
        </div>
      </div>
    </section>

    <!-- Input Section -->
    <section class="demo-section">
      <h2 class="demo-section-title">Input</h2>

      <div class="demo-group">
        <h3 class="demo-group-title">Basic</h3>
        <div class="demo-column">
          <px-input v-model="value" placeholder="Type something..." />
          <px-input v-model="value" placeholder="Disabled input" disabled />
        </div>
      </div>

      <div class="demo-group">
        <h3 class="demo-group-title">Sizes</h3>
        <div class="demo-column">
          <px-input size="large" placeholder="Large input" />
          <px-input placeholder="Default input" />
          <px-input size="small" placeholder="Small input" />
        </div>
      </div>
    </section>

    <!-- Select Section -->
    <section class="demo-section">
      <h2 class="demo-section-title">Select</h2>

      <div class="demo-group">
        <div class="demo-column">
          <px-select v-model="value" placeholder="Select a city">
            <px-option value="beijing" label="Beijing" />
            <px-option value="shanghai" label="Shanghai" />
            <px-option value="shenzhen" label="Shenzhen" />
            <px-option value="hangzhou" label="Hangzhou" />
          </px-select>
        </div>
      </div>
    </section>

    <!-- Alert Section -->
    <section class="demo-section">
      <h2 class="demo-section-title">Alerts</h2>

      <div class="demo-group">
        <h3 class="demo-group-title">Light Theme</h3>
        <div class="demo-column">
          <px-alert title="Success Alert" type="success" />
          <px-alert title="Warning Alert" type="warning" />
          <px-alert title="Danger Alert" type="danger" />
          <px-alert title="Info Alert" type="info" />
        </div>
      </div>

      <div class="demo-group">
        <h3 class="demo-group-title">Dark Theme</h3>
        <div class="demo-column">
          <px-alert title="Success Alert" type="success" effect="dark" />
          <px-alert title="Warning Alert" type="warning" effect="dark" />
          <px-alert title="Danger Alert" type="danger" effect="dark" />
          <px-alert title="Info Alert" type="info" effect="dark" />
        </div>
      </div>
    </section>

    <!-- Switch Section -->
    <section class="demo-section">
      <h2 class="demo-section-title">Switch</h2>

      <div class="demo-group">
        <div class="demo-row">
          <px-switch v-model="switchValue" />
          <px-switch v-model="switchValue" size="large" />
          <px-switch v-model="switchValue" size="small" />
          <px-switch disabled />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 32px;
  background: var(--px-bg-color-page);
  min-height: 100vh;
}

.demo-title {
  font-family: var(--px-font-family);
  font-size: 24px;
  margin-bottom: 32px;
  color: var(--px-text-color-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.demo-section {
  margin-bottom: 40px;
  padding: 24px;
  background: var(--px-bg-color);
  border: 3px solid var(--px-border-color-dark);
  box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.2);
}

.demo-section-title {
  font-family: var(--px-font-family);
  font-size: 18px;
  margin: 0 0 20px 0;
  color: var(--px-color-primary);
  text-transform: uppercase;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--px-border-color);
}

.demo-group {
  margin-bottom: 20px;
}

.demo-group:last-child {
  margin-bottom: 0;
}

.demo-group-title {
  font-family: var(--px-font-family);
  font-size: 14px;
  margin: 0 0 12px 0;
  color: var(--px-text-color-secondary);
}

.demo-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 320px;
}
</style>
