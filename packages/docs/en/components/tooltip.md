---
title: Tooltip | Sakana Element
description: Pixel-style tooltip component showing details on hover for Vue 3.
---

<script setup>
import { tooltipApi } from '../../apis/tooltip'
</script>

# Tooltip

Display prompt information on mouse hover.


<ApiTable :sections="tooltipApi" lang="en" />

## Basic Usage

Use `content` attribute to set the tooltip content.

::: preview
demo-preview=../../demo/tooltip/Basic.vue
:::

## Effect

Use `effect` to switch between dark and light themes.

::: preview
demo-preview=../../demo/tooltip/Effect.vue
:::

## Themed Colors

Use `type` to apply themed color variants.

::: preview
demo-preview=../../demo/tooltip/Type.vue
:::

## Placement

Use `placement` attribute to set the tooltip position.

::: preview
demo-preview=../../demo/tooltip/Placement.vue
:::

## Trigger

Use `trigger` attribute to set the trigger mode.

::: preview
demo-preview=../../demo/tooltip/Trigger.vue
:::

## Max Width

Use `max-width` to constrain the tooltip width. Long text wraps automatically.

::: preview
demo-preview=../../demo/tooltip/MaxWidth.vue
:::

## Enterable

When `enterable` is `true` (default), the tooltip remains visible while the cursor is over it. Set to `false` to hide immediately on mouseleave.

::: preview
demo-preview=../../demo/tooltip/Enterable.vue
:::

## Manual Control

Use `manual` mode with exposed `show` / `hide` / `toggle` methods for programmatic control.

::: preview
demo-preview=../../demo/tooltip/Manual.vue
:::

## Disabled

Use `disabled` attribute to disable the tooltip.

::: preview
demo-preview=../../demo/tooltip/Disabled.vue
:::

## Virtual Triggering

Use `virtual-triggering` and `virtual-ref` to trigger the tooltip from an external DOM element.

::: preview
demo-preview=../../demo/tooltip/VirtualTrigger.vue
:::

## Show Arrow

Use `show-arrow` to display a pixel-style arrow pointing to the trigger element.

::: preview
demo-preview=../../demo/tooltip/Arrow.vue
:::

## Custom Content

Use the `content` slot for rich HTML content inside the tooltip.

::: preview
demo-preview=../../demo/tooltip/CustomContent.vue
:::
