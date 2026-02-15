# 快速开始

本指南将帮助你在 Vue 3 项目中安装和配置 Sakana Element。

## 环境要求

- [Node.js](https://nodejs.org/) 18 或更高版本
- [Vue](https://vuejs.org/) 3.4 或更高版本

## 安装

::: code-group

```bash [npm]
npm install sakana-element
```

```bash [yarn]
yarn add sakana-element
```

```bash [pnpm]
pnpm add sakana-element
```

:::

## 完整引入

最简单的使用方式，全局注册所有组件。

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import SakanaElement from 'sakana-element'
import 'sakana-element/dist/index.css'

const app = createApp(App)
app.use(SakanaElement)
app.mount('#app')
```

::: warning 别忘了引入 CSS！
你**必须**引入 `sakana-element/dist/index.css`——否则组件将没有任何样式。这是最常见的配置错误。
:::

现在你可以在模板中直接使用任意组件：

```vue
<template>
  <px-button type="primary">像素按钮</px-button>
</template>
```

## 按需引入

如果你希望减小打包体积，可以只引入需要的组件：

```vue
<template>
  <PxButton type="primary">像素按钮</PxButton>
  <PxInput v-model="text" placeholder="请输入..." />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PxButton, PxInput } from 'sakana-element'
import 'sakana-element/dist/index.css'

const text = ref('')
</script>
```

::: tip
即使使用按需引入，你仍然需要引入 CSS 文件。建议在 `main.ts` 中统一引入一次，而不是在每个组件中重复引入。
:::

## 主题模式

Sakana Element 内置了深色和浅色主题支持。使用 `useTheme` 组合式函数来控制主题：

```ts
import { useTheme } from 'sakana-element'

const { theme, toggleTheme, setTheme } = useTheme()

toggleTheme()        // 在深色和浅色之间切换
setTheme('dark')     // 设置为深色模式
setTheme('light')    // 设置为浅色模式
setTheme('system')   // 跟随系统设置
```

## Volar 支持

如果你使用 [Volar](https://github.com/vuejs/language-tools) 进行 Vue IDE 支持，Sakana Element 提供了完整的类型定义。你可以获得所有 `Px` 前缀组件及其 props 的自动补全。

## 特性

- 🎮 **像素风格设计** — 复古游戏美学，硬边边框和偏移阴影
- 🌓 **深色模式** — 支持深色/浅色/跟随系统的主题切换
- 📦 **按需加载** — 支持 Tree Shaking
- 🔧 **TypeScript** — 完整的类型定义
- 📖 **双语文档** — 中英文文档支持
