---
title: Popconfirm | Sakana Element
description: Pixel-style popconfirm component for lightweight confirmation interactions in Vue 3.
---

<script setup>
import { popconfirmApi } from '../../apis/popconfirm'
</script>

# Popconfirm

A simple confirmation dialog of an element click action.


<ApiTable :sections="popconfirmApi" lang="en" />

## Basic Usage

::: preview
demo-preview=../../demo/popconfirm/Basic.vue
:::

## Customize

Customize button text and icon.

::: preview
demo-preview=../../demo/popconfirm/Custom.vue
:::

## Placement

Use `placement` to set the pop-up position.

::: preview
demo-preview=../../demo/popconfirm/Placement.vue
:::

## Arrow

Set `show-arrow` to display a pixel-art arrow pointing to the trigger.

::: preview
demo-preview=../../demo/popconfirm/Arrow.vue
:::

## Effect

Use `effect` to switch between dark and light themes.

::: preview
demo-preview=../../demo/popconfirm/Effect.vue
:::

## Hide Icon

Set `hide-icon` to hide the icon.

::: preview
demo-preview=../../demo/popconfirm/HideIcon.vue
:::

## Disabled

Set `disabled` to prevent the popconfirm from showing.

::: preview
demo-preview=../../demo/popconfirm/Disabled.vue
:::
