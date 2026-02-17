---
title: Popconfirm 气泡确认框 | Sakana Element 像素组件库
description: Sakana Element 像素风格气泡确认框组件，轻量级确认交互。
---

# Popconfirm 气泡确认框

点击某个元素弹出一个简单的气泡确认框。

## 基础用法

::: preview
demo-preview=../../demo/popconfirm/Basic.vue
:::

## 自定义内容

可以自定义按钮文字和图标。

::: preview
demo-preview=../../demo/popconfirm/Custom.vue
:::

## 隐藏图标

设置 `hide-icon` 属性来隐藏图标。

::: preview
demo-preview=../../demo/popconfirm/HideIcon.vue
:::

## API

### Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | — |
| confirmButtonText | 确认按钮文字 | `string` | `'确定'` |
| cancelButtonText | 取消按钮文字 | `string` | `'取消'` |
| confirmButtonType | 确认按钮类型 | `ButtonType` | `'primary'` |
| cancelButtonType | 取消按钮类型 | `ButtonType` | — |
| icon | 图标 | `string` | `'question-circle'` |
| iconColor | 图标颜色 | `string` | `'#f90'` |
| hideIcon | 是否隐藏图标 | `boolean` | `false` |
| hideAfter | 隐藏延迟（毫秒） | `number` | `200` |
| width | 弹框宽度 | `number \| string` | `150` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认按钮时触发 | `(event: MouseEvent) => void` |
| cancel | 点击取消按钮时触发 | `(event: MouseEvent) => void` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 触发 Popconfirm 的元素 |
| reference | 同 default |
