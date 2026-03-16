<div align="center">
	<h1 style="margin:10px">vitepress-demo-preview</h1>
	<h6 align="center">Demo of Vue SFC components in vitepress</h6>
</div>

## 🎉 Introduce

We can see their component display and code example display from some excellent UI component libraries such as `element-plus` and `Ant Design Vue`

This project is based on `vitepress` and `markdown-it` implementation to display components and code examples in documents. Using this plug-in, Vue SFC components can be displayed in static documents

## 🏄‍♂️ Packages

| Package                                                 | Version (click for changelogs)                                                                                      |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [@vitepress-demo-preview/component](packages/component) | [![component version](https://badgen.net/npm/v/@vitepress-demo-preview/component)](packages/component/CHANGELOG.md) |
| [@vitepress-demo-preview/plugin](packages/plugin)       | [![plugin version](https://badgen.net/npm/v/@vitepress-demo-preview/plugin)](packages/plugin/CHANGELOG.md)          |

## ⚙️ Installation

```sh
pnpm add @vitepress-demo-preview/component @vitepress-demo-preview/plugin
```

## ⚡ Usage

configure in your vitepress/theme entry file

```ts
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer)
  }
}
```

configure markdown to add plugin

```ts
import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})
```

### Preview of Component Form

```md
<!-- Tip: Support for closed tags -->

<preview path="./xxx/xx.vue"></preview>

<preview path="./xxx/xx.vue" title="title"></preview>

<preview path="./xxx/xx.vue" title="title" description="component description content"></preview>
```

### Preview by Container Form

```md
:::preview

demo-preview=./xxx/xx.vue

:::

:::preview title

demo-preview=./xxx/xx.vue

:::

:::preview title || component description content

demo-preview=./xxx/xx.vue

:::
```

## 📦 Packages

### `@vitepress-demo-preview/plugin`

`@vitepress-demo-preview/plugin` is a markdown-it plugin, which mainly provides two kinds of Component preview methods, namely **Component Form** and **Container Form**.

### `@vitepress-demo-preview/component`

`@vitepress-demo-preview/component` is a component library that provides the **ElementPlus Container** presentation component, which mimics the style associated with the ElementPlus UI framework component preview.

**Tip:** `@vitepress-demo-preview/component` is not necessary. You can also consider just using the `@vitepress-demo-preview/plugin`, which is not bound to each other. You can implement your own component container according to your own preferences and needs.

## 📑 License

[MIT](https://github.com/flingyp/vitepress-demo-preview/blob/main/LICENSE)

Copyright (c) 2023 flingyp
