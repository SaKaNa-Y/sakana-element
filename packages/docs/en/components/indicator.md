---
title: Indicator | Sakana Element
description: Pixel-style indicator component for positioning overlay badges, dots, and labels on wrapped content in Vue 3.
---

<script setup>
import { indicatorApi } from '../../apis/indicator'
</script>

# Indicator

A positioning utility that wraps content and places an overlay indicator (badge, dot, text) on any of 9 grid positions. The dot indicator features a 3D bevel effect with inset highlight/shadow, and the processing state uses a stepped pixel glow aura animation.


<ApiTable :sections="indicatorApi" lang="en" />

## Basic Usage

Wrap any content and the indicator appears as a dot by default. Use the `indicator` slot for custom content.

::: preview
demo-preview=../../demo/indicator/Basic.vue
:::

## Placement

Use `placement` to position the indicator in one of 9 grid positions.

::: preview
demo-preview=../../demo/indicator/Placement.vue
:::

## Types

Use `type` to set the indicator color theme.

::: preview
demo-preview=../../demo/indicator/Type.vue
:::

## With Badge

Combine with `PxBadge` in the `indicator` slot for number counters and labels.

::: preview
demo-preview=../../demo/indicator/WithBadge.vue
:::

## Processing

Use `processing` to add a pixel ping animation for live status.

::: preview
demo-preview=../../demo/indicator/Processing.vue
:::

## Offset

Use `offset` to fine-tune the indicator position with `[x, y]` pixel values.

::: preview
demo-preview=../../demo/indicator/Offset.vue
:::

## Custom Color

Use `color` to set a custom hex color for the dot indicator.

::: preview
demo-preview=../../demo/indicator/Color.vue
:::

## Inline

Use `inline` for inline-flex display, useful when embedding in text flow.

::: preview
demo-preview=../../demo/indicator/Inline.vue
:::
