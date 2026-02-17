---
title: Select | Sakana Element
description: Pixel-style dropdown select component. Supports single selection, filterable, disabled, and custom options for Vue 3.
---

# Select

A dropdown selector component for selecting a value from a set of options.

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

## API

### Select Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | Binding value | `string \| number` | — |
| placeholder | Placeholder | `string` | `'Select'` |
| disabled | Disabled state | `boolean` | `false` |
| clearable | Show clear button | `boolean` | `false` |
| filterable | Filterable | `boolean` | `false` |

### Select Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when selected value changes | `(value: string \| number) => void` |
| visible-change | Triggered when dropdown visibility changes | `(visible: boolean) => void` |
| clear | Triggered when cleared | `() => void` |

### Option Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | Option value | `string \| number` | — |
| label | Option label | `string` | — |
| disabled | Disabled state | `boolean` | `false` |
