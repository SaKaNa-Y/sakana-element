---
title: Switch 开关 | Sakana Element 像素组件库
description: Sakana Element 像素风格开关组件，支持禁用、自定义颜色和尺寸。
---

<script setup>
import { switchApi } from '../../api/switch'
</script>

# Switch 开关

用于在两种状态之间切换的开关组件。


<ApiTable :sections="switchApi" lang="zh" />

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。

::: preview
demo-preview=../../demo/switch/Basic.vue
:::

## 不同尺寸

使用 `size` 属性来设置开关的大小。

::: preview
demo-preview=../../demo/switch/Size.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用开关。

::: preview
demo-preview=../../demo/switch/Disabled.vue
:::

