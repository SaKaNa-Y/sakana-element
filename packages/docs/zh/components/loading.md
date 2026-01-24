# Loading 加载

加载数据时显示动效。

## 区域加载

在容器中加载数据时显示。

::: preview
demo-preview=../../demo/loading/Basic.vue
:::

## 自定义

可以自定义加载文案、背景色等。

::: preview
demo-preview=../../demo/loading/Custom.vue
:::

## 全屏加载

使用全屏加载。

::: preview
demo-preview=../../demo/loading/Fullscreen.vue
:::

## 服务方式调用

Loading 还可以以服务方式调用。

::: preview
demo-preview=../../demo/loading/Service.vue
:::

## API

### 指令

| 指令名 | 说明 | 类型 |
| --- | --- | --- |
| v-loading | 是否显示加载 | `boolean` |

### Options (服务方式)

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 加载需要覆盖的目标元素 | `HTMLElement \| string` | `document.body` |
| fullscreen | 是否全屏加载 | `boolean` | `false` |
| lock | 锁定屏幕滚动 | `boolean` | `false` |
| text | 加载文案 | `string` | — |
| background | 遮罩背景色 | `string` | — |
| spinner | 自定义加载图标 | `string \| boolean` | — |

### Instance Methods

| 方法名 | 说明 |
| --- | --- |
| close | 关闭 Loading |
