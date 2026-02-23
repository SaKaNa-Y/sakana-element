---
title: Avatar | Sakana Element
description: Pixel-style avatar component for displaying user initials in Vue 3.
---

<script setup>
import { avatarApi } from '../../apis/avatar'
</script>

# Avatar

A pixel-style avatar component for displaying user initials.


<ApiTable :sections="avatarApi" lang="en" />

## Basic Usage

Display text initials inside an avatar.

::: preview
demo-preview=../../demo/avatar/Basic.vue
:::

## Sizes

Use `size` property to set the avatar size.

::: preview
demo-preview=../../demo/avatar/Size.vue
:::

## Shapes

Use `shape` property to switch between circle (default) and square.

::: preview
demo-preview=../../demo/avatar/Shape.vue
:::

## Border

Use `:border="false"` to hide the pixel-style border (shown by default).

::: preview
demo-preview=../../demo/avatar/Border.vue
:::

## Status Indicator

Use `status` property to show an indicator dot. Set to `'online'` for green or `'offline'` for gray. Omit the prop to hide the indicator.

::: preview
demo-preview=../../demo/avatar/Online.vue
:::

## Custom Color

Use `color` property to set a custom hex background color.

::: preview
demo-preview=../../demo/avatar/CustomColor.vue
:::
