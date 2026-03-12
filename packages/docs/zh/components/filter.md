---
title: Filter 过滤器 | Sakana Element 像素组件库
description: Sakana Element 像素风格过滤器组件，支持切换取消选择、尺寸、主题颜色、自定义颜色和插槽子组件。
---

<script setup>
import { filterApi, filterItemApi } from '../../apis/filter'
</script>

# Filter 过滤器

用于选择/取消选择选项的过滤器芯片组件。与单选框不同，点击已选中的芯片会取消选择。单选模式下，选中后未选中项会折叠隐藏，并显示 `×` 重置按钮。使用 `multiple` 属性可启用多选模式。

<ApiTable :sections="[...filterApi, ...filterItemApi]" lang="zh" />

## 基础用法

绑定 `v-model` 并提供 `options`。点击芯片选中，再次点击取消选择。

::: preview
demo-preview=../../demo/filter/Basic.vue
:::

## 禁用状态

在组上使用 `disabled` 禁用所有选项，或在单个选项上使用。

::: preview
demo-preview=../../demo/filter/Disabled.vue
:::

## 类型

使用 `type` 属性来应用预设主题颜色。

::: preview
demo-preview=../../demo/filter/Type.vue
:::

## 自定义颜色

使用 `color` 属性来设置选中状态的自定义十六进制颜色。

::: preview
demo-preview=../../demo/filter/CustomColor.vue
:::

## 不同尺寸

使用 `size` 属性来设置过滤器芯片的大小。

::: preview
demo-preview=../../demo/filter/Size.vue
:::

## 多选模式

使用 `multiple` 属性启用多选模式。可同时选中多个过滤项，点击 `×` 按钮清除所有选择。

::: preview
demo-preview=../../demo/filter/Multiple.vue
:::

## 插槽子组件

使用 `PxFilterItem` 作为插槽子组件，以更灵活地控制各个选项。

::: preview
demo-preview=../../demo/filter/SlotChildren.vue
:::
