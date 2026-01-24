# MessageBox

A set of modal boxes simulating system message box.

## Alert

Used to alert users, only has a confirm button.

::: preview
demo-preview=../../demo/message-box/Alert.vue
:::

## Confirm

Used to ask users to confirm an operation, has confirm and cancel buttons.

::: preview
demo-preview=../../demo/message-box/Confirm.vue
:::

## Prompt

Used to prompt users to input content.

::: preview
demo-preview=../../demo/message-box/Prompt.vue
:::

## Custom Content

Message box content can be customized.

::: preview
demo-preview=../../demo/message-box/Custom.vue
:::

## API

### Options

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | `string` | — |
| message | Message content | `string \| VNode` | — |
| type | Message type | `'success' \| 'warning' \| 'info' \| 'danger' \| 'error'` | — |
| showClose | Whether to show close button | `boolean` | `true` |
| showCancelButton | Whether to show cancel button | `boolean` | `false` |
| showConfirmButton | Whether to show confirm button | `boolean` | `true` |
| cancelButtonText | Cancel button text | `string` | `'Cancel'` |
| confirmButtonText | Confirm button text | `string` | `'Confirm'` |
| cancelButtonType | Cancel button type | `ButtonType` | — |
| confirmButtonType | Confirm button type | `ButtonType` | `'primary'` |
| center | Whether to center the layout | `boolean` | `false` |
| lockScroll | Whether to lock scroll | `boolean` | `true` |
| closeOnClickModal | Whether to close on clicking modal | `boolean` | `true` |
| showInput | Whether to show input | `boolean` | `false` |
| inputPlaceholder | Input placeholder | `string` | — |
| inputValue | Input initial value | `string` | — |
| inputType | Input type | `'text' \| 'textarea' \| 'password' \| 'number'` | `'text'` |

### Methods

| Method | Description | Parameters |
| --- | --- | --- |
| PxMessageBox | Open message box | `(options: MessageBoxOptions) => Promise<MessageBoxData>` |
| PxMessageBox.alert | Open alert box | `(message, title, options?) => Promise<MessageBoxData>` |
| PxMessageBox.confirm | Open confirm box | `(message, title, options?) => Promise<MessageBoxData>` |
| PxMessageBox.prompt | Open prompt box | `(message, title, options?) => Promise<MessageBoxData>` |
| PxMessageBox.close | Close current box | `() => void` |
