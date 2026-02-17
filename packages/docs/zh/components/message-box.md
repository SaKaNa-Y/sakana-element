---
title: MessageBox 消息弹框 | Sakana Element 像素组件库
description: Sakana Element 像素风格消息弹框组件，支持确认、提示和输入模式。
---

# MessageBox 消息弹框

模拟系统的消息提示框而实现的一套模态对话框组件。

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

## API

### Options

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | — |
| message | 消息内容 | `string \| VNode` | — |
| type | 消息类型 | `'success' \| 'warning' \| 'info' \| 'danger' \| 'error'` | — |
| showClose | 是否显示关闭按钮 | `boolean` | `true` |
| showCancelButton | 是否显示取消按钮 | `boolean` | `false` |
| showConfirmButton | 是否显示确认按钮 | `boolean` | `true` |
| cancelButtonText | 取消按钮文字 | `string` | `'取消'` |
| confirmButtonText | 确认按钮文字 | `string` | `'确定'` |
| cancelButtonType | 取消按钮类型 | `ButtonType` | — |
| confirmButtonType | 确认按钮类型 | `ButtonType` | `'primary'` |
| center | 是否居中布局 | `boolean` | `false` |
| lockScroll | 是否锁定滚动 | `boolean` | `true` |
| closeOnClickModal | 是否可通过点击遮罩关闭 | `boolean` | `true` |
| showInput | 是否显示输入框 | `boolean` | `false` |
| inputPlaceholder | 输入框占位文本 | `string` | — |
| inputValue | 输入框初始值 | `string` | — |
| inputType | 输入框类型 | `'text' \| 'textarea' \| 'password' \| 'number'` | `'text'` |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| PxMessageBox | 打开消息弹框 | `(options: MessageBoxOptions) => Promise<MessageBoxData>` |
| PxMessageBox.alert | 打开 alert 弹框 | `(message, title, options?) => Promise<MessageBoxData>` |
| PxMessageBox.confirm | 打开 confirm 弹框 | `(message, title, options?) => Promise<MessageBoxData>` |
| PxMessageBox.prompt | 打开 prompt 弹框 | `(message, title, options?) => Promise<MessageBoxData>` |
| PxMessageBox.close | 关闭当前弹框 | `() => void` |
