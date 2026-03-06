---
title: Dropdown 下拉菜单 | Sakana Element 像素组件库
description: Sakana Element 像素风格下拉菜单组件，支持多级菜单和自定义触发方式。
---

<script setup>
import { dropdownApi, dropdownItemApi, dropdownKeyboardApi } from '../../apis/dropdown'
</script>

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。


<ApiTable :sections="[...dropdownApi, ...dropdownItemApi, ...dropdownKeyboardApi]" lang="zh" />

## 基础用法

悬停在下拉菜单上以展开更多操作。

::: preview
demo-preview=../../demo/dropdown/Basic.vue
:::

## 触发方式

可以配置点击或悬停触发。

::: preview
demo-preview=../../demo/dropdown/Trigger.vue
:::

## 分割按钮

可以使用 `split-button` 来拆分下拉菜单按钮。

::: preview
demo-preview=../../demo/dropdown/Split.vue
:::

## 禁用项

使用 `disabled` 属性禁用某些选项。

::: preview
demo-preview=../../demo/dropdown/Disabled.vue
:::

## 图标菜单项

使用 `icon` 属性可以在菜单项标签旁显示像素图标。

::: preview
demo-preview=../../demo/dropdown/Icon.vue
:::

## 最大高度

使用 `max-height` 限制菜单项过多时的菜单高度。

::: preview
demo-preview=../../demo/dropdown/MaxHeight.vue
:::

## 箭头

使用 `show-arrow` 显示从下拉面板指向触发器的像素风格箭头。

::: preview
demo-preview=../../demo/dropdown/Arrow.vue
:::

## 自定义悬停颜色

使用 `hover-color` 自定义菜单项悬停时的背景色。

::: preview
demo-preview=../../demo/dropdown/HoverColor.vue
:::

## 键盘导航

下拉菜单支持完整的键盘导航。按方向键在菜单项之间移动，Enter 选择，Escape 关闭。

::: preview
demo-preview=../../demo/dropdown/Keyboard.vue
:::

