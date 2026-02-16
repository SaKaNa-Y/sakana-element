# Button

Commonly used button component with pixel-style visual effects.

## Basic Usage

Use `type`, `plain`, `round` and `circle` properties to define button styles.

::: preview
demo-preview=../../demo/button/Basic.vue
:::

## Disabled State

Use `disabled` property to disable the button.

::: preview
demo-preview=../../demo/button/Disabled.vue
:::

## Different Sizes

Use `size` property to set the button size.

::: preview
demo-preview=../../demo/button/Size.vue
:::

## Icon Button

Use `icon` property to add an icon to the button.

::: preview
demo-preview=../../demo/button/Icon.vue
:::

## Dash Border

Use `dash` property to apply a dashed border style. The pixel `clip-path` border is replaced with a CSS dashed border for a hand-drawn/cutout feel.

::: preview
demo-preview=../../demo/button/Dash.vue
:::

## Ghost Button

Use `ghost` property to create a borderless, background-free button. Only the text is visible — a subtle fill appears on hover.

::: preview
demo-preview=../../demo/button/Ghost.vue
:::

## Loading State

Use `loading` property to set the button's loading state.

::: preview
demo-preview=../../demo/button/Loading.vue
:::

## Button Group

Use `<px-button-group>` component to group multiple buttons.

::: preview
demo-preview=../../demo/button/Group.vue
:::

## Custom Color

Use `color` property to set a custom button color. The text color, hover state, active state, and disabled state are auto-generated from the provided color.

::: preview
demo-preview=../../demo/button/Color.vue
:::

## Login Button

Combine `icon` and `color` props to create social login buttons. All 486 pixelarticons are bundled — icons like `github` and `mail` work out of the box.

::: preview
demo-preview=../../demo/button/Login.vue
:::

## Custom Tag

Use `tag` property to customize the button's HTML tag.

::: preview
demo-preview=../../demo/button/Tag.vue
:::

## Throttle Mode

Use `use-throttle` and `throttle-duration` properties to enable throttle mode.

::: preview
demo-preview=../../demo/button/Throttle.vue
:::

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| size | Button size | `'large' \| 'default' \| 'small'` | `'default'` |
| type | Button type | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| color | Custom button color (hex) | `string` | — |
| plain | Plain button | `boolean` | `false` |
| round | Round button | `boolean` | `false` |
| circle | Circle button | `boolean` | `false` |
| dash | Dash border style | `boolean` | `false` |
| ghost | Ghost button (no border/bg) | `boolean` | `false` |
| loading | Loading state | `boolean` | `false` |
| loading-icon | Custom loading icon | `string` | `'spinner'` |
| disabled | Disabled state | `boolean` | `false` |
| icon | Icon name | `string` | — |
| autofocus | Auto focus | `boolean` | `false` |
| native-type | Native type attribute | `'button' \| 'submit' \| 'reset'` | `'button'` |
| tag | Custom element tag | `string` | `'button'` |
| use-throttle | Enable throttle | `boolean` | `false` |
| throttle-duration | Throttle duration (ms) | `number` | `500` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| click | Triggered when button is clicked | `(event: MouseEvent) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Button content |
| loading | Custom loading icon |

### Exposes

| Property | Description | Type |
| --- | --- | --- |
| ref | Button HTML element | `Ref<HTMLButtonElement>` |
| size | Button size | `ComputedRef<string>` |
| type | Button type | `ComputedRef<string>` |
| disabled | Disabled state | `ComputedRef<boolean>` |
