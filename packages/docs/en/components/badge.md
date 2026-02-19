---
title: Badge | Sakana Element
description: Pixel-style badge component for status indicators, labels, and tags in Vue 3.
---

<script setup>
import { badgeApi } from '../../api/badge'
</script>

# Badge

A small status indicator component for labels and tags.


<ApiTable :sections="badgeApi" lang="en" />

## Basic Usage

Basic badge display.

::: preview
demo-preview=../../demo/badge/Basic.vue
:::

## Types

Use `type` property to define different types.

::: preview
demo-preview=../../demo/badge/Type.vue
:::

## Sizes

Use `size` property to set the badge size.

::: preview
demo-preview=../../demo/badge/Size.vue
:::

## Outline

Use `outline` property to display a solid border with transparent background.

::: preview
demo-preview=../../demo/badge/Outline.vue
:::

## Dash

Use `dash` property to display a dashed border with a light background.

::: preview
demo-preview=../../demo/badge/Dash.vue
:::

## Custom Color

Use `color` property to set a custom hex color. Works with default, outline, and dash variants.

::: preview
demo-preview=../../demo/badge/CustomColor.vue
:::

