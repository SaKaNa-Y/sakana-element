---
title: Resizable 可调面板 | Sakana Element
description: Sakana Element 像素风格可调面板组件。支持拖拽分隔线、最小/最大约束、折叠面板和键盘控制，构建灵活的布局。
---

<script setup>
import { resizableGroupApi, resizablePanelApi, resizableHandleApi } from '../../apis/resizable'
</script>

# Resizable 可调面板

通过可拖拽的分隔线构建灵活的可调整大小面板布局。


<ApiTable :sections="[...resizableGroupApi, ...resizablePanelApi, ...resizableHandleApi]" lang="zh" />

## 基础用法

水平双面板布局，拖动手柄调整大小。

::: preview
demo-preview=../../demo/resizable/Basic.vue
:::

## 垂直方向

使用 `direction="vertical"` 实现上下分割。

::: preview
demo-preview=../../demo/resizable/Vertical.vue
:::

## 三面板布局

多个面板之间用手柄分隔。

::: preview
demo-preview=../../demo/resizable/ThreePanel.vue
:::

## 最小/最大尺寸

使用 `min-size` 和 `max-size` 约束面板大小。

::: preview
demo-preview=../../demo/resizable/MinMax.vue
:::

## 可折叠面板

设置 `collapsible` 允许面板折叠到 `collapsed-size`。通过暴露的 `collapse()` 和 `expand()` 方法控制。

::: preview
demo-preview=../../demo/resizable/Collapsible.vue
:::

## 嵌套布局

嵌套不同方向的 `ResizableGroup` 组件实现复杂布局。

::: preview
demo-preview=../../demo/resizable/Nested.vue
:::

## 自动保存

设置 `auto-save-id` 将布局持久化到 localStorage，刷新页面后自动恢复。

::: preview
demo-preview=../../demo/resizable/AutoSave.vue
:::
