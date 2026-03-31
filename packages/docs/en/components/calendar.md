---
title: Calendar | Sakana Element
description: Pixel-style calendar component for date selection in Vue 3. Supports month navigation, disabled dates, custom colors, and keyboard accessibility.
---

<script setup>
import { calendarApi } from '../../apis/calendar'
</script>

# Calendar

A pixel-art styled calendar component for selecting dates with month navigation, keyboard support, and full i18n.

<ApiTable :sections="calendarApi" lang="en" />

## Basic Usage

Use `v-model` to bind the selected date. The calendar displays the current month by default.

::: preview
demo-preview=../../demo/calendar/Basic.vue
:::

## Types

Use `type` property to set the calendar color theme.

::: preview
demo-preview=../../demo/calendar/Type.vue
:::

## Disabled Dates

Use `disabledDate` function or `minDate`/`maxDate` to restrict selectable dates.

::: preview
demo-preview=../../demo/calendar/DisabledDates.vue
:::

## Custom Color

Use `color` property to set a custom hex color for selection and today highlights.

::: preview
demo-preview=../../demo/calendar/CustomColor.vue
:::
