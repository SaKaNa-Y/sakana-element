---
title: Loading | Sakana Element
description: Pixel-style loading component with standalone indicator, fullscreen and area loading for Vue 3.
---

<script setup>
import { loadingApi, loadingIndicatorApi } from '../../apis/loading'
</script>

# Loading

Show animation while loading data.


<ApiTable :sections="[...loadingIndicatorApi, ...loadingApi]" lang="en" />

## Spinner Variants

`PxLoadingIndicator` is a standalone loading indicator with 4 pixel-art animation variants.

::: preview
demo-preview=../../demo/loading/Variant.vue
:::

## Sizes

Use `size` to control the indicator dimensions: `xs` (16px), `sm` (20px), `md` (24px), `lg` (32px).

::: preview
demo-preview=../../demo/loading/LoadingSize.vue
:::

## Types / Colors

Use `type` for preset theme colors or `color` for custom hex colors.

::: preview
demo-preview=../../demo/loading/LoadingType.vue
:::

## Area Loading

Display when loading data in a container. Uses `PxLoadingIndicator` internally.

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
