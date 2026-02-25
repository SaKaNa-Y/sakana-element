---
title: Link 链接 | Sakana Element 像素组件库
description: Sakana Element 像素风格链接组件，支持颜色变体和自定义颜色。
---

<script setup>
import { linkApi } from '../../apis/link'
</script>

# Link 链接

像素风格的文本超链接组件。


<ApiTable :sections="linkApi" lang="zh" />

## 基础用法

基础链接，使用 href 指向外部 URL。

::: preview
demo-preview=../../demo/link/Basic.vue
:::

## 类型

使用 `type` 属性定义不同的颜色变体。

::: preview
demo-preview=../../demo/link/Type.vue
:::

## 下划线

链接默认显示下划线。设置 `underline` 为 `false` 可以移除下划线。

::: preview
demo-preview=../../demo/link/Underline.vue
:::

## 禁用状态

使用 `disabled` 属性禁用链接。

::: preview
demo-preview=../../demo/link/Disabled.vue
:::

## 自定义颜色

使用 `color` 属性设置自定义十六进制颜色。

::: preview
demo-preview=../../demo/link/CustomColor.vue
:::
