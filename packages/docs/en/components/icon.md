---
title: Icon | Sakana Element
description: 486 built-in pixel art icons from pixelarticons. Supports size, color, flip, rotation, and animation effects in Sakana Element for Vue 3.
---

<script setup>
import { iconApi } from '../../apis/icon'
</script>

# Icon

Sakana Element bundles all 486 icons from [pixelarticons](https://pixelarticons.com/) — a pixel-art style icon library on a 24x24 grid. Every icon is available out of the box with no extra installation.


<ApiTable :sections="iconApi" lang="en" />

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

## Flip & Rotation

Use `flip` to mirror the icon horizontally, vertically, or both. Use `rotation` to rotate by 90°, 180°, or 270°. These can also be combined.

::: preview
demo-preview=../../demo/icon/Flip.vue
:::

## Icon Animations

Supports various pixel-art style animation effects using CSS `steps()` for a discrete frame-by-frame look: `spin`, `pulse`, `bounce`, `shake`, `beat`, `fade`.

::: preview
demo-preview=../../demo/icon/Animation.vue
:::

## Icon Collection

Browse and search all bundled icons. Click any icon to copy its name.

::: preview
demo-preview=../../demo/icon/Collection.vue
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

