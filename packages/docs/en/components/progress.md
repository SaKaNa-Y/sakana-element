---
title: Progress | Sakana Element
description: Pixel-style progress bar component for displaying completion percentages in Vue 3.
---

<script setup>
import { progressApi } from '../../apis/progress'
</script>

# Progress

Used to display the current progress of an operation.

<ApiTable :sections="progressApi" lang="en" />

## Basic Usage

Set `percentage` to indicate current progress. The value is clamped between 0 and 100.

::: preview
demo-preview=../../demo/progress/Basic.vue
:::

## Types

Use the `type` prop to set different colors.

::: preview
demo-preview=../../demo/progress/Type.vue
:::

## Sizes

Three sizes available: `large`, `default`, and `small`.

::: preview
demo-preview=../../demo/progress/Size.vue
:::

## Text Inside

Use `text-inside` to place the percentage text inside the progress bar.

::: preview
demo-preview=../../demo/progress/TextInside.vue
:::

## Variants

Use `variant` to choose a fill pattern: `solid`, `striped`, or `checkered`.

::: preview
demo-preview=../../demo/progress/Variant.vue
:::

## Striped Flow

Add `striped-flow` with `variant="striped"` for an animated stripe effect.

::: preview
demo-preview=../../demo/progress/StripedFlow.vue
:::

## Indeterminate

Use `indeterminate` for tasks with unknown completion. The bar bounces back and forth with a pixel-style `steps()` animation.

::: preview
demo-preview=../../demo/progress/Indeterminate.vue
:::

## Custom Color

Use the `color` prop with a hex string or a function that returns a color based on the current percentage.

::: preview
demo-preview=../../demo/progress/CustomColor.vue
:::

## Custom Format

Use the `format` prop to customize the displayed text.

::: preview
demo-preview=../../demo/progress/Format.vue
:::

## Status

Use `status` to override the type color with a semantic status.

::: preview
demo-preview=../../demo/progress/Status.vue
:::
