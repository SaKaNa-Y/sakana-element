---
title: Collapsible | Sakana Element
description: A simple toggle component to show or hide a single content block, inspired by Radix UI Collapsible.
---

<script setup>
import { collapsibleApi, collapsibleTriggerApi, collapsibleContentApi } from '../../apis/collapsible'
</script>

# Collapsible

A lightweight single-toggle component for showing and hiding content. Unlike `Collapse` (multi-panel accordion), `Collapsible` manages a single open/close state — perfect for toggleable sections, expandable details, or progressive disclosure patterns.

<ApiTable :sections="[...collapsibleApi, ...collapsibleTriggerApi, ...collapsibleContentApi]" lang="en" />

## Basic Usage

Click the trigger to toggle the content area.

::: preview
demo-preview=../../demo/collapsible/Basic.vue
:::

## Default Open

Use the `default-open` prop to start with the content expanded.

::: preview
demo-preview=../../demo/collapsible/DefaultOpen.vue
:::

## Disabled

Set `disabled` to prevent the collapsible from being toggled.

::: preview
demo-preview=../../demo/collapsible/Disabled.vue
:::

## Color Variants

Use the `color` prop with preset names or custom hex values.

::: preview
demo-preview=../../demo/collapsible/Color.vue
:::

## Ghost

Enable `ghost` mode for a borderless, shadowless appearance.

::: preview
demo-preview=../../demo/collapsible/Ghost.vue
:::

## Controlled State

Use `v-model` to control the open state from outside the component.

::: preview
demo-preview=../../demo/collapsible/Controlled.vue
:::
