---
title: Collapse | Sakana Element
description: Pixel-style collapsible panel component with accordion mode for Vue 3.
---

<script setup>
import { collapseApi, collapseItemApi } from '../../apis/collapse'
</script>

# Collapse

A content area that can be collapsed or expanded.


<ApiTable :sections="[...collapseApi, ...collapseItemApi]" lang="en" />

## Basic Usage

Multiple panels can be expanded at the same time without affecting each other.

::: preview
demo-preview=../../demo/collapse/Basic.vue
:::

## Accordion Mode

Use `accordion` property to enable accordion mode, where only one panel can be expanded at a time.

::: preview
demo-preview=../../demo/collapse/Accordion.vue
:::

## Color Variants

Use the `color` prop with preset names to style the collapse with theme colors.

::: preview
demo-preview=../../demo/collapse/Color.vue
:::

## Custom Color

Pass any hex color string to the `color` prop for a fully custom color theme.

::: preview
demo-preview=../../demo/collapse/CustomColor.vue
:::

## Ghost

Enable `ghost` mode for a borderless, backgroundless appearance — useful when embedding inside other containers.

::: preview
demo-preview=../../demo/collapse/Ghost.vue
:::

## Focus Trigger

Set `trigger="focus"` to open panels on focus and close them on blur. Navigate with the Tab key.

::: preview
demo-preview=../../demo/collapse/FocusTrigger.vue
:::

## Icon Placement

Use `icon-placement="start"` to move the arrow indicator before the title.

::: preview
demo-preview=../../demo/collapse/IconStart.vue
:::

## Force Open / Close

Use `force-open` or `force-close` on individual items to lock their state. `force-close` takes precedence over `force-open`.

::: preview
demo-preview=../../demo/collapse/ForceState.vue
:::

## No Arrow

Hide the arrow indicator with `show-arrow="false"` for a cleaner look.

::: preview
demo-preview=../../demo/collapse/NoArrow.vue
:::

## Plus/Minus Icon

Use `icon="plus"` for a plus/minus toggle indicator instead of the default arrow.

::: preview
demo-preview=../../demo/collapse/PlusMinusIcon.vue
:::

## Custom Icon

Use the `icon` prop with any built-in icon name to replace the default arrow. The icon remains static (no rotation). Set `icon="plus"` for the special plus/minus toggle shown above.

::: preview
demo-preview=../../demo/collapse/CustomIcon.vue
:::

## Custom Title

Use `title` slot to customize the title content.

::: preview
demo-preview=../../demo/collapse/CustomTitle.vue
:::

## Disabled State

Use `disabled` property to disable the panel.

::: preview
demo-preview=../../demo/collapse/Disabled.vue
:::
