# Getting Started

This section will guide you on how to use Sakana Element in your project.

## Installation

Install using a package manager:

::: code-group

```bash [npm]
npm install sakana-element
```

```bash [yarn]
yarn add sakana-element
```

```bash [pnpm]
pnpm add sakana-element
```

:::

## Full Import

If you don't care about the bundle size, using full import is more convenient.

```ts
// main.ts
import { createApp } from 'vue'
import SakanaElement from 'sakana-element'
import 'sakana-element/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(SakanaElement)
app.mount('#app')
```

## On-demand Import

You can also import only the components you need to reduce bundle size.

```vue
<template>
  <px-button type="primary">Pixel Button</px-button>
</template>

<script setup lang="ts">
import { PxButton } from 'sakana-element'
import 'sakana-element/dist/index.css'
</script>
```

## Theme Mode

Sakana Element supports both dark and light theme modes. You can use the `useTheme` composable to toggle themes.

```ts
import { useTheme } from 'sakana-element'

const { theme, toggleTheme, setTheme } = useTheme()

// Toggle theme
toggleTheme()

// Set to dark mode
setTheme('dark')

// Set to light mode
setTheme('light')

// Follow system preference
setTheme('system')
```

## Start Using

Now you can start using Sakana Element components.

<div style="display: flex; gap: 12px; margin-top: 20px;">
  <px-button>Default</px-button>
  <px-button type="primary">Primary</px-button>
  <px-button type="success">Success</px-button>
  <px-button type="warning">Warning</px-button>
  <px-button type="danger">Danger</px-button>
</div>

## Features

- 🎮 **Pixel Art Design** - Retro game aesthetics with hard-edge borders and offset shadows
- 🌓 **Dark Mode** - Supports dark/light theme toggle
- 📦 **Tree Shaking** - On-demand import support
- 🔧 **TypeScript** - Complete type definitions
- 📖 **Bilingual Docs** - Chinese and English documentation
