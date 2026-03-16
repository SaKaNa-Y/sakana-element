---
title: Resizable | Sakana Element
description: Pixel-style resizable panel component for Sakana Element. Build flexible layouts with draggable dividers, min/max constraints, collapsible panels, and keyboard support.
---

<script setup>
import { resizableGroupApi, resizablePanelApi, resizableHandleApi } from '../../apis/resizable'
</script>

# Resizable

Build flexible layouts with resizable panels separated by draggable dividers.


<ApiTable :sections="[...resizableGroupApi, ...resizablePanelApi, ...resizableHandleApi]" lang="en" />

## Basic Usage

A horizontal two-panel layout. Drag the handle to resize.

::: preview
demo-preview=../../demo/resizable/Basic.vue
:::

## Vertical Direction

Use `direction="vertical"` for top/bottom split.

::: preview
demo-preview=../../demo/resizable/Vertical.vue
:::

## Three Panels

Multiple panels with handles between each pair.

::: preview
demo-preview=../../demo/resizable/ThreePanel.vue
:::

## Min / Max Size

Use `min-size` and `max-size` to constrain panel sizes.

::: preview
demo-preview=../../demo/resizable/MinMax.vue
:::

## Collapsible Panel

Set `collapsible` on a panel to allow collapsing it to `collapsed-size`. Use exposed `collapse()` and `expand()` methods.

::: preview
demo-preview=../../demo/resizable/Collapsible.vue
:::

## Nested Layout

Nest `ResizableGroup` components with different directions for complex layouts.

::: preview
demo-preview=../../demo/resizable/Nested.vue
:::

## Auto Save

Set `auto-save-id` to persist layout to localStorage. The layout restores on page reload.

::: preview
demo-preview=../../demo/resizable/AutoSave.vue
:::
