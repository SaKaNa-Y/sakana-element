---
title: Checkbox 多选框 | Sakana Element 像素组件库
description: Sakana Element 像素风格多选框组件，支持不确定状态、尺寸、颜色、分组和最小/最大约束。
---

<script setup>
import { checkboxApi, checkboxGroupApi } from '../../apis/checkbox'
</script>

# Checkbox 多选框

用于在选中和未选中状态之间切换的多选框组件，支持分组使用。


<ApiTable :sections="[...checkboxApi, ...checkboxGroupApi]" lang="zh" />

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。

::: preview
demo-preview=../../demo/checkbox/Basic.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用多选框。

::: preview
demo-preview=../../demo/checkbox/Disabled.vue
:::

## 类型

使用 `type` 属性来应用预设主题颜色。

::: preview
demo-preview=../../demo/checkbox/Type.vue
:::

## 自定义颜色

使用 `color` 属性来设置选中状态的自定义十六进制颜色。

::: preview
demo-preview=../../demo/checkbox/CustomColor.vue
:::

## 不同尺寸

使用 `size` 属性来设置多选框的大小。

::: preview
demo-preview=../../demo/checkbox/Size.vue
:::

## 多选框组

使用 `PxCheckboxGroup` 来通过单个 `v-model` 数组管理多个多选框。

::: preview
demo-preview=../../demo/checkbox/Group.vue
:::

## 不确定状态

使用 `indeterminate` 属性来设置半选状态。通常用于"全选"模式。

::: preview
demo-preview=../../demo/checkbox/Indeterminate.vue
:::

## 分组最小/最大限制

在分组上使用 `min` 和 `max` 属性来约束选中项的数量。

::: preview
demo-preview=../../demo/checkbox/GroupMinMax.vue
:::
