# Input 输入框

用于接收用户输入的文本框组件。

## 基础用法

基础的输入框用法。

::: preview
demo-preview=../../demo/input/Basic.vue
:::

## 不同尺寸

使用 `size` 属性来设置输入框的大小。

::: preview
demo-preview=../../demo/input/Size.vue
:::

## 可清空

使用 `clearable` 属性来启用清空按钮。

::: preview
demo-preview=../../demo/input/Clearable.vue
:::

## 密码框

使用 `type="password"` 和 `show-password` 属性来创建密码输入框。

::: preview
demo-preview=../../demo/input/Password.vue
:::

## API

### 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string` | — |
| type | 输入框类型 | `'text' \| 'password' \| 'textarea'` | `'text'` |
| placeholder | 占位符 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| readonly | 是否只读 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `false` |
| show-password | 是否显示密码切换按钮 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| prefix-icon | 前缀图标 | `string` | — |
| suffix-icon | 后缀图标 | `string` | — |

### 事件

| 事件名 | 说明 | 类型 |
| --- | --- | --- |
| input | 输入时触发 | `(value: string) => void` |
| change | 值改变时触发 | `(value: string) => void` |
| focus | 获取焦点时触发 | `(event: FocusEvent) => void` |
| blur | 失去焦点时触发 | `(event: FocusEvent) => void` |
| clear | 清空时触发 | `() => void` |

### 插槽

| 插槽名 | 说明 |
| --- | --- |
| prefix | 前缀内容 |
| suffix | 后缀内容 |
| prepend | 前置内容 |
| append | 后置内容 |

### 暴露

| 属性名 | 说明 | 类型 |
| --- | --- | --- |
| ref | 输入框 HTML 元素 | `Ref<HTMLInputElement>` |
| focus | 使输入框获取焦点 | `() => void` |
| blur | 使输入框失去焦点 | `() => void` |
| clear | 清空输入框内容 | `() => void` |
