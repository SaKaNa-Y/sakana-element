---
title: Input | Sakana Element
description: Pixel-style text input component for Sakana Element. Supports color variants, ghost style, clearable, password, prefix/suffix icons, native HTML types, and disabled state for Vue 3.
---

<script setup>
import { inputApi } from '../../apis/input'
</script>

# Input

A text input component for receiving user input.


<ApiTable :sections="inputApi" lang="en" />

## Basic Usage

Basic usage of the input component.

::: preview
demo-preview=../../demo/input/Basic.vue
:::

## Input Colors

Use the `color` prop to apply preset theme colors to the input border and shadow.

::: preview
demo-preview=../../demo/input/Color.vue
:::

## Custom Colors

Pass any hex color string to the `color` prop for fully custom colored inputs. Combine with `ghost` for transparent-at-rest variants.

::: preview
demo-preview=../../demo/input/CustomColor.vue
:::

## Ghost Style

Use the `ghost` prop to create borderless inputs that reveal their border and shadow on hover/focus. Works with both preset and custom colors.

::: preview
demo-preview=../../demo/input/Ghost.vue
:::

## Different Sizes

Use `size` property to set the input size.

::: preview
demo-preview=../../demo/input/Size.vue
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

## Prefix & Suffix

Use `prefix-icon` / `suffix-icon` properties or `prefix` / `suffix` slots to add content before or after the input.

::: preview
demo-preview=../../demo/input/PrefixSuffix.vue
:::

## Native Types

The `type` prop supports all native HTML input types. Here are examples with `date`, `time`, and `url`.

::: preview
demo-preview=../../demo/input/NativeTypes.vue
:::

## URL with Validation

Combine a `url` type input with Form validation for URL format checking.

::: preview
demo-preview=../../demo/input/UrlValidation.vue
:::
