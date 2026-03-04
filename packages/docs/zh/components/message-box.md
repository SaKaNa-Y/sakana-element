---
title: MessageBox 消息弹框 | Sakana Element 像素组件库
description: Sakana Element 像素风格消息弹框组件，支持确认、提示和输入模式。
---

<script setup>
import { messageBoxApi } from '../../apis/message-box'
</script>

# MessageBox 消息弹框

模拟系统的消息提示框而实现的一套模态对话框组件。


<ApiTable :sections="messageBoxApi" lang="zh" />

## Alert 消息提示

用于提示用户的消息，只有确认按钮。

::: preview
demo-preview=../../demo/message-box/Alert.vue
:::

## Confirm 确认消息

用于提示用户确认操作，有确认和取消按钮。

::: preview
demo-preview=../../demo/message-box/Confirm.vue
:::

## Prompt 提交内容

用于提示用户输入内容。

::: preview
demo-preview=../../demo/message-box/Prompt.vue
:::

## 自定义内容

可以自定义消息框的内容。

::: preview
demo-preview=../../demo/message-box/Custom.vue
:::

## 居中布局

使用 `center` 属性使标题和底部按钮居中对齐。

::: preview
demo-preview=../../demo/message-box/Center.vue
:::

## 关闭前回调

使用 `beforeClose` 拦截关闭操作。回调接收 `action`、`instance` 和 `done` 函数 — 调用 `done()` 才会真正关闭对话框。如果 `beforeClose` 返回一个 Promise，被点击的按钮会自动显示加载状态，直到 Promise 完成。

::: preview
demo-preview=../../demo/message-box/BeforeClose.vue
:::

## 类型彩色边框

将 `type` 设置为 `'info'`、`'success'`、`'warning'` 或 `'danger'`，边框、阴影和分割线会显示对应的主题颜色。

::: preview
demo-preview=../../demo/message-box/TypeBorders.vue
:::

## 自定义外观

使用 `customClass`、`customStyle` 和 `width` 自定义对话框外观。`width` 接受数字（像素）或 CSS 字符串值。

::: preview
demo-preview=../../demo/message-box/CustomAppearance.vue
:::

## 关闭控制

使用 `closeOnPressEscape` 和 `closeOnHashChange` 控制对话框的关闭方式，两者默认均为 `true`。

::: preview
demo-preview=../../demo/message-box/CloseControls.vue
:::

## 输入验证

使用 `inputSchema` 配合 Zod schema 在确认前验证 prompt 输入。设置 `inputErrorMessage` 可自定义验证失败时输入框下方显示的错误文本。

::: preview
demo-preview=../../demo/message-box/InputValidation.vue
:::

## 区分取消与关闭

当 `distinguishCancelAndClose` 为 `true`（默认）时，点击关闭按钮会以 `'close'` 拒绝，而点击取消按钮会以 `'cancel'` 拒绝。设置为 `false` 时两者均触发 `'cancel'`。

::: preview
demo-preview=../../demo/message-box/DistinguishClose.vue
:::

## 可拖拽

将 `draggable` 设置为 `true`，用户可以通过拖拽标题栏移动对话框。对话框会被约束在视口范围内。

::: preview
demo-preview=../../demo/message-box/Draggable.vue
:::

## 自定义底部

使用 `footer` 选项提供一个 VNode 或渲染函数，替换默认的取消/确认按钮为自定义内容。

::: preview
demo-preview=../../demo/message-box/CustomFooter.vue
:::
