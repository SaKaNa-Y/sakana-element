---
title: Select | Sakana Element
description: Pixel-style dropdown select component. Supports single selection, filterable, clearable, ghost style, sizes, and custom options for Vue 3.
---

<script setup>
import { selectApi, optionApi } from '../../apis/select'
</script>

# Select

A dropdown selector component for selecting a value from a set of options.

<ApiTable :sections="[...selectApi, ...optionApi]" lang="en" />

## Basic Usage

Basic usage of the select component with `<px-option>` slot children.

::: preview
demo-preview=../../demo/select/Basic.vue
:::

## Disabled Options

Use `disabled` property on individual options to disable certain choices.

::: preview
demo-preview=../../demo/select/Disabled.vue
:::

## Disabled Select

Set `disabled` on the select component itself to disable the entire dropdown.

::: preview
demo-preview=../../demo/select/DisabledSelect.vue
:::

## Clearable

Set `clearable` to allow the user to clear the selected value. Hover to reveal the clear icon.

::: preview
demo-preview=../../demo/select/Clearable.vue
:::

## Filterable

Set `filterable` to enable typing to filter options. Supports custom `filter-method` and `remote-method` for advanced use cases.

::: preview
demo-preview=../../demo/select/Filterable.vue
:::

## Ghost Style

Set `ghost` for a borderless, transparent input that only shows its border on hover or focus — matching the `PxInput` ghost style.

::: preview
demo-preview=../../demo/select/Ghost.vue
:::

## Select Colors

Use `color` with a preset theme name (`primary`, `success`, `warning`, `danger`, `info`) to color the input border, selected indicator, and highlighted item.

::: preview
demo-preview=../../demo/select/Color.vue
:::

## Custom Colors

Pass any hex color string to `color` for fully custom theming. Works with both default and `ghost` styles.

::: preview
demo-preview=../../demo/select/CustomColor.vue
:::

## Different Sizes

Use `size` to control the select height and menu item dimensions. Supports `large` and `small`.

::: preview
demo-preview=../../demo/select/Size.vue
:::
