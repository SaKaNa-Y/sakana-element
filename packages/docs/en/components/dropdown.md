---
title: Dropdown | Sakana Element
description: Pixel-style dropdown menu component with multi-level support and custom triggers for Vue 3.
---

<script setup>
import { dropdownApi, dropdownItemApi, dropdownKeyboardApi } from '../../apis/dropdown'
</script>

# Dropdown

Toggleable menu for displaying lists of links and actions.


<ApiTable :sections="[...dropdownApi, ...dropdownItemApi, ...dropdownKeyboardApi]" lang="en" />

## Basic Usage

Hover on the dropdown menu to unfold it for more actions.

::: preview
demo-preview=../../demo/dropdown/Basic.vue
:::

## Trigger

Configure click or hover to trigger.

::: preview
demo-preview=../../demo/dropdown/Trigger.vue
:::

## Split Button

Use `split-button` to split the dropdown button.

::: preview
demo-preview=../../demo/dropdown/Split.vue
:::

## Disabled Items

Use `disabled` attribute to disable certain items.

::: preview
demo-preview=../../demo/dropdown/Disabled.vue
:::

## Icon Items

Use `icon` property on items to show pixel icons alongside labels.

::: preview
demo-preview=../../demo/dropdown/Icon.vue
:::

## Max Height

Use `max-height` to limit the menu height when there are many items.

::: preview
demo-preview=../../demo/dropdown/MaxHeight.vue
:::

## Arrow

Use `show-arrow` to display a pixel-art arrow pointing from the dropdown panel to the trigger.

::: preview
demo-preview=../../demo/dropdown/Arrow.vue
:::

## Custom Hover Color

Use `hover-color` to customize the background color of menu items on hover.

::: preview
demo-preview=../../demo/dropdown/HoverColor.vue
:::

## Keyboard Navigation

The dropdown supports full keyboard navigation. Press Arrow keys to move between items, Enter to select, and Escape to close.

::: preview
demo-preview=../../demo/dropdown/Keyboard.vue
:::

