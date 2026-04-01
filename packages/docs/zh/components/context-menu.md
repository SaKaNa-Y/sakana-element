---
title: ContextMenu 右键菜单 | Sakana Element 像素组件库
description: Sakana Element 像素风格右键菜单组件，支持子菜单、复选项、单选项和键盘导航。
---

<script setup>
import { contextMenuApi, contextMenuItemApi, contextMenuCheckboxApi, contextMenuRadioApi, contextMenuSubApi, contextMenuKeyboardApi } from '../../apis/context-menu'
</script>

# ContextMenu 右键菜单

右键激活的菜单，支持子菜单、复选框和单选项。

<ApiTable :sections="[...contextMenuApi, ...contextMenuItemApi, ...contextMenuCheckboxApi, ...contextMenuRadioApi, ...contextMenuSubApi, ...contextMenuKeyboardApi]" lang="zh" />

## 基础用法

右键点击触发区域打开右键菜单。使用 `items` 属性快速设置。

::: preview
demo-preview=../../demo/context-menu/Basic.vue
:::

## 插槽组合

在 `content` 插槽中使用子组件进行完全控制：标签、分隔线、图标和快捷键。

::: preview
demo-preview=../../demo/context-menu/SlotBased.vue
:::

## 子菜单

使用 `PxContextMenuSub` 嵌套菜单。子菜单会在悬停时延迟打开。

::: preview
demo-preview=../../demo/context-menu/Submenu.vue
:::

## 禁用项

在单个菜单项上设置 `disabled` 以阻止交互。

::: preview
demo-preview=../../demo/context-menu/Disabled.vue
:::

## 复选项

使用 `PxContextMenuCheckboxItem` 配合 `v-model` 实现切换项。设置 `hide-on-click` 为 `false` 保持菜单打开。

::: preview
demo-preview=../../demo/context-menu/Checkbox.vue
:::

## 单选项

将 `PxContextMenuRadioItem` 包裹在 `PxContextMenuRadioGroup` 中，配合 `v-model` 实现互斥选择。

::: preview
demo-preview=../../demo/context-menu/Radio.vue
:::
