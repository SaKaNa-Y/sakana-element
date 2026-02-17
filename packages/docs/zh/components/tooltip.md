---
title: Tooltip 文字提示 | Sakana Element 像素组件库
description: Sakana Element 像素风格文字提示组件，鼠标悬停显示详细信息。
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

使用 `content` 属性来设置提示内容。

::: preview
demo-preview=../../demo/tooltip/Basic.vue
:::

## 不同位置

使用 `placement` 属性来设置 Tooltip 出现的位置。

::: preview
demo-preview=../../demo/tooltip/Placement.vue
:::

## 触发方式

使用 `trigger` 属性来设置触发方式。

::: preview
demo-preview=../../demo/tooltip/Trigger.vue
:::

## 禁用状态

使用 `disabled` 属性来禁用 Tooltip。

::: preview
demo-preview=../../demo/tooltip/Disabled.vue
:::

## API

### Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 显示的内容 | `string` | — |
| placement | 出现位置 | `'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `'bottom'` |
| trigger | 触发方式 | `'hover' \| 'click' \| 'contextmenu'` | `'hover'` |
| disabled | 是否禁用 | `boolean` | `false` |
| manual | 手动控制模式 | `boolean` | `false` |
| showTimeout | 显示延迟（毫秒） | `number` | `0` |
| hideTimeout | 隐藏延迟（毫秒） | `number` | `200` |
| transition | 动画名称 | `string` | `'fade'` |
| popperOptions | popper.js 配置 | `object` | — |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| visible-change | 可见性改变时触发 | `(visible: boolean) => void` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 触发 Tooltip 的元素 |
| content | 自定义内容 |

### Exposes

| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| show | 显示 Tooltip | `() => void` |
| hide | 隐藏 Tooltip | `() => void` |
