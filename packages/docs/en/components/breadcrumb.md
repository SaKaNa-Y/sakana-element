---
title: Breadcrumb | Sakana Element
description: Pixel-style breadcrumb navigation component for Vue 3 with customizable separators and icons.
---

<script setup>
import { breadcrumbApi, breadcrumbItemApi } from '../../apis/breadcrumb'
</script>

# Breadcrumb

Displays the current page's location within a navigational hierarchy.

<ApiTable :sections="[...breadcrumbApi, ...breadcrumbItemApi]" lang="en" />

## Basic Usage

The simplest breadcrumb with text items. Items with a `to` prop render as links; the last item (without `to`) is shown as the current page.

::: preview
demo-preview=../../demo/breadcrumb/Basic.vue
:::

## With Icons

Add pixel icons to breadcrumb items using the `icon` prop.

::: preview
demo-preview=../../demo/breadcrumb/WithIcons.vue
:::

## Disabled

Use the `disabled` prop to disable a breadcrumb item. Disabled items are not clickable.

::: preview
demo-preview=../../demo/breadcrumb/Disabled.vue
:::

## Custom Separator

Use the `separator` prop for a simple text separator, or the `#separator` slot for a custom component (e.g. an icon).

::: preview
demo-preview=../../demo/breadcrumb/CustomSeparator.vue
:::
