---
title: Input 输入框 | Sakana Element 像素组件库
description: Sakana Element 像素风格输入框组件，支持颜色变体、幽灵样式、文本输入、密码、禁用、清除、前后缀图标和原生 HTML 类型。
---

<script setup>
import { inputApi } from '../../apis/input'
</script>

# Input 输入框

用于接收用户输入的文本框组件。


<ApiTable :sections="inputApi" lang="zh" />

## 基础用法

基础的输入框用法。

::: preview
demo-preview=../../demo/input/Basic.vue
:::

## 输入框颜色

使用 `color` 属性为输入框应用预设主题颜色的边框和阴影。

::: preview
demo-preview=../../demo/input/Color.vue
:::

## 自定义颜色

向 `color` 属性传入任意十六进制颜色字符串来创建自定义颜色的输入框。搭配 `ghost` 可实现静止时透明的变体。

::: preview
demo-preview=../../demo/input/CustomColor.vue
:::

## 幽灵输入框

使用 `ghost` 属性来创建无边框的输入框，悬浮/聚焦时显示边框和阴影。可与预设颜色和自定义颜色搭配使用。

::: preview
demo-preview=../../demo/input/Ghost.vue
:::

## 不同尺寸

使用 `size` 属性来设置输入框的大小。

::: preview
demo-preview=../../demo/input/Size.vue
:::

## 禁用与只读

使用 `disabled` 和 `readonly` 属性来控制输入框状态。

::: preview
demo-preview=../../demo/input/Disabled.vue
:::

## 可清空

使用 `clearable` 属性来启用清空按钮。

::: preview
demo-preview=../../demo/input/Clearable.vue
:::

## 密码框

使用 `type="password"` 和 `show-password` 属性来创建密码输入框。

::: preview
demo-preview=../../demo/input/Password.vue
:::

## 前缀和后缀

使用 `prefix-icon` / `suffix-icon` 属性或 `prefix` / `suffix` 插槽来在输入框前后添加内容。

::: preview
demo-preview=../../demo/input/PrefixSuffix.vue
:::

## 原生类型

`type` 属性支持所有原生 HTML input 类型。以下是 `date`、`time` 和 `url` 类型的示例。

::: preview
demo-preview=../../demo/input/NativeTypes.vue
:::

