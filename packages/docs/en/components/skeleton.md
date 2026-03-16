---
title: Skeleton | Sakana Element
description: Pixel-style skeleton loading placeholder component for Vue 3 with stepped shimmer animation.
---

<script setup>
import { skeletonApi } from '../../apis/skeleton'
</script>

# Skeleton

A loading placeholder component that displays a skeleton screen while content is loading.

<ApiTable :sections="skeletonApi" lang="en" />

## Basic Usage

Display skeleton placeholders with different widths.

::: preview
demo-preview=../../demo/skeleton/Basic.vue
:::

## Variants

Use `variant` to change the skeleton shape: `rectangular` (default), `circular`, `rounded`, or `text`.

::: preview
demo-preview=../../demo/skeleton/Variant.vue
:::

## Animation

Use `animated` to toggle animation on/off. Use `animation` to choose the animation style: `shimmer` (scanline sweep), `pulse` (two-frame blink), or `dither` (checkerboard dissolve).

::: preview
demo-preview=../../demo/skeleton/Animation.vue
:::

## Loading Toggle

Use `loading` to switch between skeleton and actual content via the default slot.

::: preview
demo-preview=../../demo/skeleton/Loading.vue
:::

## Text Rows

Use `variant="text"` with `rows` to render multiple text lines. The last row is automatically shorter.

::: preview
demo-preview=../../demo/skeleton/Rows.vue
:::

## Sizes

Use `size` to set predefined skeleton heights: `large`, `default`, or `small`.

::: preview
demo-preview=../../demo/skeleton/Size.vue
:::

## Custom Dimensions

Use `width` and `height` props for precise control. Numbers are treated as pixels, strings are used as-is.

::: preview
demo-preview=../../demo/skeleton/CustomSize.vue
:::
