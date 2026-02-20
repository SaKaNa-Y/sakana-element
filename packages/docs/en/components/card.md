---
title: Card | Sakana Element
description: Pixel-style card container component for displaying structured content in Vue 3.
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
