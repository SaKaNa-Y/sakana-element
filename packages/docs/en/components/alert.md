---
title: Alert | Sakana Element
description: Pixel-style alert component with multiple types, closable, and custom descriptions for Vue 3.
---

<script setup>
import { alertApi } from '../../apis/alert'
</script>

# Alert

Used to display important alert messages on the page.


<ApiTable :sections="alertApi" lang="en" />

## Basic Usage

Use `type` property to define different types of alerts.

::: preview
demo-preview=../../demo/alert/Basic.vue
:::

## Theme

Use `effect` property to set the theme style: `light` or `dark`.

::: preview
demo-preview=../../demo/alert/Theme.vue
:::

## Closable

Use `closable` property to set whether it can be closed.

::: preview
demo-preview=../../demo/alert/Close.vue
:::

## Show Icon

Use `show-icon` property to display the type icon.

::: preview
demo-preview=../../demo/alert/ShowIcon.vue
:::

## With Description

Use `description` property to add description text.

::: preview
demo-preview=../../demo/alert/Desc.vue
:::

## Icon and Description

Use both icon and description together.

::: preview
demo-preview=../../demo/alert/IconDesc.vue
:::

## Centered Text

Use `center` property to center the content.

::: preview
demo-preview=../../demo/alert/TextCenter.vue
:::

## Outline

Use `outline` property to display a solid border with transparent background.

::: preview
demo-preview=../../demo/alert/Outline.vue
:::

## Dash

Use `dash` property to display a dashed border with a light background.

::: preview
demo-preview=../../demo/alert/Dash.vue
:::

## Custom Color

Use `color` property to set a custom hex color. Works with default, outline, and dash variants.

::: preview
demo-preview=../../demo/alert/CustomColor.vue
:::

