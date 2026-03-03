---
title: Table | Sakana Element
description: Pixel-style table wrapper component with zebra stripes, hover highlight, borders, outline/ghost variants, hoverable interaction, sticky rows/columns, and multiple sizes for Vue 3.
---

<script setup>
import { tableApi } from '../../apis/table'
</script>

# Table

A CSS wrapper around native `<table>` elements that applies pixel-art styling. Write standard HTML tables inside `<px-table>`.


<ApiTable :sections="tableApi" lang="en" />

## Basic Usage

::: preview
demo-preview=../../demo/table/Basic.vue
:::

## Zebra Stripes

Use `zebra` (or `stripe`) to alternate row backgrounds.

::: preview
demo-preview=../../demo/table/Zebra.vue
:::

## Hover Highlight

Use `hover` to highlight rows on mouse hover.

::: preview
demo-preview=../../demo/table/Hover.vue
:::

## Full Borders

Use `border` to add borders to all cells.

::: preview
demo-preview=../../demo/table/Border.vue
:::

## Color Types

Use `type` to apply color variants: `primary`, `success`, `warning`, `danger`, `info`.

::: preview
demo-preview=../../demo/table/Type.vue
:::

## Size Variants

Five sizes: `xs`, `sm`, `md` (default), `lg`, `xl`.

::: preview
demo-preview=../../demo/table/Size.vue
:::

## Sticky Header (Pin Rows)

Use `pin-rows` with a fixed `max-height` to make the header sticky while the body scrolls.

::: preview
demo-preview=../../demo/table/PinRows.vue
:::

## Sticky First Column (Pin Cols)

Use `pin-cols` with a fixed `max-width` to pin the first column while scrolling horizontally.

::: preview
demo-preview=../../demo/table/PinCols.vue
:::

## Outline

Use `outline` to render a wireframe border with no fill. Combines with `type` for colored outlines.

::: preview
demo-preview=../../demo/table/Outline.vue
:::

## Ghost

Use `ghost` to remove the border and shadow entirely, keeping only the internal table styling.

::: preview
demo-preview=../../demo/table/Ghost.vue
:::

## Hoverable

Use `hoverable` to add a pixel-style lift effect on hover and press-down on click.

::: preview
demo-preview=../../demo/table/Hoverable.vue
:::

## Combined Features

All features can be used together.

::: preview
demo-preview=../../demo/table/Combined.vue
:::
