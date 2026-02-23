---
title: ConfigProvider 全局配置 | Sakana Element 像素组件库
description: Sakana Element 全局配置组件，支持国际化语言切换和扩展消息配置。
---

<script setup>
import { configProviderApi } from '../../apis/config-provider'
</script>

# ConfigProvider 全局配置

为后代组件提供全局配置，主要用于国际化（i18n）语言切换。

<ApiTable :sections="configProviderApi" lang="zh" />

## 用法

使用 `<px-config-provider>` 包裹你的应用（或子组件树），传入 `locale` 对象即可切换内部所有组件的语言。下面的示例展示了 Select（"无数据"占位文案）、Popconfirm（翻译后的确认 / 取消按钮）以及 MessageBox —— 它们共享同一个语言选择器。

> **注意：** `PxMessageBox()` 是命令式 API，它会渲染到一个独立的容器中，无法继承 ConfigProvider 提供的语言包。你需要从 locale 对象中手动传入翻译后的字符串（如 `confirmButtonText`、`cancelButtonText`、`title`）。

::: preview
demo-preview=../../demo/config-provider/Unified.vue
:::

## 扩展国际化消息

通过 `extendsI18nMsg` 属性可以覆盖或新增翻译键，无需替换整个语言包。该对象会与内置消息进行**深度合并**，你只需指定要修改的键即可。

对象结构需与内部消息格式一致 —— 顶层以语言名称为键：

```typescript
const customMessages = {
  en: {
    popconfirm: {
      confirmButtonText: 'Sure!',
      cancelButtonText: 'Nope',
    },
  },
}
```

下方示例展示了两个并排的 Popconfirm：一个使用默认按钮文案，另一个通过 `extendsI18nMsg` 覆盖了文案。

::: preview
demo-preview=../../demo/config-provider/ExtendsI18nMsg.vue
:::

## 内置语言包

Sakana Element 内置以下语言包：

| 语言包 | 导入名称 | 语言 |
|--------|----------|------|
| English | `en` | 英语（默认） |
| 简体中文 | `zhCn` | 简体中文 |
| 繁體中文 | `zhTw` | 繁体中文 |
| 日本語 | `ja` | 日语 |
| 한국어 | `ko` | 韩语 |

```js
import { en, zhCn, zhTw, ja, ko } from 'sakana-element'
```
