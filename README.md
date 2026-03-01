# Sakana Element

[![npm version](https://img.shields.io/npm/v/sakana-element.svg)](https://www.npmjs.com/package/sakana-element)
[![npm downloads](https://img.shields.io/npm/dm/sakana-element.svg)](https://www.npmjs.com/package/sakana-element)
[![license](https://img.shields.io/npm/l/sakana-element.svg)](https://github.com/yu859/sakana-element/blob/master/LICENSE)

A Vue 3 + TypeScript component library with pixel art design aesthetic.

像素风格的 Vue 3 + TypeScript 组件库。

**[Documentation / 文档](https://sakana-element-docs.vercel.app)** | **[GitHub](https://github.com/yu859/sakana-element)** | **[npm](https://www.npmjs.com/package/sakana-element)**

---

## Features / 特性

- 🎨 **CSS Houdini Pixel Rendering** — Pixel borders and shadows drawn natively via CSS Paint API worklets / CSS Houdini Paint Worklet 原生绘制像素边框和阴影
- 🧩 **25 Components** — Buttons, forms, tables, cards, notifications, and more, each with pixel-art styling / 25 个像素风格组件，涵盖按钮、表单、表格、卡片、通知等
- ⭐ **486 Pixel Icons** — Full pixelarticons set bundled with flip, rotation, and animation support / 内置 486 个像素图标，支持翻转、旋转和动画
- 🌙 **Catppuccin Dark Mode** — One-class theme toggle with system preference auto-detection / Catppuccin 配色暗色模式，支持系统偏好自动检测
- 🔧 **Vue 3 + TypeScript** — Full Composition API & type safety with IntelliSense / 完整的组合式 API 和类型安全
- 📦 **Tree-Shakable** — ES module build with per-component chunks / ES 模块构建，按组件分包，按需引入
- 🌐 **5 Locales** — EN, ZH-CN, ZH-TW, JA, KO internationalization built in / 内置英、简中、繁中、日、韩五种语言
- 📖 **190+ Live Demos** — Bilingual documentation with interactive examples / 中英双语文档，190+ 个交互式示例

## Install / 安装

```bash
pnpm add sakana-element
# or
npm install sakana-element
```

## Quick Start / 快速开始

```ts
// main.ts
import { createApp } from 'vue'
import SakanaElement from 'sakana-element'
import 'sakana-element/dist/index.css'
import App from './App.vue'

createApp(App).use(SakanaElement).mount('#app')
```

## Components / 组件

### Basic / 基础

| Component | Description / 描述 |
|-----------|-------------------|
| `PxButton` | Button with 8+ style variants / 按钮（8+ 种风格变体） |
| `PxIcon` | 486 built-in pixel icons / 486 个内置像素图标 |

### Form / 表单

| Component | Description / 描述 |
|-----------|-------------------|
| `PxInput` | Text, password, textarea, date, and more / 输入框（多种类型） |
| `PxSwitch` | Toggle switch / 开关 |
| `PxSelect` | Dropdown select with filtering / 选择器（支持搜索过滤） |
| `PxFileInput` | File upload input / 文件输入 |
| `PxForm` | Form layout with validation / 表单（支持验证） |

### Data Display / 数据展示

| Component | Description / 描述 |
|-----------|-------------------|
| `PxBadge` | Status badge / 徽章 |
| `PxAvatar` | User avatar / 头像 |
| `PxCard` | Card with staircase corners / 卡片（阶梯角） |
| `PxProgress` | Progress bar with pixel chunks / 进度条（像素分块） |
| `PxTable` | Data table / 数据表格 |
| `PxCollapse` | Accordion collapse / 折叠面板 |
| `PxPixelate` | Image pixelation effect / 图片像素化 |

### Navigation / 导航

| Component | Description / 描述 |
|-----------|-------------------|
| `PxLink` | Hyperlink / 链接 |
| `PxBreadcrumb` | Breadcrumb trail / 面包屑 |

### Feedback / 反馈

| Component | Description / 描述 |
|-----------|-------------------|
| `PxAlert` | Alert message / 警告提示 |
| `PxTooltip` | Tooltip popup / 文字提示 |
| `PxMessage` | Toast message / 消息提示 |
| `PxNotification` | Notification panel / 通知 |
| `PxPopconfirm` | Popover confirm / 气泡确认框 |
| `PxMessageBox` | Modal dialog / 消息弹框 |
| `PxLoading` | Loading overlay / 加载 |
| `PxDropdown` | Dropdown menu / 下拉菜单 |

### Config / 配置

| Component | Description / 描述 |
|-----------|-------------------|
| `PxConfigProvider` | Global config provider / 全局配置 |

## Composition Hooks / 组合式函数

| Hook | Description / 描述 |
|------|-------------------|
| `useTheme` | Reactive theme state (light / dark / system) / 响应式主题状态 |
| `useSystemTheme` | Detect OS color scheme preference / 检测系统配色偏好 |

```ts
import { useTheme } from 'sakana-element'

const { theme, toggleTheme, setTheme } = useTheme()

toggleTheme()        // Toggle between dark and light
setTheme('dark')     // Force dark mode
setTheme('system')   // Follow system preference
```

## CSS Houdini Paint Worklets

Sakana Element uses [CSS Houdini Paint API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API) worklets to render pixel borders and shadows programmatically. These are registered automatically when you install the library — no extra configuration needed.

Sakana Element 使用 CSS Houdini Paint API Worklet 以编程方式绘制像素边框和阴影。安装组件库后自动注册，无需额外配置。

- `pixel-border` — Draws authentic stepped pixel borders via `--px-border-color`, `--px-border-width`, `--px-border-pixel-size`
- `pixel-shadow` — Creates pixelated drop shadows via `--px-shadow-color`, `--px-shadow-offset`, `--px-border-pixel-size`

## Icons / 图标

486 icons from [pixelarticons](https://pixelarticons.com/) are bundled out of the box — with support for flip, rotation, animations, and custom SVG registration.

内置 [pixelarticons](https://pixelarticons.com/) 的 486 个像素风格图标，开箱即用 — 支持翻转、旋转、动画及自定义 SVG 注册。

```vue
<px-icon icon="home" size="lg" type="primary" />
<px-icon icon="heart" color="#e91e63" beat />
```

## Bundled Font / 内置字体

This package includes the [zpix](https://github.com/SolidZORO/zpix-pixel-font) pixel font (~6.9MB `.ttf`), which provides the retro pixel art look. It loads automatically via CSS `@font-face` when you import `sakana-element/dist/index.css` — no extra setup required. The font accounts for most of the package size (~8MB total); actual library code + CSS is ~1MB.

本组件库内置了 [zpix 像素字体](https://github.com/SolidZORO/zpix-pixel-font)（~6.9MB `.ttf`），用于实现复古像素风格外观。导入 `sakana-element/dist/index.css` 后字体会通过 CSS `@font-face` 自动加载，无需额外配置。字体文件占包体积大部分（总计约 8MB），组件库本身的代码和样式仅约 1MB。

## Dark Mode / 暗色模式

Add the `px-dark` or `dark` class to an ancestor element:

在祖先元素上添加 `px-dark` 或 `dark` 类名：

```html
<html class="px-dark">
  <!-- All Sakana Element components will render in dark mode -->
</html>
```

## Development / 开发

### Prerequisites / 前置要求

- Node.js >= 18
- pnpm >= 8

### Setup / 设置

```bash
git clone https://github.com/yu859/sakana-element.git
cd sakana-element
pnpm install
```

### Dev Commands / 开发命令

```bash
pnpm dev          # Development playground / 开发环境
pnpm story        # Storybook / 组件预览
pnpm docs:dev     # Documentation site / 文档站点
```

### Test Commands / 测试命令

```bash
pnpm test         # All tests / 全部测试
pnpm test-comp    # Component tests / 组件测试
pnpm test-utils   # Utils tests / 工具测试
pnpm test-hooks   # Hooks tests / Hooks 测试
```

### Build / 构建

```bash
pnpm build        # Build library / 构建组件库
pnpm docs:build   # Build docs / 构建文档
```

## Monorepo Structure / 项目结构

```
packages/
├── core        — Main entry, published as `sakana-element`
├── components  — Component implementations
├── hooks       — Reusable composition functions
├── utils       — Shared utilities
├── theme       — CSS theme & Houdini Paint Worklets
├── locale      — i18n support (EN, ZH-CN, ZH-TW, JA, KO)
├── docs        — VitePress documentation
└── play        — Storybook playground
```

## License / 许可证

[ISC](./LICENSE)
