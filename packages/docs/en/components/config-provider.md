---
title: ConfigProvider | Sakana Element
description: Global configuration provider for Sakana Element components, supporting i18n locale switching.
---

<script setup>
import { configProviderApi } from '../../apis/config-provider'
</script>

# ConfigProvider

Provides global configuration for descendant components, primarily used for internationalization (i18n) locale switching.

<ApiTable :sections="configProviderApi" lang="en" />

## Usage

Wrap your application (or a subtree) with `<px-config-provider>` and pass a `locale` object to switch the language of all components within. The demo below shows a Select (with "No data" placeholder), a Popconfirm (with translated Yes / No buttons), and a MessageBox — all responding to the same locale picker.

> **Note:** `PxMessageBox()` is an imperative API that renders into a detached container, so it cannot inherit locale from ConfigProvider. You need to pass translated strings explicitly (e.g. `confirmButtonText`, `cancelButtonText`, `title`) from the locale object.

::: preview
demo-preview=../../demo/config-provider/Unified.vue
:::

## Extending i18n Messages

Use the `extendsI18nMsg` prop to override or add translation keys without replacing the entire locale. The object is **deep-merged** into the built-in messages, so you only need to specify the keys you want to change.

The shape must match the internal message structure — keyed by locale name at the top level:

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

The demo below shows two Popconfirms side by side: one with default button text, and one with overridden text via `extendsI18nMsg`.

::: preview
demo-preview=../../demo/config-provider/ExtendsI18nMsg.vue
:::

## Available Locales

Sakana Element ships with the following built-in locales:

| Locale | Import Name | Language |
|--------|-------------|----------|
| English | `en` | English (default) |
| 简体中文 | `zhCn` | Simplified Chinese |
| 繁體中文 | `zhTw` | Traditional Chinese |
| 日本語 | `ja` | Japanese |
| 한국어 | `ko` | Korean |

```js
import { en, zhCn, zhTw, ja, ko } from 'sakana-element'
```
