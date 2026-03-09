---
title: Radio 单选框 | Sakana Element 像素组件库
description: Sakana Element 像素风格单选框组件，支持尺寸、主题颜色、自定义颜色和分组使用。
---

<script setup>
import { radioApi, radioGroupApi } from '../../apis/radio'
</script>

# Radio 单选框

用于在一组选项中选择单个选项的单选框组件，支持分组使用。


<ApiTable :sections="[...radioApi, ...radioGroupApi]" lang="zh" />

## 基础用法

绑定 `v-model` 到一个变量并设置 `value` 属性。当 `modelValue === value` 时为选中状态。

::: preview
demo-preview=../../demo/radio/Basic.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用单选框。

::: preview
demo-preview=../../demo/radio/Disabled.vue
:::

## 类型

使用 `type` 属性来应用预设主题颜色。

::: preview
demo-preview=../../demo/radio/Type.vue
:::

## 自定义颜色

使用 `color` 属性来设置选中状态的自定义十六进制颜色。

::: preview
demo-preview=../../demo/radio/CustomColor.vue
:::

## 不同尺寸

使用 `size` 属性来设置单选框的大小。

::: preview
demo-preview=../../demo/radio/Size.vue
:::

## 单选框组

使用 `PxRadioGroup` 来通过单个 `v-model` 管理多个单选框。同一时间只能选中一个选项。

::: preview
demo-preview=../../demo/radio/Group.vue
:::
