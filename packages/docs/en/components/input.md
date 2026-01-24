# Input

A text input component for receiving user input.

## Basic Usage

Basic usage of the input component.

::: preview
demo-preview=../../demo/input/Basic.vue
:::

## Different Sizes

Use `size` property to set the input size.

::: preview
demo-preview=../../demo/input/Size.vue
:::

## Clearable

Use `clearable` property to enable the clear button.

::: preview
demo-preview=../../demo/input/Clearable.vue
:::

## Password

Use `type="password"` and `show-password` properties to create a password input.

::: preview
demo-preview=../../demo/input/Password.vue
:::

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| model-value / v-model | Binding value | `string` | — |
| type | Input type | `'text' \| 'password' \| 'textarea'` | `'text'` |
| placeholder | Placeholder | `string` | — |
| disabled | Disabled state | `boolean` | `false` |
| readonly | Read-only state | `boolean` | `false` |
| clearable | Show clear button | `boolean` | `false` |
| show-password | Show password toggle button | `boolean` | `false` |
| size | Size | `'large' \| 'default' \| 'small'` | `'default'` |
| prefix-icon | Prefix icon | `string` | — |
| suffix-icon | Suffix icon | `string` | — |

### Events

| Event | Description | Type |
| --- | --- | --- |
| input | Triggered on input | `(value: string) => void` |
| change | Triggered when value changes | `(value: string) => void` |
| focus | Triggered on focus | `(event: FocusEvent) => void` |
| blur | Triggered on blur | `(event: FocusEvent) => void` |
| clear | Triggered when cleared | `() => void` |

### Slots

| Slot | Description |
| --- | --- |
| prefix | Prefix content |
| suffix | Suffix content |
| prepend | Prepend content |
| append | Append content |

### Exposes

| Property | Description | Type |
| --- | --- | --- |
| ref | Input HTML element | `Ref<HTMLInputElement>` |
| focus | Focus the input | `() => void` |
| blur | Blur the input | `() => void` |
| clear | Clear the input value | `() => void` |
