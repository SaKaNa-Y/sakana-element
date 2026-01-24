# Popconfirm

A simple confirmation dialog of an element click action.

## Basic Usage

::: preview
demo-preview=../../demo/popconfirm/Basic.vue
:::

## Customize

Customize button text and icon.

::: preview
demo-preview=../../demo/popconfirm/Custom.vue
:::

## Hide Icon

Set `hide-icon` to hide the icon.

::: preview
demo-preview=../../demo/popconfirm/HideIcon.vue
:::

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `string` | — |
| confirmButtonText | Confirm button text | `string` | `'Confirm'` |
| cancelButtonText | Cancel button text | `string` | `'Cancel'` |
| confirmButtonType | Confirm button type | `ButtonType` | `'primary'` |
| cancelButtonType | Cancel button type | `ButtonType` | — |
| icon | Icon | `string` | `'question-circle'` |
| iconColor | Icon color | `string` | `'#f90'` |
| hideIcon | Whether to hide icon | `boolean` | `false` |
| hideAfter | Hide delay (ms) | `number` | `200` |
| width | Popover width | `number \| string` | `150` |

### Events

| Event | Description | Parameters |
| --- | --- | --- |
| confirm | Triggered when confirm button clicked | `(event: MouseEvent) => void` |
| cancel | Triggered when cancel button clicked | `(event: MouseEvent) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Element that triggers Popconfirm |
| reference | Same as default |
