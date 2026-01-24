# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

::: preview
demo-preview=../../demo/notification/Basic.vue
:::

## 不同类型

用来显示「成功、警告、消息、错误」类的通知。

::: preview
demo-preview=../../demo/notification/Types.vue
:::

## 不同位置

可以让通知从屏幕四角中的任意一角弹出。

::: preview
demo-preview=../../demo/notification/Position.vue
:::

## 自定义时长

设置 `duration` 为 `0` 时通知不会自动关闭。

::: preview
demo-preview=../../demo/notification/Duration.vue
:::

## API

### Options

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | — |
| message | 通知内容 | `string \| VNode` | — |
| type | 通知类型 | `'success' \| 'warning' \| 'info' \| 'danger'` | — |
| duration | 显示时间（毫秒），设为 0 则不会自动关闭 | `number` | `4500` |
| position | 弹出位置 | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` |
| showClose | 是否显示关闭按钮 | `boolean` | `true` |
| offset | 距离窗口边缘的偏移量 | `number` | `16` |
| icon | 自定义图标 | `string` | — |
| onClick | 点击回调 | `() => void` | — |
| onClose | 关闭回调 | `() => void` | — |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| PxNotification | 显示通知 | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.success | 显示成功通知 | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.warning | 显示警告通知 | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.info | 显示信息通知 | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.danger | 显示危险通知 | `(options: NotificationOptions) => NotificationHandler` |
| PxNotification.closeAll | 关闭所有通知 | `() => void` |
