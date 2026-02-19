---
title: Switch | Sakana Element
description: Pixel-style toggle switch component with disabled state and custom colors for Vue 3.
---

<script setup>
import { switchApi } from '../../api/switch'
</script>

# Switch

A toggle switch component for switching between two states.


<ApiTable :sections="switchApi" lang="en" />

## Basic Usage

Bind `v-model` to a `Boolean` type variable.

::: preview
demo-preview=../../demo/switch/Basic.vue
:::

## Different Sizes

Use `size` property to set the switch size.

::: preview
demo-preview=../../demo/switch/Size.vue
:::

## Disabled State

Use `disabled` property to disable the switch.

::: preview
demo-preview=../../demo/switch/Disabled.vue
:::

