---
title: Collapsible 折叠块 | Sakana Element
description: 简单的内容折叠切换组件，灵感来自 Radix UI Collapsible。
---

<script setup>
import { collapsibleApi, collapsibleTriggerApi, collapsibleContentApi } from '../../apis/collapsible'
</script>

# Collapsible 折叠块

轻量级单项折叠组件，用于显示和隐藏内容。与 `Collapse`（多面板手风琴）不同，`Collapsible` 管理单个开/关状态 — 适用于可切换区域、可展开详情或渐进式披露模式。

<ApiTable :sections="[...collapsibleApi, ...collapsibleTriggerApi, ...collapsibleContentApi]" lang="zh" />

## 基础用法

点击触发器切换内容区域的显隐。

::: preview
demo-preview=../../demo/collapsible/Basic.vue
:::

## 默认展开

使用 `default-open` 属性使内容默认展开。

::: preview
demo-preview=../../demo/collapsible/DefaultOpen.vue
:::

## 禁用状态

设置 `disabled` 阻止折叠块被切换。

::: preview
demo-preview=../../demo/collapsible/Disabled.vue
:::

## 颜色变体

使用 `color` 属性设置预设颜色名称或自定义十六进制颜色。

::: preview
demo-preview=../../demo/collapsible/Color.vue
:::

## 幽灵模式

启用 `ghost` 模式，移除边框和阴影。

::: preview
demo-preview=../../demo/collapsible/Ghost.vue
:::

## 受控状态

使用 `v-model` 从外部控制展开状态。

::: preview
demo-preview=../../demo/collapsible/Controlled.vue
:::
