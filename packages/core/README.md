# Sakana Element

[![npm version](https://img.shields.io/npm/v/sakana-element.svg)](https://www.npmjs.com/package/sakana-element)
[![license](https://img.shields.io/npm/l/sakana-element.svg)](https://github.com/yu859/sakana-element/blob/master/LICENSE)

A Vue 3 + TypeScript component library with pixel art design aesthetic.

像素风格的 Vue 3 + TypeScript 组件库。

---

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

| Component | Description / 描述 |
|-----------|-------------------|
| `PxButton` | Button / 按钮 |
| `PxInput` | Input / 输入框 |
| `PxSelect` | Select / 选择器 |
| `PxSwitch` | Switch / 开关 |
| `PxIcon` | Icon / 图标 |
| `PxAlert` | Alert / 警告提示 |
| `PxBadge` | Badge / 徽章 |
| `PxCollapse` | Collapse / 折叠面板 |
| `PxDropdown` | Dropdown / 下拉菜单 |
| `PxForm` | Form / 表单 |
| `PxTooltip` | Tooltip / 文字提示 |
| `PxPopconfirm` | Popconfirm / 气泡确认框 |
| `PxMessage` | Message / 消息提示 |
| `PxMessageBox` | MessageBox / 消息弹框 |
| `PxNotification` | Notification / 通知 |
| `PxLoading` | Loading / 加载 |
| `PxOverlay` | Overlay / 遮罩层 |
| `PxConfigProvider` | ConfigProvider / 全局配置 |

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

## Links / 链接

- [GitHub](https://github.com/yu859/sakana-element)
- [npm](https://www.npmjs.com/package/sakana-element)

## License / 许可证

[ISC](https://github.com/yu859/sakana-element/blob/master/LICENSE)
