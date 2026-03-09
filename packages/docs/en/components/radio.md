---
title: Radio | Sakana Element
description: Pixel-style radio component with sizes, type colors, custom colors, and group support for Vue 3.
---

<script setup>
import { radioApi, radioGroupApi } from '../../apis/radio'
</script>

# Radio

A radio component for selecting a single option from a set, with support for groups.


<ApiTable :sections="[...radioApi, ...radioGroupApi]" lang="en" />

## Basic Usage

Bind `v-model` to a variable and set the `value` prop. The radio is checked when `modelValue === value`.

::: preview
demo-preview=../../demo/radio/Basic.vue
:::

## Disabled State

Use `disabled` property to disable the radio.

::: preview
demo-preview=../../demo/radio/Disabled.vue
:::

## Type

Use `type` property to apply preset theme colors.

::: preview
demo-preview=../../demo/radio/Type.vue
:::

## Custom Color

Use `color` property to set a custom hex color for the checked state.

::: preview
demo-preview=../../demo/radio/CustomColor.vue
:::

## Different Sizes

Use `size` property to set the radio size.

::: preview
demo-preview=../../demo/radio/Size.vue
:::

## Radio Group

Use `PxRadioGroup` to manage multiple radios with a single `v-model`. Only one radio can be selected at a time.

::: preview
demo-preview=../../demo/radio/Group.vue
:::
