# Alert

Used to display important alert messages on the page.

## Basic Usage

Use `type` property to define different types of alerts.

::: preview
demo-preview=../../demo/alert/Basic.vue
:::

## Theme

Use `effect` property to set the theme style: `light` or `dark`.

::: preview
demo-preview=../../demo/alert/Theme.vue
:::

## Closable

Use `closable` property to set whether it can be closed.

::: preview
demo-preview=../../demo/alert/Close.vue
:::

## Show Icon

Use `show-icon` property to display the type icon.

::: preview
demo-preview=../../demo/alert/ShowIcon.vue
:::

## With Description

Use `description` property to add description text.

::: preview
demo-preview=../../demo/alert/Desc.vue
:::

## Icon and Description

Use both icon and description together.

::: preview
demo-preview=../../demo/alert/IconDesc.vue
:::

## Centered Text

Use `center` property to center the content.

::: preview
demo-preview=../../demo/alert/TextCenter.vue
:::

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `string` | — |
| type | Type | `'success' \| 'warning' \| 'info' \| 'danger'` | `'info'` |
| description | Description text | `string` | — |
| closable | Closable | `boolean` | `true` |
| center | Center text | `boolean` | `false` |
| close-text | Close button text | `string` | — |
| show-icon | Show icon | `boolean` | `false` |
| effect | Theme style | `'light' \| 'dark'` | `'light'` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| close | Triggered when closed | `() => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Default content |
| title | Title content |
