---
title: Badge | Sakana Element
description: Pixel-style badge component for status indicators, labels, and tags in Vue 3.
---

# Badge

A small status indicator component for labels and tags.

## Basic Usage

Basic badge display.

::: preview
demo-preview=../../demo/badge/Basic.vue
:::

## Types

Use `type` property to define different types.

::: preview
demo-preview=../../demo/badge/Type.vue
:::

## Sizes

Use `size` property to set the badge size.

::: preview
demo-preview=../../demo/badge/Size.vue
:::

## Outline

Use `outline` property to display a solid border with transparent background.

::: preview
demo-preview=../../demo/badge/Outline.vue
:::

## Dash

Use `dash` property to display a dashed border with a light background.

::: preview
demo-preview=../../demo/badge/Dash.vue
:::

## Custom Color

Use `color` property to set a custom hex color. Works with default, outline, and dash variants.

::: preview
demo-preview=../../demo/badge/CustomColor.vue
:::

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `'primary'` |
| size | Size | `'large' \| 'default' \| 'small'` | `'default'` |
| outline | Outline border style | `boolean` | `false` |
| dash | Dashed border style | `boolean` | `false` |
| color | Custom hex color | `string` | — |
| round | Rounded pixel corners | `boolean` | `false` |

### Slots

| Slot | Description |
| --- | --- |
| default | Badge content |
