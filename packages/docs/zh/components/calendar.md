---
title: Calendar 日历 | Sakana Element
description: 像素风格日历组件，用于 Vue 3 中的日期选择。支持月份导航、禁用日期、自定义颜色和键盘无障碍访问。
---

<script setup>
import { calendarApi } from '../../apis/calendar'
</script>

# Calendar 日历

像素风格的日历组件，支持日期选择、月份导航、键盘操作和多语言。

<ApiTable :sections="calendarApi" lang="zh" />

## 基础用法

使用 `v-model` 绑定选中的日期。日历默认显示当前月份。

::: preview
demo-preview=../../demo/calendar/Basic.vue
:::

## 类型

使用 `type` 属性设置日历颜色主题。

::: preview
demo-preview=../../demo/calendar/Type.vue
:::

## 禁用日期

使用 `disabledDate` 函数或 `minDate`/`maxDate` 来限制可选日期。

::: preview
demo-preview=../../demo/calendar/DisabledDates.vue
:::

## 自定义颜色

使用 `color` 属性设置自定义十六进制颜色。

::: preview
demo-preview=../../demo/calendar/CustomColor.vue
:::
