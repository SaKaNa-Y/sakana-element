---
title: Dropdown 下拉菜单 | Sakana Element 像素组件库
description: Sakana Element 像素风格下拉菜单组件，支持多级菜单和自定义触发方式。
---

<script setup>
import { dropdownApi, dropdownItemApi } from '../../api/dropdown'
</script>

# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。


### Dropdown

<ApiTable :sections="dropdownApi" lang="zh" />

### DropdownItem

<ApiTable :sections="dropdownItemApi" lang="zh" />

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

