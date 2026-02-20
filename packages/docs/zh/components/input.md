---
title: Input 输入框 | Sakana Element 像素组件库
description: Sakana Element 像素风格输入框组件，支持文本输入、密码、禁用、清除和前后缀图标。
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

## 不同尺寸

使用 `size` 属性来设置输入框的大小。

::: preview
demo-preview=../../demo/input/Size.vue
:::

## 前缀和后缀

使用 `prefix-icon` / `suffix-icon` 属性或 `prefix` / `suffix` 插槽来在输入框前后添加内容。

::: preview
demo-preview=../../demo/input/PrefixSuffix.vue
:::

