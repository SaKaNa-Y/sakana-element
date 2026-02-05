# Icon 图标

Sakana Element 使用 [pixelarticons](https://pixelarticons.com/) 作为图标方案 - 一个像素风格的图标库，包含 480+ 个基于 24x24 网格的图标。

## 基础用法

使用 `icon` 属性指定图标名称。图标名称遵循 pixelarticons 的命名规范。

::: preview
demo-preview=../../demo/icon/Basic.vue
:::

## 不同尺寸

使用 `size` 属性设置图标大小。尺寸基于 24px 网格：

- `xs`：12px
- `sm`：18px
- `md`：24px（默认）
- `lg`：36px
- `xl`：48px
- `2xl`：72px
- `1x`、`2x`、`3x`：兼容 FA 的别名（24px、48px、72px）

::: preview
demo-preview=../../demo/icon/Size.vue
:::

## 图标颜色

使用 `type` 或 `color` 属性设置图标颜色。

::: preview
demo-preview=../../demo/icon/Color.vue
:::

## 图标动画

支持多种像素风格的动画效果，使用 CSS `steps()` 实现逐帧动画效果：`spin`、`pulse`、`bounce`、`shake`、`beat`、`fade`。

::: preview
demo-preview=../../demo/icon/Animation.vue
:::

## 自定义图标

你可以使用 `registerPixelIcon` 函数注册自定义像素图标：

```ts
import { registerPixelIcon } from 'sakana-element';

// 使用 SVG 字符串注册自定义图标
registerPixelIcon('my-icon', '<svg viewBox="0 0 24 24">...</svg>');
```

然后像其他图标一样使用：

```vue
<px-icon icon="my-icon" />
```

## 可用图标

以下是 Sakana Element 内置的常用图标：

| 图标名称 | 描述 |
| --- | --- |
| `loader` | 加载中 |
| `check` | 对勾 / 成功 |
| `close` | 关闭 / X |
| `close-box` | 方框内关闭 / 错误 |
| `info-box` | 信息 |
| `warning-box` | 警告 |
| `eye` | 眼睛 / 可见 |
| `eye-closed` | 闭眼 / 隐藏 |
| `chevron-down` | 下箭头 |
| `chevron-up` | 上箭头 |
| `chevron-left` | 左箭头 |
| `chevron-right` | 右箭头 |
| `home` | 主页 |
| `user` | 用户 |
| `search` | 搜索 |
| `heart` | 心形 |
| `bookmark` | 书签 / 星标 |
| `notification` | 通知 / 铃铛 |
| `sliders` | 设置 |
| `edit` | 编辑 / 铅笔 |
| `trash` | 删除 / 垃圾桶 |

完整的图标列表请访问 [pixelarticons.com](https://pixelarticons.com/)。

## 图标名称映射

为了方便使用，一些常见的 FontAwesome 图标名称会自动映射到 pixelarticons 的等效名称：

| 别名 | 映射到 |
| --- | --- |
| `spinner`、`loading` | `loader` |
| `xmark`、`x`、`times` | `close` |
| `circle-xmark`、`x-circle`、`error` | `close-box` |
| `circle-info`、`info-circle`、`info` | `info-box` |
| `check-circle`、`circle-check`、`success` | `check` |
| `circle-exclamation`、`exclamation-circle`、`warning` | `warning-box` |
| `eye-slash`、`eye-off` | `eye-closed` |
| `angle-down`、`caret-down` | `chevron-down` |
| `angle-up`、`caret-up` | `chevron-up` |
| `angle-left`、`caret-left` | `chevron-left` |
| `angle-right`、`caret-right` | `chevron-right` |
| `gear`、`cog`、`settings` | `sliders` |
| `star`、`star-solid` | `bookmark` |

## API

### Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标名称（pixelarticons 名称或映射别名） | `string` | — |
| size | 图标大小 | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| '2x' \| '3x'` | `'md'` |
| type | 图标类型颜色 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| color | 自定义颜色 | `string` | — |
| spin | 旋转动画（逐帧） | `boolean` | `false` |
| pulse | 脉冲动画（旋转 + 缩放） | `boolean` | `false` |
| bounce | 弹跳动画（垂直跳动） | `boolean` | `false` |
| shake | 抖动动画（水平抖动） | `boolean` | `false` |
| beat | 心跳动画（缩放跳动） | `boolean` | `false` |
| fade | 淡入淡出动画（透明度闪烁） | `boolean` | `false` |
| rotation | 旋转角度 | `90 \| 180 \| 270` | — |
| flip | 翻转方向 | `'horizontal' \| 'vertical' \| 'both'` | — |
