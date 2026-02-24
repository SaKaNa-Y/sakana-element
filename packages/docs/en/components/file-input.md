---
title: FileInput | Sakana Element
description: Pixel-style file input component for Sakana Element. Supports color variants, ghost style, clearable, multiple files, accept filter, and size options for Vue 3.
---

<script setup>
import { fileInputApi } from '../../apis/file-input'
</script>

# FileInput

A file input component for selecting files with pixel-art styling.


<ApiTable :sections="fileInputApi" lang="en" />

## Basic Usage

Basic usage of the file input component.

::: preview
demo-preview=../../demo/file-input/Basic.vue
:::

## File Input Colors

Use the `color` prop to apply preset theme colors to the file input border and shadow.

::: preview
demo-preview=../../demo/file-input/Color.vue
:::

## Custom Colors

Pass any hex color string to the `color` prop for fully custom colored file inputs.

::: preview
demo-preview=../../demo/file-input/CustomColor.vue
:::

## Ghost Style

Use the `ghost` prop to create borderless file inputs that reveal their border and shadow on hover. Works with both preset and custom colors.

::: preview
demo-preview=../../demo/file-input/Ghost.vue
:::

## Different Sizes

Use `size` property to set the file input size.

::: preview
demo-preview=../../demo/file-input/Size.vue
:::

## Disabled

Use `disabled` property to disable the file input.

::: preview
demo-preview=../../demo/file-input/Disabled.vue
:::

## Clearable

Use `clearable` property to enable the clear button after a file is selected.

::: preview
demo-preview=../../demo/file-input/Clearable.vue
:::

## Multiple Files

Use `multiple` property to allow selecting multiple files.

::: preview
demo-preview=../../demo/file-input/Multiple.vue
:::

## Accept Filter

Use `accept` property to restrict file types.

::: preview
demo-preview=../../demo/file-input/Accept.vue
:::
