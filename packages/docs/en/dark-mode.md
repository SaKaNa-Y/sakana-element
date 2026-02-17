---
title: Dark Mode | Sakana Element
description: Learn about dark mode support in Sakana Element pixel component library with Catppuccin color scheme and system preference detection.
---

# Dark Mode

Sakana Element has full built-in dark mode support with a [Catppuccin Mocha](https://catppuccin.com/) inspired color palette. The theme system provides three modes — `light`, `dark`, and `system` — with automatic localStorage persistence and system preference detection.

## Basic Usage

Use the `useTheme` composable to toggle between themes. The state is shared across all components and persisted in localStorage.

::: preview
demo-preview=../demo/dark-mode/Basic.vue
:::

## Theme Modes

The `setTheme` function accepts three values:

| Mode | Description |
| --- | --- |
| `'light'` | Force light mode regardless of system preference |
| `'dark'` | Force dark mode regardless of system preference |
| `'system'` | Automatically follow the user's OS color scheme |

```ts
import { useTheme } from 'sakana-element'

const { setTheme, toggleTheme, isDark, theme } = useTheme()

// Set a specific mode
setTheme('dark')

// Toggle between light ↔ dark (ignores system)
toggleTheme()

// Read current state
console.log(theme.value)  // 'light' | 'dark' | 'system'
console.log(isDark.value)  // true | false
```

::: tip Persistence
When you call `setTheme()`, the chosen mode is saved to `localStorage` under the key `px-theme`. On page reload, the theme is automatically restored.
:::

## System Preference Detection

The `useSystemTheme` composable gives you read-only access to the user's OS color scheme. It updates reactively when the system preference changes.

```vue
<script setup lang="ts">
import { useSystemTheme } from 'sakana-element'

const { prefersDark } = useSystemTheme()
</script>

<template>
  <p>System prefers dark: {{ prefersDark }}</p>
</template>
```

::: info When to use which?
Use **`useTheme`** when you want to control the theme (toggle, persist, apply CSS classes). Use **`useSystemTheme`** when you only need to read the OS preference without changing anything — for example, to show a "Your system is in dark mode" indicator.
:::

## How It Works

When dark mode is active, Sakana Element adds the `px-dark` class to the `<html>` element. All component styles reference CSS custom properties (variables) that are redefined under `.px-dark`:

```
:root            →  light mode variables (default)
.px-dark, .dark  →  dark mode variable overrides
```

This means the theme switch is pure CSS — no component re-renders needed.

## Customizing Colors

You can override any CSS variable for either theme. Define your overrides in your app's global CSS:

::: preview
demo-preview=../demo/dark-mode/CustomVars.vue
:::

### Available Variable Categories

| Category | Example Variables | Description |
| --- | --- | --- |
| Primary | `--px-color-primary`, `--px-color-primary-dark` | Brand accent color |
| Success | `--px-color-success`, `--px-color-success-dark` | Success state color |
| Warning | `--px-color-warning`, `--px-color-warning-dark` | Warning state color |
| Danger | `--px-color-danger`, `--px-color-danger-dark` | Error/danger state color |
| Info | `--px-color-info`, `--px-color-info-dark` | Informational state color |
| Background | `--px-bg-color`, `--px-bg-color-page`, `--px-bg-color-overlay` | Surface and page colors |
| Text | `--px-text-color-primary`, `--px-text-color-regular`, etc. | Typography colors |
| Border | `--px-border-color`, `--px-border-color-light`, etc. | Border and divider colors |
| Fill | `--px-fill-color`, `--px-fill-color-light`, etc. | Fill and background accent colors |

::: tip
Each semantic color (primary, success, etc.) has a `-dark` shade and `-light-3` through `-light-9` variants. Override these too for a consistent look across hover, disabled, and focus states.
:::

## API Reference

### useTheme

| Return Value | Type | Description |
| --- | --- | --- |
| `theme` | `ComputedRef<'light' \| 'dark' \| 'system'>` | Current theme setting |
| `isDark` | `ComputedRef<boolean>` | Whether dark mode is currently active |
| `setTheme` | `(theme: Theme) => void` | Set theme to `'light'`, `'dark'`, or `'system'` |
| `toggleTheme` | `() => void` | Toggle between `light` and `dark` |

### useSystemTheme

| Return Value | Type | Description |
| --- | --- | --- |
| `prefersDark` | `Ref<boolean>` | Whether the OS prefers dark mode |
| `prefers` | `Ref<'light' \| 'dark'>` | The OS color scheme preference |
