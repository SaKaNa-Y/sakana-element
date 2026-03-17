---
title: Icon | Sakana Element
description: 486 built-in pixel art icons from pixelarticons. Supports size, color, flip, rotation, and animation effects in Sakana Element for Vue 3.
---

<script setup>
import { iconApi } from '../../apis/icon'
</script>

# Icon

Sakana Element bundles all 486 icons from [pixelarticons](https://pixelarticons.com/) — a pixel-art style icon library on a 24×24 grid. Every icon is available out of the box with no extra installation.

<ApiTable :sections="iconApi" lang="en" />

## Basic Usage

Use the `icon` property to specify the icon name. Icon names follow pixelarticons naming conventions. Common aliases are also supported — for example, `spinner` resolves to `loader`, and `x` resolves to `close`.

::: preview
demo-preview=../../demo/icon/Basic.vue
:::

## Different Sizes

Use the `size` property to set the icon size. All sizes are multiples of the 24px grid to ensure crisp pixel rendering:

| Size | Pixels | Description |
|------|--------|-------------|
| `xs` | 12px | Extra small |
| `sm` | 18px | Small |
| `md` | 24px | Default |
| `lg` | 36px | Large |
| `xl` | 48px | Extra large |
| `2xl` | 72px | 2× extra large |
| `1x` / `2x` / `3x` | 24 / 48 / 72px | FontAwesome-compatible aliases |

::: preview
demo-preview=../../demo/icon/Size.vue
:::

## Icon Colors

Use the `type` property for semantic colors (`primary`, `success`, `warning`, `danger`, `info`), or the `color` property for any custom color value. The `color` prop overrides `type` when both are set.

::: preview
demo-preview=../../demo/icon/Color.vue
:::

## Flip & Rotation

Use `flip` to mirror the icon (`horizontal`, `vertical`, or `both`). Use `rotation` to rotate by `90`, `180`, or `270` degrees. These can be combined.

::: preview
demo-preview=../../demo/icon/Flip.vue
:::

## Icon Animations

All animations use CSS `steps()` for a discrete frame-by-frame look that matches the pixel-art aesthetic:

| Animation | Effect | Frames |
|-----------|--------|--------|
| `spin` | 360° rotation | 8 steps |
| `pulse` | Rotation + scale | 8 steps |
| `bounce` | Vertical hop | 5 steps |
| `shake` | Horizontal shake | 4 steps |
| `beat` | Scale throb | 3 steps |
| `fade` | Opacity flicker | 4 steps |

::: preview
demo-preview=../../demo/icon/Animation.vue
:::

## Icon Collection

Browse and search all 486 bundled icons. Click any icon to copy its name.

::: preview
demo-preview=../../demo/icon/Collection.vue
:::

## Custom Icons

Register your own SVG icons and use them alongside the built-in set.

### Single Registration

```ts
import { registerPixelIcon } from 'sakana-element';

registerPixelIcon('my-icon', '<svg viewBox="0 0 24 24">...</svg>');
```

```vue
<px-icon icon="my-icon" />
```

### Batch Registration

```ts
import { registerPixelIcons } from 'sakana-element';

registerPixelIcons({
  'my-icon-a': '<svg viewBox="0 0 24 24">...</svg>',
  'my-icon-b': '<svg viewBox="0 0 24 24">...</svg>',
});
```

### Registry API

| Function | Description |
|---|---|
| `registerPixelIcon(name, svg)` | Register a single custom icon |
| `registerPixelIcons(icons)` | Register multiple icons at once |
| `hasPixelIcon(name)` | Check if an icon name is registered |
| `getRegisteredIconNames()` | Get an array of all registered icon names |
| `getPixelIcon(name)` | Get the SVG string of a registered icon |
| `resolveIconName(name)` | Resolve an icon name alias to its pixelarticons name |
| `getIconNameMap()` | Get the full icon name alias mapping |

::: tip
SVG content is automatically sanitized on registration — dangerous elements like `<script>` and event handler attributes are stripped for XSS safety.
:::
