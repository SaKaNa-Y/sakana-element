# Getting Started

This guide will walk you through installing and setting up Sakana Element in your Vue 3 project.

## Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher
- [Vue](https://vuejs.org/) version 3.4 or higher

## Installation

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

The simplest way to get started. This registers all components globally.

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import SakanaElement from 'sakana-element'
import 'sakana-element/dist/index.css'

const app = createApp(App)
app.use(SakanaElement)
app.mount('#app')
```

::: warning Don't forget the CSS!
You **must** import `sakana-element/dist/index.css` — without it, components will render without any styles. This is the most common setup mistake.
:::

Now you can use any component directly in your templates:

```vue
<template>
  <px-button type="primary">Pixel Button</px-button>
</template>
```

## On-demand Import

If you want a smaller bundle, import only the components you need:

```vue
<template>
  <PxButton type="primary">Pixel Button</PxButton>
  <PxInput v-model="text" placeholder="Type here..." />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PxButton, PxInput } from 'sakana-element'
import 'sakana-element/dist/index.css'

const text = ref('')
</script>
```

::: tip
Even with on-demand imports, you still need to import the CSS file. Import it once in your `main.ts` instead of repeating it in every component.
:::

## Theme Mode

Sakana Element has built-in support for dark and light themes. Use the `useTheme` composable to control it:

```ts
import { useTheme } from 'sakana-element'

const { theme, toggleTheme, setTheme } = useTheme()

toggleTheme()        // Toggle between dark and light
setTheme('dark')     // Force dark mode
setTheme('light')    // Force light mode
setTheme('system')   // Follow system preference
```

## Volar Support

If you use [Volar](https://github.com/vuejs/language-tools) for Vue IDE support, Sakana Element provides full type definitions out of the box. You'll get autocomplete for all `Px` prefixed components and their props.

## Features

- 🎮 **Pixel Art Design** — Retro game aesthetics with hard-edge borders and offset shadows
- 🌓 **Dark Mode** — Supports dark/light/system theme toggle
- 📦 **Tree Shaking** — On-demand import support
- 🔧 **TypeScript** — Complete type definitions
- 📖 **Bilingual Docs** — Chinese and English documentation
