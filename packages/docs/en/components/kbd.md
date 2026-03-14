---
title: Kbd | Sakana Element
description: Pixel-style keyboard key component for displaying keyboard shortcuts and key combinations in Vue 3.
---

<script setup>
import { kbdApi } from '../../apis/kbd'
</script>

# Kbd

A keyboard key display component for showing keyboard shortcuts and key combinations with pixel-art styling. Arrow keys render as pixel icons, while modifier keys use Unicode symbols.

<ApiTable :sections="kbdApi" lang="en" />

## Basic Usage

Display simple keyboard keys with text content.

::: preview
demo-preview=../../demo/kbd/Basic.vue
:::

## Special Keys

Use the `keys` prop to render special key symbols. Arrow keys automatically use pixel icons, while modifier keys use Unicode symbols.

::: preview
demo-preview=../../demo/kbd/Keys.vue
:::

## Key Combinations

Combine `keys` prop with slot content to display keyboard shortcuts.

::: preview
demo-preview=../../demo/kbd/Combination.vue
:::

## Sizes

Use `size` property to set the key size.

::: preview
demo-preview=../../demo/kbd/Size.vue
:::

## All Keys Reference

A complete reference of all supported special key identifiers and their rendered symbols.

::: preview
demo-preview=../../demo/kbd/AllKeys.vue
:::
