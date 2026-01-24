# Icon

Sakana Element uses Font Awesome icon library as the icon solution.

## Basic Usage

Use the `icon` property to specify the icon name.

::: preview
demo-preview=../../demo/icon/Basic.vue
:::

## Different Sizes

Use the `size` property to set the icon size.

::: preview
demo-preview=../../demo/icon/Size.vue
:::

## Icon Colors

Use `type` or `color` property to set the icon color.

::: preview
demo-preview=../../demo/icon/Color.vue
:::

## Icon Animations

Supports various animation effects: `spin`, `pulse`, `bounce`, `shake`, `beat`, `fade`, etc.

::: preview
demo-preview=../../demo/icon/Animation.vue
:::

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Icon name | `string \| Array<string> \| object` | — |
| size | Icon size | `'2xs' \| 'xs' \| 'sm' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| ... \| '10x'` | — |
| type | Icon type color | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| color | Custom color | `string` | — |
| spin | Spin animation | `boolean` | `false` |
| pulse | Pulse animation | `boolean` | `false` |
| bounce | Bounce animation | `boolean` | `false` |
| shake | Shake animation | `boolean` | `false` |
| beat | Beat animation | `boolean` | `false` |
| fade | Fade animation | `boolean` | `false` |
| beatFade | Beat fade combination | `boolean` | `false` |
| rotation | Rotation angle | `90 \| 180 \| 270` | — |
| flip | Flip direction | `'horizontal' \| 'vertical' \| 'both'` | — |
| fixedWidth | Fixed width | `boolean` | `false` |
| border | Border | `boolean` | `false` |
| inverse | Inverse color | `boolean` | `false` |
