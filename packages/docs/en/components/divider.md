---
title: Divider | Sakana Element
description: Pixel-style divider component with text content, direction, type colors, custom colors, and border styles for Vue 3.
---

<script setup>
import { dividerApi } from '../../apis/divider'
</script>

# Divider

A divider component for separating content with optional text, supporting horizontal and vertical directions.


<ApiTable :sections="dividerApi" lang="en" />

## Basic Usage

Use `px-divider` to separate content. You can add text via the `content` prop or the default slot.

::: preview
demo-preview=../../demo/divider/Basic.vue
:::

## Vertical

Use `direction="vertical"` for inline vertical separators. Vertical dividers do not render content.

::: preview
demo-preview=../../demo/divider/Vertical.vue
:::

## Content Position

Use `content-position` to control where the text appears on the divider line.

::: preview
demo-preview=../../demo/divider/ContentPosition.vue
:::

## Type

Use `type` property to apply preset theme colors to the divider.

::: preview
demo-preview=../../demo/divider/Type.vue
:::

## Custom Color

Use `color` property to set a custom hex color for the divider line and text.

::: preview
demo-preview=../../demo/divider/CustomColor.vue
:::

## Border Style

Use `border-style` property to change the line pattern. Supports `solid`, `dashed`, and `dotted` with pixel-art patterns.

::: preview
demo-preview=../../demo/divider/BorderStyle.vue
:::
