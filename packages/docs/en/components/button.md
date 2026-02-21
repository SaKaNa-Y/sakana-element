---
title: Button | Sakana Element
description: Pixel-style button component for Sakana Element. Supports multiple types, sizes, disabled state, loading, and icon buttons for Vue 3.
---

<script setup>
import { buttonApi } from '../../apis/button'
</script>

# Button

Commonly used button component with pixel-style visual effects.


<ApiTable :sections="buttonApi" lang="en" />

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

## Link Button

Use `link` property to create an underlined text button with no border, background, or shadow. Ideal for inline actions or hyperlink-style interactions.

::: preview
demo-preview=../../demo/button/Link.vue
:::

## Block Button

Use `block` property to make the button expand to the full width of its parent container.

::: preview
demo-preview=../../demo/button/Block.vue
:::

## Responsive Button

Use `responsive` property to make the button automatically adapt its size based on the viewport width.

| Breakpoint | Width | Height | Font Size |
|------------|-------|--------|-----------|
| Base | < 640px | 24px | extra-small |
| sm | ≥ 640px | 28px | small |
| md | ≥ 768px | 36px | base |
| lg | ≥ 1024px | 44px | large |
| xl | ≥ 1280px | 44px | large (wider padding) |

::: preview
demo-preview=../../demo/button/Responsive.vue
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

