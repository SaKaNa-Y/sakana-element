---
title: Validator | Sakana Element
description: Lightweight inline validation wrapper using Zod schemas with pixel-styled hint text for Vue 3 form elements.
---

<script setup>
import { validatorApi } from '../../apis/validator'
</script>

# Validator

A lightweight inline validation wrapper for individual form elements. Unlike `Form` + `FormItem` which requires a full form model, `PxValidator` wraps any input and shows pixel-styled hint text when Zod validation fails. Inspired by DaisyUI's Validator pattern.

<ApiTable :sections="validatorApi" lang="en" />

## Basic Usage

Wrap a form element with `PxValidator`, bind `v-model` and provide `rules`. Use `required: true` as a shorthand for non-empty string validation.

::: preview
demo-preview=../../demo/validator/Basic.vue
:::

## Zod Schema Validation

Use Zod schemas for rich validation — email format, minimum length, regex patterns, and more.

::: preview
demo-preview=../../demo/validator/Schema.vue
:::

## Custom Error Message

Override Zod's default error with a custom `message` in the rule.

::: preview
demo-preview=../../demo/validator/CustomMessage.vue
:::

## Trigger Modes

Control when validation runs using `trigger`: `'change'`, `'blur'`, or `'input'`.

::: preview
demo-preview=../../demo/validator/Trigger.vue
:::

## Programmatic Validation

Access `validate()` and `reset()` via template ref for manual control.

::: preview
demo-preview=../../demo/validator/Programmatic.vue
:::
