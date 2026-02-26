---
title: Pixelate | Sakana Element
description: Canvas-based image pixelation component with adjustable pixel size, grayscale, and palette mapping for Vue 3.
---

<script setup>
import { pixelateApi } from '../../apis/pixelate'
</script>

# Pixelate

A canvas-based image pixelation component. Converts any image into pixel-art style with configurable block size, grayscale mode, and custom color palette mapping.

> Inspired by [Pixelium Design](https://shika-works.github.io/pixelium-design/zh/fabulous-idea/pixelate) and [Pixel-UI Pixelit](https://maomentai817.github.io/pixel-ui/components/pixelit.html).

> [!NOTE]
> The demo images have no particular meaning — they are just colorful samples to showcase the pixelation effect.

<ApiTable :sections="pixelateApi" lang="en" />

## Basic Usage

Provide an image `src` to pixelate it with the default pixel size of 8.

::: preview
demo-preview=../../demo/pixelate/Basic.vue
:::

## Pixel Size

Use `pixel-size` to control the level of pixelation. Higher values produce larger pixel blocks.

::: preview
demo-preview=../../demo/pixelate/PixelSize.vue
:::

## Grayscale

Enable `grayscale` to convert the pixelated output to grayscale using the ITU-R BT.601 luma formula.

::: preview
demo-preview=../../demo/pixelate/Grayscale.vue
:::

## Custom Palette

Use `palette` to map pixel colors to a limited set. Supports hex strings (e.g. `'#FF0000'`) or RGB tuples (e.g. `[255, 0, 0]`). Each pixel block is mapped to the nearest palette color using Euclidean distance in RGB space.

::: preview
demo-preview=../../demo/pixelate/Palette.vue
:::

## Dimensions

Use `width` and `height` to control the rendered size. Accepts numbers (pixels) or strings (CSS units like `'50%'`).

::: preview
demo-preview=../../demo/pixelate/Dimensions.vue
:::

## Exposed Methods

Access the component instance via a template ref to call `render()`, `getSize()`, and `getImageData()`.

::: preview
demo-preview=../../demo/pixelate/ExposedMethods.vue
:::
