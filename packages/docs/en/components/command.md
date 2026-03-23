---
title: Command | Sakana Element
description: Pixel-style command palette component for searchable menus, keyboard navigation, and dialog mode in Vue 3.
---

<script setup>
import { commandApi } from '../../apis/command'
</script>

# Command

A searchable command palette for quick navigation and actions, with keyboard support and dialog mode.

<ApiTable :sections="commandApi" lang="en" />

## Basic Usage

A simple command menu with search filtering.

::: preview
demo-preview=../../demo/command/Basic.vue
:::

## Grouped Items

Use `CommandGroup` to organize items with headings and `CommandSeparator` for visual dividers.

::: preview
demo-preview=../../demo/command/Group.vue
:::

## Dialog Mode

Use `CommandDialog` to show the command palette in a modal overlay. Press `Ctrl+K` (or `Cmd+K` on Mac) to toggle.

::: preview
demo-preview=../../demo/command/Dialog.vue
:::

## Custom Filter

Provide a custom `filter` function for advanced matching (e.g., fuzzy search).

::: preview
demo-preview=../../demo/command/CustomFilter.vue
:::

## Disabled Items

Set `disabled` on items to prevent selection. Disabled items are skipped during keyboard navigation.

::: preview
demo-preview=../../demo/command/Disabled.vue
:::
