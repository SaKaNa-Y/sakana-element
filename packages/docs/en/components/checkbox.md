---
title: Checkbox | Sakana Element
description: Pixel-style checkbox component with indeterminate state, sizes, colors, group support, and min/max constraints for Vue 3.
---

<script setup>
import { checkboxApi, checkboxGroupApi } from '../../apis/checkbox'
</script>

# Checkbox

A checkbox component for toggling between checked and unchecked states, with support for groups.


<ApiTable :sections="[...checkboxApi, ...checkboxGroupApi]" lang="en" />

## Basic Usage

Bind `v-model` to a `Boolean` type variable.

::: preview
demo-preview=../../demo/checkbox/Basic.vue
:::

## Disabled State

Use `disabled` property to disable the checkbox.

::: preview
demo-preview=../../demo/checkbox/Disabled.vue
:::

## Type

Use `type` property to apply preset theme colors.

::: preview
demo-preview=../../demo/checkbox/Type.vue
:::

## Custom Color

Use `color` property to set a custom hex color for the checked state.

::: preview
demo-preview=../../demo/checkbox/CustomColor.vue
:::

## Different Sizes

Use `size` property to set the checkbox size.

::: preview
demo-preview=../../demo/checkbox/Size.vue
:::

## Checkbox Group

Use `PxCheckboxGroup` to manage multiple checkboxes with a single `v-model` array.

::: preview
demo-preview=../../demo/checkbox/Group.vue
:::

## Indeterminate

Use `indeterminate` property for a half-checked state. This is commonly used for "Select All" patterns.

::: preview
demo-preview=../../demo/checkbox/Indeterminate.vue
:::

## Group with Min / Max

Use `min` and `max` properties on the group to constrain the number of checked items.

::: preview
demo-preview=../../demo/checkbox/GroupMinMax.vue
:::
