---
title: Command 命令面板 | Sakana Element 像素组件库
description: Sakana Element 像素风格命令面板组件，支持搜索过滤、键盘导航和弹窗模式。
---

<script setup>
import { commandApi } from '../../apis/command'
</script>

# Command 命令面板

可搜索的命令面板，用于快速导航和操作，支持键盘操作和弹窗模式。

<ApiTable :sections="commandApi" lang="zh" />

## 基础用法

一个简单的命令菜单，支持搜索过滤。

::: preview
demo-preview=../../demo/command/Basic.vue
:::

## 分组项目

使用 `CommandGroup` 按标题组织项目，使用 `CommandSeparator` 添加视觉分隔线。

::: preview
demo-preview=../../demo/command/Group.vue
:::

## 弹窗模式

使用 `CommandDialog` 在模态弹窗中显示命令面板。按 `Ctrl+K`（Mac 上为 `Cmd+K`）切换。

::: preview
demo-preview=../../demo/command/Dialog.vue
:::

## 自定义过滤

提供自定义 `filter` 函数进行高级匹配（例如模糊搜索）。

::: preview
demo-preview=../../demo/command/CustomFilter.vue
:::

## 禁用项目

设置 `disabled` 来阻止选择。禁用项目在键盘导航时会被跳过。

::: preview
demo-preview=../../demo/command/Disabled.vue
:::
