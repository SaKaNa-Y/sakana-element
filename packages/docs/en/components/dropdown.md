# Dropdown

Toggleable menu for displaying lists of links and actions.

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

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Menu items | `DropdownItemProps[]` | — |
| trigger | Trigger mode | `'hover' \| 'click' \| 'contextmenu'` | `'hover'` |
| type | Button type | `ButtonType` | — |
| size | Button size | `'large' \| 'default' \| 'small'` | `'default'` |
| splitButton | Whether to use split button | `boolean` | `false` |
| hideOnClick | Whether to hide menu on click | `boolean` | `true` |
| placement | Menu placement | `Placement` | `'bottom'` |
| disabled | Whether disabled | `boolean` | `false` |

### DropdownItem Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| command | Command | `string \| number` | — |
| label | Display text | `string \| VNode` | — |
| disabled | Whether disabled | `boolean` | `false` |
| divided | Whether to show divider | `boolean` | `false` |

### Events

| Event | Description | Parameters |
| --- | --- | --- |
| command | Triggered when menu item clicked | `(command: string \| number) => void` |
| visible-change | Triggered when menu visibility changes | `(visible: boolean) => void` |
| click | Triggered when split button left part clicked | `(event: MouseEvent) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Element that triggers dropdown |
| dropdown | Dropdown content, usually `<px-dropdown-item>` |

### Exposes

| Property | Description | Type |
| --- | --- | --- |
| open | Open dropdown | `() => void` |
| close | Close dropdown | `() => void` |
