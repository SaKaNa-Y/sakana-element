---
title: Loading | Sakana Element
description: Pixel-style loading component with fullscreen and area loading for Vue 3.
---

<script setup>
import { loadingApi } from '../../api/loading'
</script>

# Loading

Show animation while loading data.


<ApiTable :sections="loadingApi" lang="en" />

## Area Loading

Display when loading data in a container.

::: preview
demo-preview=../../demo/loading/Basic.vue
:::

## Customization

You can customize loading text, background color, etc.

::: preview
demo-preview=../../demo/loading/Custom.vue
:::

## Fullscreen Loading

Use fullscreen loading.

::: preview
demo-preview=../../demo/loading/Fullscreen.vue
:::

## Service

Loading can also be invoked as a service.

::: preview
demo-preview=../../demo/loading/Service.vue
:::

