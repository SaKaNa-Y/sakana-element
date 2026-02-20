---
title: Form | Sakana Element
description: Pixel-style form component with validation, custom rules, and responsive layout for Vue 3.
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

Form component provides the function of form validation.

::: preview
demo-preview=../../demo/form/Validation.vue
:::

## Label Position

You can change the position of form field labels by setting `label-position` attribute.

::: preview
demo-preview=../../demo/form/LabelPosition.vue
:::

