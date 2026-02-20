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

## Disabled

Use `disabled` attribute to disable the tooltip.

::: preview
demo-preview=../../demo/tooltip/Disabled.vue
:::

