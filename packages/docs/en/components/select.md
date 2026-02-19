---
title: Select | Sakana Element
description: Pixel-style dropdown select component. Supports single selection, filterable, disabled, and custom options for Vue 3.
---

<script setup>
import { selectApi, optionApi } from '../../api/select'
</script>

# Select

A dropdown selector component for selecting a value from a set of options.


<ApiTable :sections="[...selectApi, ...optionApi]" lang="en" />

## Basic Usage

Basic usage of the select component.

::: preview
demo-preview=../../demo/select/Basic.vue
:::

## Disabled Options

Use `disabled` property on options to disable certain options.

::: preview
demo-preview=../../demo/select/Disabled.vue
:::

