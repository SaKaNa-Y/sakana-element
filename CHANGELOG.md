# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## <small>2.4.1 (2026-03-17)</small>

* feat(components): add prefixIcon and suffixIcon props to PxInput ([ac020b7](https://github.com/yu859/sakana-element/commit/ac020b7))
* docs(components): enhance Icon docs and add Composables guide with public API exports ([37a60dd](https://github.com/yu859/sakana-element/commit/37a60dd))
* fix(components): stabilize block button hover/active and enhance ConfigProvider demo with translatio ([0786e44](https://github.com/yu859/sakana-element/commit/0786e44))

## 2.4.0 (2026-03-17)

* refactor: remove unnecessary v8 ignore comments and improve test coverage ([cf6fcd7](https://github.com/yu859/sakana-element/commit/cf6fcd7))
* chore: clean up unused code, dependencies, and bump internal versions ([b97f0cf](https://github.com/yu859/sakana-element/commit/b97f0cf))
* chore: update GitHub username and fix license references ([0a7f7f0](https://github.com/yu859/sakana-element/commit/0a7f7f0))
* feat(components): add PxChatBubble component and button 3D bevel effect ([46ab328](https://github.com/yu859/sakana-element/commit/46ab328))
* feat(components): add PxDiff component and input 3D bevel effect ([22caa59](https://github.com/yu859/sakana-element/commit/22caa59))
* feat(components): add PxFilter component and checkbox 3D bevel effect ([a3e70d3](https://github.com/yu859/sakana-element/commit/a3e70d3))
* feat(components): add PxKbd component and switch 3D bevel effect ([aff11b8](https://github.com/yu859/sakana-element/commit/aff11b8))
* feat(components): add PxResizable component and enhance FileInput pixel effects ([d28d1bb](https://github.com/yu859/sakana-element/commit/d28d1bb))
* feat(components): add PxSkeleton component and enhance Select pixel effects ([d92f088](https://github.com/yu859/sakana-element/commit/d92f088))
* feat(components): add PxValidator component and radio 3D bevel effect ([d703e54](https://github.com/yu859/sakana-element/commit/d703e54))
* feat(docs): add component overview page and centralize component metadata ([a549edc](https://github.com/yu859/sakana-element/commit/a549edc))
* feat(docs): add visitor counter with Redis-backed Vercel API ([155dc4d](https://github.com/yu859/sakana-element/commit/155dc4d))
* fix: clean up lint warnings and unused imports ([dcd72af](https://github.com/yu859/sakana-element/commit/dcd72af))
* fix(docs): restrict visitor counter to home page and fix Kbd type error ([d0b60fc](https://github.com/yu859/sakana-element/commit/d0b60fc))
* test: improve test coverage and add CI coverage badge ([fdde024](https://github.com/yu859/sakana-element/commit/fdde024))

## 2.3.0 (2026-03-09)

* feat(card): pixel-art redesign with 3-step staircase corners and beveled depth ([23c6a00](https://github.com/yu859/sakana-element/commit/23c6a00))
* feat(checkbox): add PxCheckbox and PxCheckboxGroup components ([ac9c7e5](https://github.com/yu859/sakana-element/commit/ac9c7e5))
* feat(components): add PxDivider and PxRadio components ([2c9ab95](https://github.com/yu859/sakana-element/commit/2c9ab95))
* feat(dropdown): add icon, maxHeight, hoverColor, showArrow props, keyboard navigation, and pixel-art ([02b900a](https://github.com/yu859/sakana-element/commit/02b900a))
* feat(indicator): add PxIndicator component and extract status dot from Avatar ([401f37f](https://github.com/yu859/sakana-element/commit/401f37f))
* feat(messagebox): add draggable, focus trap, input validation, and enhanced close controls ([0c7532a](https://github.com/yu859/sakana-element/commit/0c7532a))
* feat(notification): pixel-art redesign with staircase corners and beveled depth ([a1e5eb5](https://github.com/yu859/sakana-element/commit/a1e5eb5))
* feat(popconfirm): fix dark-theme title, action layout, and add placement/disabled/arrow/effect props ([0f8b1fa](https://github.com/yu859/sakana-element/commit/0f8b1fa))
* feat(progress): pixel-art redesign with chunked fill and beveled depth ([7ade4cf](https://github.com/yu859/sakana-element/commit/7ade4cf))
* feat(table): add outline, ghost, and hoverable variants; remove redundant dash ([c92e94c](https://github.com/yu859/sakana-element/commit/c92e94c))
* feat(messagebox, dropdown, popconfirm, loading): pixel-art redesign for visual consistency ([0181d9a](https://github.com/yu859/sakana-element/commit/0181d9a))
* feat(pixelate,select): add PxPixelate component and fix Select arrow centering ([d8717e1](https://github.com/yu859/sakana-element/commit/d8717e1))
* feat(tooltip, drawer): enhance Tooltip variants and add Drawer component ([d0d527c](https://github.com/yu859/sakana-element/commit/d0d527c))
* fix(message,progress): fix test regressions, typo, and docs inconsistencies ([2a18196](https://github.com/yu859/sakana-element/commit/2a18196))
* fix(notification,message): pause timer bar on hover and deduplicate error CSS ([7a2de90](https://github.com/yu859/sakana-element/commit/7a2de90))
* docs: rewrite landing pages and READMEs with full feature coverage ([bd6adfd](https://github.com/yu859/sakana-element/commit/bd6adfd))
* fix(progress): remove generic from defineExpose to fix vite:dts TS2322 ([5f556dc](https://github.com/yu859/sakana-element/commit/5f556dc))
* fix(table): fix full-width layout and enhance pixel border style ([2bd50ca](https://github.com/yu859/sakana-element/commit/2bd50ca))
* chore: add changed:minor script for minor version bumps ([329703d](https://github.com/yu859/sakana-element/commit/329703d))

## 2.2.0 (2026-02-26)

* fix: fix typos, suppress test warnings, and improve test coverage ([37d5fbe](https://github.com/yu859/sakana-element/commit/37d5fbe))
* fix: regenerate lockfile after removing concurrently, pixelarticons, release-it ([8ae92f9](https://github.com/yu859/sakana-element/commit/8ae92f9))
* fix(notification): add default position to imperative API, document extendsI18nMsg ([673649c](https://github.com/yu859/sakana-element/commit/673649c))
* feat(card,form,loading): add card variants, migrate form to zod, add LoadingIndicator ([d6bef4c](https://github.com/yu859/sakana-element/commit/d6bef4c))
* feat(avatar): add PxAvatar component with pixel-art initials, status indicator, and border ([6c75f31](https://github.com/yu859/sakana-element/commit/6c75f31))
* feat(badge): add icon prop, empty badge styling, and reorganize docs ([a65b04d](https://github.com/yu859/sakana-element/commit/a65b04d))
* feat(breadcrumb): add disabled prop, fix hover jitter, and prevent link navigation ([a052ab0](https://github.com/yu859/sakana-element/commit/a052ab0))
* feat(collapse): add showArrow and icon props with custom indicator support ([7da7422](https://github.com/yu859/sakana-element/commit/7da7422))
* feat(file-input): add PxFileInput component with browse trigger, clearable, and ghost support ([81ef7ec](https://github.com/yu859/sakana-element/commit/81ef7ec))
* feat(link): add PxLink component and fix MessageBox close icon centering ([9eeba57](https://github.com/yu859/sakana-element/commit/9eeba57))
* chore: gitignore .claude and .agents directories ([d2cfcce](https://github.com/yu859/sakana-element/commit/d2cfcce))
* chore: gitignore husky --version artifact and normalize line endings ([10d7f61](https://github.com/yu859/sakana-element/commit/10d7f61))
* docs: update README component tables and remove boilerplate ([176165d](https://github.com/yu859/sakana-element/commit/176165d))

## <small>2.1.5 (2026-02-22)</small>

* chore(release): publish new version 2.1.4 ([99d3c18](https://github.com/yu859/sakana-element/commit/99d3c18))

## <small>2.1.4 (2026-02-22)</small>

* fix: audit — computed side-effects, debounce leaks, bundle size, typos ([a7aba5b](https://github.com/yu859/sakana-element/commit/a7aba5b))
* fix(docs): rename api/ to apis/ to avoid Vercel serverless function detection ([5d9019b](https://github.com/yu859/sakana-element/commit/5d9019b))
* fix(theme): improve dark mode shadow visibility across all components ([3e144f3](https://github.com/yu859/sakana-element/commit/3e144f3)), closes [#11111](https://github.com/yu859/sakana-element/issues/11111) [#585b70](https://github.com/yu859/sakana-element/issues/585b70) [#000000](https://github.com/yu859/sakana-element/issues/000000) [#45475](https://github.com/yu859/sakana-element/issues/45475)
* feat(button): add link, block, responsive variants and inversion hover for default buttons ([1c37243](https://github.com/yu859/sakana-element/commit/1c37243))
* feat(docs): replace static API tables with interactive ApiTable component ([e6ff7ec](https://github.com/yu859/sakana-element/commit/e6ff7ec))
* feat(docs): unify API table categories and merge sub-component tables ([f07700b](https://github.com/yu859/sakana-element/commit/f07700b))
* feat(input): add color variants, ghost style, and fix focus border to inversion system ([817ddde](https://github.com/yu859/sakana-element/commit/817ddde))
* feat(select): add color variants with preset themes and custom hex support ([f64275b](https://github.com/yu859/sakana-element/commit/f64275b))
* feat(select): add ghost/size variants, fix VNode caching bug, and rewrite docs ([973c233](https://github.com/yu859/sakana-element/commit/973c233))

## <small>2.1.3 (2026-02-18)</small>

* refactor(color): replace imperative if-chain customColorStyle with declarative template pattern ([b48b184](https://github.com/yu859/sakana-element/commit/b48b184))
* feat: add Badge component with various styles and custom color support ([319f95d](https://github.com/yu859/sakana-element/commit/319f95d))
* feat(docs): add comprehensive SEO optimization for documentation site ([459637f](https://github.com/yu859/sakana-element/commit/459637f))

## <small>2.1.2 (2026-02-17)</small>

* docs: add Icon flip/collection demos and streamline icon docs ([6f06384](https://github.com/yu859/sakana-element/commit/6f06384))

## <small>2.1.1 (2026-02-16)</small>

* chore: sync lerna.json version to 2.1.0 and add missing git tag ([b38cce6](https://github.com/yu859/sakana-element/commit/b38cce6))

## <small>2.0.2 (2026-02-15)</small>

* fix: extract base64 font from CSS to prevent stack overflow ([d78edd1](https://github.com/yu859/sakana-element/commit/d78edd1))

## <small>2.0.1 (2026-02-15)</small>

* fix: clean up post-publish artifacts ([4b6d4d4](https://github.com/yu859/sakana-element/commit/4b6d4d4))
* fix: fix package exports and rewrite docs ([9816e60](https://github.com/yu859/sakana-element/commit/9816e60))
* fix: update lockfile for vue3-i18n peer dependency ([5509a1a](https://github.com/yu859/sakana-element/commit/5509a1a))

## 2.0.0 (2026-02-15)

* fix: Fix deployment ([fad0219](https://github.com/yu859/sakana-element/commit/fad0219))
* fix: Fix deployment ([53be4cf](https://github.com/yu859/sakana-element/commit/53be4cf))
* fix: Fix deployment ([b4bbbe2](https://github.com/yu859/sakana-element/commit/b4bbbe2))
* fix: Fix deployment ([36682dd](https://github.com/yu859/sakana-element/commit/36682dd))
* fix: Fix deployment ([2d18e34](https://github.com/yu859/sakana-element/commit/2d18e34))
* fix: Fix deployment ([580f2a9](https://github.com/yu859/sakana-element/commit/580f2a9))
* fix: Fix deployment ([014e1a4](https://github.com/yu859/sakana-element/commit/014e1a4))
* fix: fix lerna changelog crash and hooks package config ([a03579c](https://github.com/yu859/sakana-element/commit/a03579c))
* fix: Fix wrong ([e1b0374](https://github.com/yu859/sakana-element/commit/e1b0374))
* fix: Fix wrong ([a4f830d](https://github.com/yu859/sakana-element/commit/a4f830d))
* fix: Fix wrong ([54d8526](https://github.com/yu859/sakana-element/commit/54d8526))
* fix: Fix wrong ([b5becf6](https://github.com/yu859/sakana-element/commit/b5becf6))
* fix: Fix wrong ([7c939be](https://github.com/yu859/sakana-element/commit/7c939be))
* fix: Pre-publish cleanup ([47a2afb](https://github.com/yu859/sakana-element/commit/47a2afb))
* fix: Pre-publish cleanup ([d2f98f9](https://github.com/yu859/sakana-element/commit/d2f98f9))
* fix(ci): Rewrite GitHub Actions workflow and switch docs deploy to Vercel ([3a61966](https://github.com/yu859/sakana-element/commit/3a61966))
* fix(ci): Rewrite GitHub Actions workflow and switch docs deploy to Vercel ([244ee99](https://github.com/yu859/sakana-element/commit/244ee99))
* fix(security): Harden components against XSS and prototype pollution ([c1bd775](https://github.com/yu859/sakana-element/commit/c1bd775))
* chore: bump @storybook/addon-interactions from 8.5.4 to 8.6.14 ([4bb9d8d](https://github.com/yu859/sakana-element/commit/4bb9d8d))
* ci: bump actions/download-artifact from 4 to 7 ([10dd162](https://github.com/yu859/sakana-element/commit/10dd162))
* feat: add Chinese documentation for various components and get started guide ([e6a3730](https://github.com/yu859/sakana-element/commit/e6a3730))
* feat: Add custom color support, update the Button component, and update documentation and examples. ([11b85a6](https://github.com/yu859/sakana-element/commit/11b85a6))
* feat: add pixel art icons and icon registry ([ed2f18d](https://github.com/yu859/sakana-element/commit/ed2f18d))
* feat: add pixel border and shadow paint worklets; implement component renaming script ([eb02960](https://github.com/yu859/sakana-element/commit/eb02960))
* feat: Add unit tests for new hooks and utilities ([6b1cc41](https://github.com/yu859/sakana-element/commit/6b1cc41))
* feat: Add VitePress deployment and theme configuration documentation ([89cafd6](https://github.com/yu859/sakana-element/commit/89cafd6))
* feat: Enhance form item layout and label positioning; remove console logs and improve popconfirm tex ([ffb9d18](https://github.com/yu859/sakana-element/commit/ffb9d18))
* feat: refactor button components and update styling; remove legacy variables ([59a4914](https://github.com/yu859/sakana-element/commit/59a4914))
* feat: Refactor button styles to use pixel borders and drop shadows; enhance button group appearance ([20f0459](https://github.com/yu859/sakana-element/commit/20f0459))
* feat: Update icon names, improve component consistency, and add support for custom icon registration ([0e2e4e3](https://github.com/yu859/sakana-element/commit/0e2e4e3))
* feat(tests): Add unit tests for ConfigProvider, Form, Icon, and Overlay components ([e868fc0](https://github.com/yu859/sakana-element/commit/e868fc0))
* refactor: Update styles for Input, Message, Select, Switch, Tooltip components ([013ea92](https://github.com/yu859/sakana-element/commit/013ea92))
* :tada: first commit ([9df6968](https://github.com/yu859/sakana-element/commit/9df6968))
* 发布npm ([8f80279](https://github.com/yu859/sakana-element/commit/8f80279))
* 提高测试覆盖率 ([62b82da](https://github.com/yu859/sakana-element/commit/62b82da))
* 提高Tooltip测试覆盖率 ([a0b1355](https://github.com/yu859/sakana-element/commit/a0b1355))
* 项目打包 ([76975f6](https://github.com/yu859/sakana-element/commit/76975f6))
* Alert ([0fcada0](https://github.com/yu859/sakana-element/commit/0fcada0))
* Button-01 ([47bf8cb](https://github.com/yu859/sakana-element/commit/47bf8cb))
* Button-02 ([fd8543e](https://github.com/yu859/sakana-element/commit/fd8543e))
* ButtonGroup ([f194165](https://github.com/yu859/sakana-element/commit/f194165))
* Collapse-01 ([c5df629](https://github.com/yu859/sakana-element/commit/c5df629))
* Collapse-02、打包优化 ([fc277ba](https://github.com/yu859/sakana-element/commit/fc277ba))
* docs:README.md ([edfa957](https://github.com/yu859/sakana-element/commit/edfa957))
* Dropdown ([caa9cad](https://github.com/yu859/sakana-element/commit/caa9cad))
* feat:Form-01 ([1f42467](https://github.com/yu859/sakana-element/commit/1f42467))
* fix:工作流 ([8473084](https://github.com/yu859/sakana-element/commit/8473084))
* Input ([3f7bce3](https://github.com/yu859/sakana-element/commit/3f7bce3))
* Loading ([f6766a5](https://github.com/yu859/sakana-element/commit/f6766a5))
* Message-01 ([ca5191a](https://github.com/yu859/sakana-element/commit/ca5191a))
* Message-02 ([27431b2](https://github.com/yu859/sakana-element/commit/27431b2))
* MessageBox ([a2d875f](https://github.com/yu859/sakana-element/commit/a2d875f))
* Notification-01 ([b9eced4](https://github.com/yu859/sakana-element/commit/b9eced4))
* Notification-02 ([4d667e7](https://github.com/yu859/sakana-element/commit/4d667e7))
* Popconfirm ([df43eee](https://github.com/yu859/sakana-element/commit/df43eee))
* Release 1.0.2 ([1e94da2](https://github.com/yu859/sakana-element/commit/1e94da2))
* Release 1.0.3 ([377bf43](https://github.com/yu859/sakana-element/commit/377bf43))
* Select-01 ([37ae9ed](https://github.com/yu859/sakana-element/commit/37ae9ed))
* Select-02 ([b917a92](https://github.com/yu859/sakana-element/commit/b917a92))
* Switch ([59635c0](https://github.com/yu859/sakana-element/commit/59635c0))
* Tooltip-01 ([649b67c](https://github.com/yu859/sakana-element/commit/649b67c))
* Tooltip-02、hooks分包build ([2d1e652](https://github.com/yu859/sakana-element/commit/2d1e652))
* useDisabledStyle、国际化 ([8085b8e](https://github.com/yu859/sakana-element/commit/8085b8e))
* Vitepress组件文档 ([ecd0c0a](https://github.com/yu859/sakana-element/commit/ecd0c0a))
