---
title: Switch | Sakana Element
description: Pixel-style toggle switch component with disabled state and custom colors for Vue 3.
---

<script setup>
import { switchApi } from '../../apis/switch'
</script>

# Switch

A toggle switch component for switching between two states.


<ApiTable :sections="switchApi" lang="en" />

## Basic Usage

Bind `v-model` to a `Boolean` type variable.

::: preview
demo-preview=../../demo/switch/Basic.vue
:::

## Type

Use `type` property to apply preset theme colors.

::: preview
demo-preview=../../demo/switch/Type.vue
:::

## Custom Color

Use `active-color` and `inactive-color` properties to set custom hex colors for on/off states.

::: preview
demo-preview=../../demo/switch/CustomColor.vue
:::

## Different Sizes

Use `size` property to set the switch size.

::: preview
demo-preview=../../demo/switch/Size.vue
:::

## Icon

Use `active-icon` and `inactive-icon` properties to display an icon inside the switch thumb.

::: preview
demo-preview=../../demo/switch/Icon.vue
:::

## Disabled State

Use `disabled` property to disable the switch.

::: preview
demo-preview=../../demo/switch/Disabled.vue
:::
