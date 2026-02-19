---
title: Collapse | Sakana Element
description: Pixel-style collapsible panel component with accordion mode for Vue 3.
---

<script setup>
import { collapseApi, collapseItemApi } from '../../api/collapse'
</script>

# Collapse

A content area that can be collapsed or expanded.


<ApiTable :sections="[...collapseApi, ...collapseItemApi]" lang="en" />

## Basic Usage

Multiple panels can be expanded at the same time without affecting each other.

::: preview
demo-preview=../../demo/collapse/Basic.vue
:::

## Accordion Mode

Use `accordion` property to enable accordion mode, where only one panel can be expanded at a time.

::: preview
demo-preview=../../demo/collapse/Accordion.vue
:::

## Custom Title

Use `title` slot to customize the title content.

::: preview
demo-preview=../../demo/collapse/CustomTitle.vue
:::

## Disabled State

Use `disabled` property to disable the panel.

::: preview
demo-preview=../../demo/collapse/Disabled.vue
:::

