---
title: Loading | Sakana Element
description: Pixel-style loading component with fullscreen and area loading for Vue 3.
---

# Loading

Show animation while loading data.

## Area Loading

Display when loading data in a container.

::: preview
demo-preview=../../demo/loading/Basic.vue
:::

## Customization

You can customize loading text, background color, etc.

::: preview
demo-preview=../../demo/loading/Custom.vue
:::

## Fullscreen Loading

Use fullscreen loading.

::: preview
demo-preview=../../demo/loading/Fullscreen.vue
:::

## Service

Loading can also be invoked as a service.

::: preview
demo-preview=../../demo/loading/Service.vue
:::

## API

### Directive

| Directive | Description | Type |
| --- | --- | --- |
| v-loading | Whether to show loading | `boolean` |

### Options (Service)

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| target | Target element to cover | `HTMLElement \| string` | `document.body` |
| fullscreen | Whether fullscreen loading | `boolean` | `false` |
| lock | Lock screen scroll | `boolean` | `false` |
| text | Loading text | `string` | — |
| background | Overlay background color | `string` | — |
| spinner | Custom loading icon | `string \| boolean` | — |

### Instance Methods

| Method | Description |
| --- | --- |
| close | Close Loading |
