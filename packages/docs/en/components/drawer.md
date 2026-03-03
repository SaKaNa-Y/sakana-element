---
title: Drawer | Sakana Element
description: Pixel-style drawer sidebar component with overlay and transitions for Vue 3.
---

<script setup>
import { drawerApi } from '../../apis/drawer'
</script>

# Drawer

A pixel-art sidebar panel that slides in from the edge of the screen.


<ApiTable :sections="drawerApi" lang="en" />

## Basic Usage

Use `v-model` to control the drawer open/close state. Content goes in the `sidebar` slot.

::: preview
demo-preview=../../demo/drawer/Basic.vue
:::

## Placement

Use `placement` to slide the drawer from the left or right edge.

::: preview
demo-preview=../../demo/drawer/Placement.vue
:::

## Custom Size

Use `size` to set the drawer width. Accepts any CSS width value.

::: preview
demo-preview=../../demo/drawer/Size.vue
:::

## Overlay

Control the backdrop overlay with `show-overlay` and `close-on-click-overlay`.

::: preview
demo-preview=../../demo/drawer/Overlay.vue
:::

## Title

Use the `title` prop to render a header with a pixel-dashed divider.

::: preview
demo-preview=../../demo/drawer/Title.vue
:::

## Disable Escape Close

Set `close-on-esc` to `false` to prevent the drawer from closing on Escape key press.

::: preview
demo-preview=../../demo/drawer/NoEsc.vue
:::
