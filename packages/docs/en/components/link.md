---
title: Link | Sakana Element
description: Pixel-style link component for text hyperlinks with color variants in Vue 3.
---

<script setup>
import { linkApi } from '../../apis/link'
</script>

# Link

A text hyperlink component with pixel-art styling.


<ApiTable :sections="linkApi" lang="en" />

## Basic Usage

Basic link with an href pointing to an external URL.

::: preview
demo-preview=../../demo/link/Basic.vue
:::

## Types

Use `type` property to define different color variants.

::: preview
demo-preview=../../demo/link/Type.vue
:::

## Underline

Links show an underline by default. Set `underline` to `false` to remove it.

::: preview
demo-preview=../../demo/link/Underline.vue
:::

## Disabled

Use `disabled` to prevent interaction.

::: preview
demo-preview=../../demo/link/Disabled.vue
:::

## Custom Color

Use `color` property to set a custom hex color.

::: preview
demo-preview=../../demo/link/CustomColor.vue
:::
