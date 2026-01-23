<script setup>
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div style="padding: 40px; background: var(--px-bg-color-page); min-height: 100vh;">
    <h1 style="margin-bottom: 24px;">🎮 Pixel-Style UI Demo</h1>

    <!-- Buttons -->
    <h2>Buttons</h2>
    <div style="margin-bottom: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
      <px-button>Default</px-button>
      <px-button type="primary">Primary</px-button>
      <px-button type="success">Success</px-button>
      <px-button type="warning">Warning</px-button>
      <px-button type="danger">Danger</px-button>
      <px-button type="info">Info</px-button>
    </div>

    <div style="margin-bottom: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
      <px-button size="large" type="primary">Large</px-button>
      <px-button type="primary">Default</px-button>
      <px-button size="small" type="primary">Small</px-button>
    </div>

    <div style="margin-bottom: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
      <px-button type="primary" plain>Plain</px-button>
      <px-button type="primary" disabled>Disabled</px-button>
      <px-button type="primary" loading>Loading</px-button>
    </div>

    <!-- Input -->
    <h2>Input</h2>
    <div style="margin-bottom: 24px; max-width: 300px;">
      <px-input v-model="value" placeholder="Type something..." />
    </div>

    <!-- Select -->
    <h2>Select</h2>
    <div style="margin-bottom: 24px; max-width: 300px;">
      <px-select v-model="value" placeholder="Select a city">
        <px-option value="beijing" label="Beijing" />
        <px-option value="shanghai" label="Shanghai" />
        <px-option value="shenzhen" label="Shenzhen" />
      </px-select>
    </div>

    <!-- Alert -->
    <h2>Alerts</h2>
    <div style="margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px;">
      <px-alert title="Success Alert" type="success" />
      <px-alert title="Warning Alert" type="warning" />
      <px-alert title="Danger Alert" type="danger" />
      <px-alert title="Info Alert" type="info" />
    </div>

    <!-- Switch -->
    <h2>Switch</h2>
    <div style="margin-bottom: 24px;">
      <px-switch />
    </div>
  </div>
</template>
