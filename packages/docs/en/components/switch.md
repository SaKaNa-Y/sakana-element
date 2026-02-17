---
title: Switch | Sakana Element
description: Pixel-style toggle switch component with disabled state and custom colors for Vue 3.
---

# Switch

A toggle switch component for switching between two states.

## Basic Usage

Bind `v-model` to a `Boolean` type variable.

::: preview
demo-preview=../../demo/switch/Basic.vue
:::

## Different Sizes

Use `size` property to set the switch size.

::: preview
demo-preview=../../demo/switch/Size.vue
:::

## Disabled State

Use `disabled` property to disable the switch.

::: preview
demo-preview=../../demo/switch/Disabled.vue
:::

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | Binding value | `boolean` | `false` |
| disabled | Disabled state | `boolean` | `false` |
| size | Size | `'large' \| 'default' \| 'small'` | `'default'` |
| active-text | Text when on | `string` | — |
| inactive-text | Text when off | `string` | — |
| active-value | Value when on | `boolean \| string \| number` | `true` |
| inactive-value | Value when off | `boolean \| string \| number` | `false` |
| name | Native name attribute | `string` | — |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when state changes | `(value: boolean) => void` |

### Exposes

| Property | Description | Type |
| --- | --- | --- |
| ref | Switch HTML element | `Ref<HTMLInputElement>` |
