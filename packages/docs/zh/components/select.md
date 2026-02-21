---
title: Select 选择器 | Sakana Element 像素组件库
description: Sakana Element 像素风格选择器组件，支持单选、搜索、清空、幽灵样式、多尺寸和自定义选项。Vue 3 像素 UI 组件。
---

<script setup>
import { selectApi, optionApi } from '../../apis/select'
</script>

# Select 选择器

下拉选择器组件，用于从一组选项中选择一个值。

<ApiTable :sections="[...selectApi, ...optionApi]" lang="zh" />

## 基础用法

使用 `<px-option>` 插槽子组件定义选项。

::: preview
demo-preview=../../demo/select/Basic.vue
:::

## 禁用选项

在选项中使用 `disabled` 属性来禁用某个选项。

::: preview
demo-preview=../../demo/select/Disabled.vue
:::

## 禁用选择器

在选择器上设置 `disabled` 来禁用整个下拉菜单。

::: preview
demo-preview=../../demo/select/DisabledSelect.vue
:::

## 可清空

设置 `clearable` 允许用户清除已选值。鼠标悬浮时显示清除图标。

::: preview
demo-preview=../../demo/select/Clearable.vue
:::

## 可搜索

设置 `filterable` 启用输入筛选选项。支持自定义 `filter-method` 和 `remote-method` 实现高级搜索。

::: preview
demo-preview=../../demo/select/Filterable.vue
:::

## 幽灵样式

设置 `ghost` 呈现无边框、透明的输入框，仅在悬浮或聚焦时显示边框 — 与 `PxInput` 幽灵样式一致。

::: preview
demo-preview=../../demo/select/Ghost.vue
:::

## 不同尺寸

通过 `size` 控制选择器高度和菜单项尺寸。支持 `large` 和 `small`。

::: preview
demo-preview=../../demo/select/Size.vue
:::
