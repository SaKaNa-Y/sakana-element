---
title: ContextMenu | Sakana Element
description: Pixel-style right-click context menu with submenus, checkbox items, radio items, and keyboard navigation.
---

<script setup>
import { contextMenuApi, contextMenuItemApi, contextMenuCheckboxApi, contextMenuRadioApi, contextMenuSubApi, contextMenuKeyboardApi } from '../../apis/context-menu'
</script>

# ContextMenu

Right-click activated menu with items, submenus, checkbox and radio items.

<ApiTable :sections="[...contextMenuApi, ...contextMenuItemApi, ...contextMenuCheckboxApi, ...contextMenuRadioApi, ...contextMenuSubApi, ...contextMenuKeyboardApi]" lang="en" />

## Basic Usage

Right-click the trigger area to open the context menu. Use the `items` prop for quick setup.

::: preview
demo-preview=../../demo/context-menu/Basic.vue
:::

## Slot-Based Composition

Use sub-components in the `content` slot for full control: labels, separators, icons, and keyboard shortcuts.

::: preview
demo-preview=../../demo/context-menu/SlotBased.vue
:::

## Submenu

Nest menus with `PxContextMenuSub`. Submenus open on hover with a slight delay.

::: preview
demo-preview=../../demo/context-menu/Submenu.vue
:::

## Disabled Items

Set `disabled` on individual items to prevent interaction.

::: preview
demo-preview=../../demo/context-menu/Disabled.vue
:::

## Checkbox Items

Use `PxContextMenuCheckboxItem` with `v-model` for toggle items. Set `hide-on-click` to `false` to keep the menu open.

::: preview
demo-preview=../../demo/context-menu/Checkbox.vue
:::

## Radio Items

Wrap `PxContextMenuRadioItem` in a `PxContextMenuRadioGroup` with `v-model` for exclusive selection.

::: preview
demo-preview=../../demo/context-menu/Radio.vue
:::
