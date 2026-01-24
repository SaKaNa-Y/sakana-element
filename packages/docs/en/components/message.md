# Message

Used to show feedback after an activity.

## Basic Usage

Displays at the top and disappears after 3 seconds.

::: preview
demo-preview=../../demo/message/Basic.vue
:::

## Different Types

Used to show feedback for success, warning, message, and error activities.

::: preview
demo-preview=../../demo/message/Types.vue
:::

## Closable Message

A close button can be added.

::: preview
demo-preview=../../demo/message/Closable.vue
:::

## Centered Text

Use `center` attribute to center the text.

::: preview
demo-preview=../../demo/message/Center.vue
:::

## Close All Messages

Call `PxMessage.closeAll()` to close all messages.

::: preview
demo-preview=../../demo/message/CloseAll.vue
:::

## API

### Options

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| message | Message text | `string \| VNode` | — |
| type | Message type | `'success' \| 'warning' \| 'info' \| 'danger' \| 'error'` | `'info'` |
| duration | Display duration (ms), 0 means no auto close | `number` | `3000` |
| showClose | Whether to show close button | `boolean` | `false` |
| center | Whether to center the text | `boolean` | `false` |
| offset | Offset from the top of window | `number` | `20` |

### Methods

| Method | Description | Parameters |
| --- | --- | --- |
| PxMessage | Show message | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.success | Show success message | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.warning | Show warning message | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.info | Show info message | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.danger | Show danger message | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.error | Show error message | `(options: MessageOptions \| string) => MessageHandler` |
| PxMessage.closeAll | Close all messages | `(type?: MessageType) => void` |

### MessageHandler

| Method | Description |
| --- | --- |
| close | Close current message |
