---
title: Tooltip | Sakana Element
description: Pixel-style tooltip component showing details on hover for Vue 3.
---

# Tooltip

Display prompt information on mouse hover.

## Basic Usage

Use `content` attribute to set the tooltip content.

::: preview
demo-preview=../../demo/tooltip/Basic.vue
:::

## Placement

Use `placement` attribute to set the tooltip position.

::: preview
demo-preview=../../demo/tooltip/Placement.vue
:::

## Trigger

Use `trigger` attribute to set the trigger mode.

::: preview
demo-preview=../../demo/tooltip/Trigger.vue
:::

## Disabled

Use `disabled` attribute to disable the tooltip.

::: preview
demo-preview=../../demo/tooltip/Disabled.vue
:::

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Display content | `string` | — |
| placement | Position | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'bottom'` |
| trigger | Trigger mode | `'hover' \| 'click' \| 'contextmenu'` | `'hover'` |
| disabled | Whether disabled | `boolean` | `false` |
| manual | Manual control mode | `boolean` | `false` |
| showTimeout | Show delay (ms) | `number` | `0` |
| hideTimeout | Hide delay (ms) | `number` | `200` |
| transition | Transition name | `string` | `'fade'` |
| popperOptions | popper.js options | `object` | — |

### Events

| Event | Description | Parameters |
| --- | --- | --- |
| visible-change | Triggered when visibility changes | `(visible: boolean) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Element that triggers Tooltip |
| content | Custom content |

### Exposes

| Property | Description | Type |
| --- | --- | --- |
| show | Show Tooltip | `() => void` |
| hide | Hide Tooltip | `() => void` |
