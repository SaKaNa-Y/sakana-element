# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。

::: preview
demo-preview=../../demo/message/Basic.vue
:::

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

::: preview
demo-preview=../../demo/message/Types.vue
:::

## 可关闭的消息

可以添加关闭按钮。

::: preview
demo-preview=../../demo/message/Closable.vue
:::

## 文字居中

使用 `center` 属性让文字水平居中。

::: preview
demo-preview=../../demo/message/Center.vue
:::

## 关闭所有消息

调用 `PxMessage.closeAll()` 关闭所有消息。

::: preview
demo-preview=../../demo/message/CloseAll.vue
:::

## API

### Options

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 消息文字 | `string \| VNode` | — |
| type | 消息类型 | `'success' \| 'warning' \| 'info' \| 'danger' \| 'error'` | `'info'` |
| duration | 显示时间（毫秒），设为 0 则不会自动关闭 | `number` | `3000` |
| showClose | 是否显示关闭按钮 | `boolean` | `false` |
| center | 文字是否居中 | `boolean` | `false` |
| offset | 距离窗口顶部的偏移量 | `number` | `20` |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| PxMessage | 显示消息 | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.success | 显示成功消息 | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.warning | 显示警告消息 | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.info | 显示信息消息 | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.danger | 显示危险消息 | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.error | 显示错误消息 | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.closeAll | 关闭所有消息 | `(type?: MessageType) => void` |

### MessageHandler

| 方法名 | 说明 |
| --- | --- |
| close | 关闭当前消息 |
