---
title: Form | Sakana Element
description: Pixel-style form component with Zod validation, inline layout, status icons, and responsive design for Vue 3.
---

<script setup>
import { formApi, formItemApi } from '../../apis/form'
</script>

# Form

Form consists of input, select, radio, checkbox and other controls, for collecting, validating, and submitting data.


<ApiTable :sections="[...formApi, ...formItemApi]" lang="en" />

## Basic Usage

Basic form data control, including various form items.

::: preview
demo-preview=../../demo/form/Basic.vue
:::

## Form Validation

Form validation uses [Zod](https://zod.dev) schemas. Each rule can provide a `schema` (Zod type) or use the `required` shorthand for simple required checks.

::: preview
demo-preview=../../demo/form/Validation.vue
:::

## Inline Form

Set `inline` to display form items in a horizontal row, useful for search forms and filters.

::: preview
demo-preview=../../demo/form/Inline.vue
:::

## Label Position

You can change the position of form field labels by setting `label-position` attribute.

::: preview
demo-preview=../../demo/form/LabelPosition.vue
:::

## Status Icon

Set `status-icon` to show check/close icons after field validation.

::: preview
demo-preview=../../demo/form/StatusIcon.vue
:::

## Disabled

Set `disabled` on the form to disable all form controls.

::: preview
demo-preview=../../demo/form/Disabled.vue
:::
