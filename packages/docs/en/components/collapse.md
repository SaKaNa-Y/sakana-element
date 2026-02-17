---
title: Collapse | Sakana Element
description: Pixel-style collapsible panel component with accordion mode for Vue 3.
---

# Collapse

A content area that can be collapsed or expanded.

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

## API

### Collapse Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | Currently active panels | `string \| string[]` | — |
| accordion | Enable accordion mode | `boolean` | `false` |

### Collapse Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when active panels change | `(activeNames: string \| string[]) => void` |

### CollapseItem Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | Unique identifier | `string` | — |
| title | Title | `string` | — |
| disabled | Disabled state | `boolean` | `false` |

### CollapseItem Slots

| Slot | Description |
| --- | --- |
| default | Panel content |
| title | Custom title |
