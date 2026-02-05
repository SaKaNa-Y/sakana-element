# Icon

Sakana Element uses [pixelarticons](https://pixelarticons.com/) as the icon solution - a pixel-art style icon library with 480+ icons on a 24x24 grid.

## Basic Usage

Use the `icon` property to specify the icon name. Icon names follow pixelarticons naming conventions.

::: preview
demo-preview=../../demo/icon/Basic.vue
:::

## Different Sizes

Use the `size` property to set the icon size. Sizes are based on the 24px grid:

- `xs`: 12px
- `sm`: 18px
- `md`: 24px (default)
- `lg`: 36px
- `xl`: 48px
- `2xl`: 72px
- `1x`, `2x`, `3x`: FA-compatible aliases (24px, 48px, 72px)

::: preview
demo-preview=../../demo/icon/Size.vue
:::

## Icon Colors

Use `type` or `color` property to set the icon color.

::: preview
demo-preview=../../demo/icon/Color.vue
:::

## Icon Animations

Supports various pixel-art style animation effects using CSS `steps()` for a discrete frame-by-frame look: `spin`, `pulse`, `bounce`, `shake`, `beat`, `fade`.

::: preview
demo-preview=../../demo/icon/Animation.vue
:::

## Custom Icons

You can register custom pixel icons using the `registerPixelIcon` function:

```ts
import { registerPixelIcon } from 'sakana-element';

// Register a custom icon with SVG string
registerPixelIcon('my-icon', '<svg viewBox="0 0 24 24">...</svg>');
```

Then use it like any other icon:

```vue
<px-icon icon="my-icon" />
```

## Available Icons

Here are some commonly used icons bundled with Sakana Element:

| Icon Name | Description |
| --- | --- |
| `loader` | Loading spinner |
| `check` | Checkmark / Success |
| `close` | Close / X |
| `close-box` | Close in box / Error |
| `info-box` | Information |
| `warning-box` | Warning |
| `eye` | Eye / Visible |
| `eye-closed` | Eye closed / Hidden |
| `chevron-down` | Chevron down |
| `chevron-up` | Chevron up |
| `chevron-left` | Chevron left |
| `chevron-right` | Chevron right |
| `home` | Home |
| `user` | User |
| `search` | Search |
| `heart` | Heart |
| `bookmark` | Bookmark / Star |
| `notification` | Notification / Bell |
| `sliders` | Settings |
| `edit` | Edit / Pencil |
| `trash` | Trash / Delete |

For a complete list of available icons, visit [pixelarticons.com](https://pixelarticons.com/).

## Icon Name Mapping

For convenience, some common FontAwesome icon names are automatically mapped to pixelarticons equivalents:

| Alias | Maps To |
| --- | --- |
| `spinner`, `loading` | `loader` |
| `xmark`, `x`, `times` | `close` |
| `circle-xmark`, `x-circle`, `error` | `close-box` |
| `circle-info`, `info-circle`, `info` | `info-box` |
| `check-circle`, `circle-check`, `success` | `check` |
| `circle-exclamation`, `exclamation-circle`, `warning` | `warning-box` |
| `eye-slash`, `eye-off` | `eye-closed` |
| `angle-down`, `caret-down` | `chevron-down` |
| `angle-up`, `caret-up` | `chevron-up` |
| `angle-left`, `caret-left` | `chevron-left` |
| `angle-right`, `caret-right` | `chevron-right` |
| `gear`, `cog`, `settings` | `sliders` |
| `star`, `star-solid` | `bookmark` |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Icon name (pixelarticons name or mapped alias) | `string` | — |
| size | Icon size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| '2x' \| '3x'` | `'md'` |
| type | Icon type color | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| color | Custom color | `string` | — |
| spin | Spin animation (stepped) | `boolean` | `false` |
| pulse | Pulse animation (rotate + scale) | `boolean` | `false` |
| bounce | Bounce animation (vertical hop) | `boolean` | `false` |
| shake | Shake animation (horizontal shake) | `boolean` | `false` |
| beat | Beat animation (scale throb) | `boolean` | `false` |
| fade | Fade animation (opacity flicker) | `boolean` | `false` |
| rotation | Rotation angle | `90 \| 180 \| 270` | — |
| flip | Flip direction | `'horizontal' \| 'vertical' \| 'both'` | — |
