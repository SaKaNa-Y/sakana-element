---
title: Alert 提示 | Sakana Element 像素组件库
description: Sakana Element 像素风格警告提示组件，支持多种类型、可关闭和自定义描述。
---

<script setup>
import { alertApi } from '../../apis/alert'
</script>

# Alert 提示

用于页面中展示重要的提示信息。


<ApiTable :sections="alertApi" lang="zh" />

## 基础用法

使用 `type` 属性来定义不同类型的提示。

::: preview
demo-preview=../../demo/alert/Basic.vue
:::

## 主题

使用 `effect` 属性来设置主题样式：`light` 或 `dark`。

::: preview
demo-preview=../../demo/alert/Theme.vue
:::

## 可关闭

使用 `closable` 属性来设置是否可关闭。

::: preview
demo-preview=../../demo/alert/Close.vue
:::

## 显示图标

使用 `show-icon` 属性来显示类型图标。

::: preview
demo-preview=../../demo/alert/ShowIcon.vue
:::

## 带有描述

使用 `description` 属性来添加描述文本。

::: preview
demo-preview=../../demo/alert/Desc.vue
:::

## 图标和描述

同时使用图标和描述。

::: preview
demo-preview=../../demo/alert/IconDesc.vue
:::

## 文字居中

使用 `center` 属性来使内容居中。

::: preview
demo-preview=../../demo/alert/TextCenter.vue
:::

## 轮廓样式

使用 `outline` 属性来显示实线边框、透明背景。

::: preview
demo-preview=../../demo/alert/Outline.vue
:::

## 虚线样式

使用 `dash` 属性来显示虚线边框、浅色背景。

::: preview
demo-preview=../../demo/alert/Dash.vue
:::

## 自定义颜色

使用 `color` 属性来设置自定义十六进制颜色。可与默认、轮廓和虚线样式搭配使用。

::: preview
demo-preview=../../demo/alert/CustomColor.vue
:::

