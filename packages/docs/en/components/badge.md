---
title: Badge | Sakana Element
description: Pixel-style badge component for status indicators, labels, and tags in Vue 3.
---

<script setup>
import { badgeApi } from '../../apis/badge'
</script>

# Badge

A small status indicator component for labels and tags.


<ApiTable :sections="badgeApi" lang="en" />

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

## Icon

Use `icon` property to add a pixel icon inside the badge. Combines with text content.

::: preview
demo-preview=../../demo/badge/Icon.vue
:::

## Empty Badge

Omit slot content to render an empty dot indicator. Scales automatically with `size`.

::: preview
demo-preview=../../demo/badge/Empty.vue
:::

## Round

Use `round` property to apply pixel-style rounded corners.

::: preview
demo-preview=../../demo/badge/Round.vue
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

## Badge in Text

Badges can be placed inline within headings and paragraphs.

::: preview
demo-preview=../../demo/badge/InText.vue
:::

## Badge in Button

Badges can be nested inside buttons as count indicators or dot markers.

::: preview
demo-preview=../../demo/badge/InButton.vue
:::
