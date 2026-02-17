---
title: Collapse 折叠面板 | Sakana Element 像素组件库
description: Sakana Element 像素风格折叠面板组件，支持手风琴模式和自定义标题。
---

# Collapse 折叠面板

可以折叠/展开的内容区域。

## 基础用法

可同时展开多个面板，面板之间不会影响。

::: preview
demo-preview=../../demo/collapse/Basic.vue
:::

## 手风琴模式

使用 `accordion` 属性来设置手风琴模式，每次只能展开一个面板。

::: preview
demo-preview=../../demo/collapse/Accordion.vue
:::

## 自定义标题

使用 `title` 插槽来自定义标题内容。

::: preview
demo-preview=../../demo/collapse/CustomTitle.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用面板。

::: preview
demo-preview=../../demo/collapse/Disabled.vue
:::

## API

### Collapse 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 当前激活的面板 | `string \| string[]` | — |
| accordion | 是否开启手风琴模式 | `boolean` | `false` |

### Collapse 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| change | 激活面板改变时触发 | `(activeNames: string \| string[]) => void` |

### CollapseItem 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 唯一标识符 | `string` | — |
| title | 标题 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |

### CollapseItem 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 面板内容 |
| title | 自定义标题 |
