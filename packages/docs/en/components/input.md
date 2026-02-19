---
title: Input | Sakana Element
description: Pixel-style text input component for Sakana Element. Supports clearable, password, prefix/suffix icons, and disabled state for Vue 3.
---

<script setup>
import { inputApi } from '../../api/input'
</script>

# Input

A text input component for receiving user input.


<ApiTable :sections="inputApi" lang="en" />

## Basic Usage

Basic usage of the input component.

::: preview
demo-preview=../../demo/input/Basic.vue
:::

## Disabled & Readonly

Use `disabled` and `readonly` properties to control the input state.

::: preview
demo-preview=../../demo/input/Disabled.vue
:::

## Clearable

Use `clearable` property to enable the clear button.

::: preview
demo-preview=../../demo/input/Clearable.vue
:::

## Password

Use `type="password"` and `show-password` properties to create a password input.

::: preview
demo-preview=../../demo/input/Password.vue
:::

## Different Sizes

Use `size` property to set the input size.

::: preview
demo-preview=../../demo/input/Size.vue
:::

## Prefix & Suffix

Use `prefix-icon` / `suffix-icon` properties or `prefix` / `suffix` slots to add content before or after the input.

::: preview
demo-preview=../../demo/input/PrefixSuffix.vue
:::

