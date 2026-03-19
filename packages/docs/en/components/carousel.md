---
title: Carousel | Sakana Element
description: Pixel-style carousel/slider component for cycling through slides with indicators and keyboard navigation.
---

<script setup>
import { carouselApi, carouselItemApi } from '../../apis/carousel'
</script>

# Carousel

A carousel component for cycling through content slides with pixel-art styling.

<ApiTable :sections="[...carouselApi, ...carouselItemApi]" lang="en" />

## Basic Usage

A simple carousel with multiple slides. Use arrow keys or click the navigation arrows and indicators to switch slides.

::: preview
demo-preview=../../demo/carousel/Basic.vue
:::

## Vertical Direction

Set `direction="vertical"` for a vertically scrolling carousel. Requires a fixed `height`.

::: preview
demo-preview=../../demo/carousel/Vertical.vue
:::

## Indicator Trigger

Use `indicator-trigger` to control whether indicators respond to `click` (default) or `hover`.

::: preview
demo-preview=../../demo/carousel/Indicators.vue
:::

## Arrow Visibility

Control when navigation arrows appear with `show-arrow`: `always`, `hover` (default), or `never`.

::: preview
demo-preview=../../demo/carousel/Arrows.vue
:::

## Color Variants

Use the `color` prop with preset names or custom hex values to style the carousel border, shadow, arrows, and indicators.

::: preview
demo-preview=../../demo/carousel/Color.vue
:::

## Programmatic Navigation

Access `next()`, `prev()`, and `goTo(index)` methods via a template ref for programmatic control.

::: preview
demo-preview=../../demo/carousel/Navigation.vue
:::
