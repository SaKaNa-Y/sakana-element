---
title: Dropdown | Sakana Element
description: Pixel-style dropdown menu component with multi-level support and custom triggers for Vue 3.
---

<script setup>
import { dropdownApi, dropdownItemApi } from '../../api/dropdown'
</script>

# Dropdown

Toggleable menu for displaying lists of links and actions.


<ApiTable :sections="[...dropdownApi, ...dropdownItemApi]" lang="en" />

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

