# Notification

Displays a global notification message at a corner of the page.

## Basic Usage

::: preview
demo-preview=../../demo/notification/Basic.vue
:::

## Different Types

Used to show notification for success, warning, message, and error activities.

::: preview
demo-preview=../../demo/notification/Types.vue
:::

## Different Positions

Notification can emerge from any corner of the page.

::: preview
demo-preview=../../demo/notification/Position.vue
:::

## Custom Duration

Setting `duration` to `0` will not auto close the notification.

::: preview
demo-preview=../../demo/notification/Duration.vue
:::

## API

### Options

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `string` | — |
| message | Notification content | `string \| VNode` | — |
| type | Notification type | `'success' \| 'warning' \| 'info' \| 'danger'` | — |
| duration | Display duration (ms), 0 means no auto close | `number` | `4500` |
| position | Position | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` |
| showClose | Whether to show close button | `boolean` | `true` |
| offset | Offset from window edge | `number` | `16` |
| icon | Custom icon | `string` | — |
| onClick | Click callback | `() => void` | — |
| onClose | Close callback | `() => void` | — |

### Methods

| Method | Description | Parameters |
| --- | --- | --- |
| PxNotification | Show notification | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.success | Show success notification | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.warning | Show warning notification | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.info | Show info notification | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.danger | Show danger notification | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.closeAll | Close all notifications | `() => void` |
