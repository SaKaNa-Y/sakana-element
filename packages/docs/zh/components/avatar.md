---
title: Avatar 头像 | Sakana Element 像素组件库
description: Sakana Element 像素风格头像组件，用于显示用户文字首字母缩写。
---

<script setup>
import { avatarApi } from '../../apis/avatar'
</script>

# Avatar 头像

像素风格头像组件，用于显示用户文字首字母缩写。


<ApiTable :sections="avatarApi" lang="zh" />

## 基础用法

在头像中显示文字首字母缩写。

::: preview
demo-preview=../../demo/avatar/Basic.vue
:::

## 尺寸

使用 `size` 属性来设置头像大小。

::: preview
demo-preview=../../demo/avatar/Size.vue
:::

## 形状

使用 `shape` 属性来切换圆形（默认）和方形。

::: preview
demo-preview=../../demo/avatar/Shape.vue
:::

## 边框

使用 `:border="false"` 来隐藏像素风格边框（默认显示）。

::: preview
demo-preview=../../demo/avatar/Border.vue
:::

## 状态指示器

使用 `status` 属性来显示状态指示器。设置为 `'online'` 显示在线（绿色），设置为 `'offline'` 显示离线（灰色），不设置则隐藏指示器。

::: preview
demo-preview=../../demo/avatar/Online.vue
:::

## 自定义颜色

使用 `color` 属性来设置自定义十六进制背景颜色。

::: preview
demo-preview=../../demo/avatar/CustomColor.vue
:::
