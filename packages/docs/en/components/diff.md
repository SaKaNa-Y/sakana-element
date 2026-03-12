---
title: Diff | Sakana Element
description: Before/after image comparison slider with built-in pixelation support for Vue 3.
---

<script setup>
import { diffApi } from '../../apis/diff'
</script>

# Diff

A before/after image comparison slider with a pixel-art twist. In its signature mode, the "before" side shows the original image while the "after" side auto-pixelates it — creating an interactive original-vs-pixel reveal. Supports custom slots for comparing any two pieces of content.

> Inspired by [daisyUI Diff](https://daisyui.com/components/diff/), enhanced with the library's built-in pixelation engine.

<ApiTable :sections="diffApi" lang="en" />

## Basic Usage

Provide `src` to compare an image against its pixelated version. Drag the slider to reveal more or less of the original.

::: preview
demo-preview=../../demo/diff/Basic.vue
:::

## Custom Slots

Use `before` and `after` slots to compare any two pieces of content — different images, text, or components.

::: preview
demo-preview=../../demo/diff/Slots.vue
:::

## Grayscale

Combine `grayscale` with the pixelation mode for a retro monochrome look on the "after" side.

::: preview
demo-preview=../../demo/diff/Grayscale.vue
:::
