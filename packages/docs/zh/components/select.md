---
title: Select 选择器 | Sakana Element 像素组件库
description: Sakana Element 像素风格选择器组件，支持单选、搜索、禁用和自定义选项。Vue 3 像素 UI 组件。
---

<script setup>
import { selectApi, optionApi } from '../../api/select'
</script>

# Select 选择器

下拉选择器组件，用于从一组选项中选择一个值。


<ApiTable :sections="[...selectApi, ...optionApi]" lang="zh" />

## 基础用法

基础的选择器用法。

::: preview
demo-preview=../../demo/select/Basic.vue
:::

## 禁用选项

在选项中使用 `disabled` 属性来禁用某个选项。

::: preview
demo-preview=../../demo/select/Disabled.vue
:::

