---
title: Card | Sakana Element
description: Pixel-style card container component with type variants, outline, dash, ghost, and custom color for Vue 3.
---

<script setup>
import { cardApi } from '../../apis/card'
</script>

# Card

A container component for displaying structured content with pixel-art borders.


<ApiTable :sections="cardApi" lang="en" />

## Basic Usage

A basic card with header, body, and footer sections.

::: preview
demo-preview=../../demo/card/Basic.vue
:::

## Types

Use `type` to set the card's color theme. Available types: `primary`, `success`, `info`, `warning`, `danger`.

::: preview
demo-preview=../../demo/card/Type.vue
:::

## Size

Use `size` property to set the card size. Accepts `'small'` or `'large'`.

::: preview
demo-preview=../../demo/card/Size.vue
:::

## Shadow

Use `shadow` property to control when the shadow is displayed. Accepts `'always'`, `'hover'`, or `'never'`.

::: preview
demo-preview=../../demo/card/Shadow.vue
:::

## Hoverable

Use `hoverable` property to add an elevation effect on hover.

::: preview
demo-preview=../../demo/card/Hoverable.vue
:::

## Outline

Use `outline` for a solid-border style with transparent background.

::: preview
demo-preview=../../demo/card/Outline.vue
:::

## Dash

Use `dash` for a dashed-border style.

::: preview
demo-preview=../../demo/card/Dash.vue
:::

## Ghost

Use `ghost` to remove borders and background, showing only colored text.

::: preview
demo-preview=../../demo/card/Ghost.vue
:::

## Custom Color

Use the `color` prop with a hex value to create custom-colored cards in any variant.

::: preview
demo-preview=../../demo/card/CustomColor.vue
:::
