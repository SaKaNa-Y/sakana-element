---
title: Kbd 键盘按键 | Sakana Element 像素组件库
description: Sakana Element 像素风格键盘按键组件，用于显示键盘快捷键和按键组合。
---

<script setup>
import { kbdApi } from '../../apis/kbd'
</script>

# Kbd 键盘按键

用于显示键盘快捷键和按键组合的像素风格组件。方向键使用像素图标渲染，修饰键使用 Unicode 符号。

<ApiTable :sections="kbdApi" lang="zh" />

## 基础用法

使用文本内容展示简单的键盘按键。

::: preview
demo-preview=../../demo/kbd/Basic.vue
:::

## 特殊按键

使用 `keys` 属性渲染特殊按键符号。方向键自动使用像素图标，修饰键使用 Unicode 符号。

::: preview
demo-preview=../../demo/kbd/Keys.vue
:::

## 按键组合

将 `keys` 属性与插槽内容结合使用来展示键盘快捷键。

::: preview
demo-preview=../../demo/kbd/Combination.vue
:::

## 尺寸

使用 `size` 属性来设置按键大小。

::: preview
demo-preview=../../demo/kbd/Size.vue
:::

## 所有按键参考

所有支持的特殊按键标识及其渲染符号的完整参考。

::: preview
demo-preview=../../demo/kbd/AllKeys.vue
:::
