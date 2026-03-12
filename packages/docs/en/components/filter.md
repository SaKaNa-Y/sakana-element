---
title: Filter | Sakana Element
description: Pixel-style filter chip component with toggle-off behavior, sizes, type colors, custom colors, and slot support for Vue 3.
---

<script setup>
import { filterApi, filterItemApi } from '../../apis/filter'
</script>

# Filter

A filter chip component for selecting/deselecting options. Unlike Radio, clicking an active chip deselects it (toggles off). In single-select mode, unselected items collapse when a selection is made, with a `×` reset button to clear. Use `multiple` for multi-select behavior.

<ApiTable :sections="[...filterApi, ...filterItemApi]" lang="en" />

## Basic Usage

Bind `v-model` and provide `options`. Click a chip to select it; click again to deselect.

::: preview
demo-preview=../../demo/filter/Basic.vue
:::

## Disabled State

Use `disabled` on the group to disable all items, or on individual options.

::: preview
demo-preview=../../demo/filter/Disabled.vue
:::

## Type

Use `type` property to apply preset theme colors.

::: preview
demo-preview=../../demo/filter/Type.vue
:::

## Custom Color

Use `color` property to set a custom hex color for the active state.

::: preview
demo-preview=../../demo/filter/CustomColor.vue
:::

## Different Sizes

Use `size` property to set the filter chip size.

::: preview
demo-preview=../../demo/filter/Size.vue
:::

## Multiple Selection

Use `multiple` prop to enable multi-select mode. Multiple items can be active simultaneously, and clicking the `×` button clears all selections.

::: preview
demo-preview=../../demo/filter/Multiple.vue
:::

## Slot Children

Use `PxFilterItem` as slot children for more control over individual items.

::: preview
demo-preview=../../demo/filter/SlotChildren.vue
:::
