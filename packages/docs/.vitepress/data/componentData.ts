export type Locale = 'zh' | 'en';

export interface ComponentInfo {
  name: string;
  zhName: string;
  slug: string;
  icon: string;
  description: { en: string; zh: string };
}

export interface ComponentCategory {
  name: { en: string; zh: string };
  icon: string;
  components: ComponentInfo[];
}

export const CATEGORIES: ComponentCategory[] = [
  {
    name: { en: 'Basic', zh: '基础组件' },
    icon: 'home',
    components: [
      {
        name: 'Button',
        zhName: '按钮',
        slug: 'button',
        icon: 'add-box',
        description: {
          en: 'Trigger actions with pixel-styled buttons supporting types, sizes, and states.',
          zh: '使用像素风格的按钮触发操作，支持多种类型、尺寸和状态。',
        },
      },
      {
        name: 'Icon',
        zhName: '图标',
        slug: 'icon',
        icon: 'heart',
        description: {
          en: '486 built-in pixel icons with animations like spin, beat, and bounce.',
          zh: '内置 486 个像素图标，支持旋转、跳动、弹跳等动画。',
        },
      },
    ],
  },
  {
    name: { en: 'Form', zh: '表单组件' },
    icon: 'edit',
    components: [
      {
        name: 'Input',
        zhName: '输入框',
        slug: 'input',
        icon: 'edit',
        description: {
          en: 'Text input field with clearable, password toggle, and prefix/suffix slots.',
          zh: '文本输入框，支持清除、密码切换和前后缀插槽。',
        },
      },
      {
        name: 'Checkbox',
        zhName: '多选框',
        slug: 'checkbox',
        icon: 'check',
        description: {
          en: 'Select multiple items from a set with pixel-art checkmarks.',
          zh: '使用像素风格复选标记从一组选项中多选。',
        },
      },
      {
        name: 'Radio',
        zhName: '单选框',
        slug: 'radio',
        icon: 'circle',
        description: {
          en: 'Select a single option from a group of choices.',
          zh: '从一组选项中选择一个单选项。',
        },
      },
      {
        name: 'Filter',
        zhName: '过滤器',
        slug: 'filter',
        icon: 'sliders',
        description: {
          en: 'Chip-based multi-select filter for quick data filtering.',
          zh: '基于标签的多选过滤器，用于快速筛选数据。',
        },
      },
      {
        name: 'Switch',
        zhName: '开关',
        slug: 'switch',
        icon: 'zap',
        description: {
          en: 'Toggle between on and off states with a 3D bevel effect.',
          zh: '在开启和关闭状态间切换，具有 3D 斜面效果。',
        },
      },
      {
        name: 'Select',
        zhName: '选择器',
        slug: 'select',
        icon: 'chevron-down',
        description: {
          en: 'Pick an option from a dropdown list with pixel-styled menu.',
          zh: '从像素风格的下拉列表中选择一个选项。',
        },
      },
      {
        name: 'FileInput',
        zhName: '文件输入',
        slug: 'file-input',
        icon: 'upload',
        description: {
          en: 'Upload files with a pixel-styled file input control.',
          zh: '使用像素风格的文件输入控件上传文件。',
        },
      },
      {
        name: 'Form',
        zhName: '表单',
        slug: 'form',
        icon: 'archive',
        description: {
          en: 'Layout and validate form fields with built-in validation rules.',
          zh: '布局和验证表单字段，内置验证规则。',
        },
      },
      {
        name: 'Validator',
        zhName: '验证器',
        slug: 'validator',
        icon: 'check',
        description: {
          en: 'Standalone validation component with async-validator integration.',
          zh: '独立验证组件，集成 async-validator。',
        },
      },
    ],
  },
  {
    name: { en: 'Data Display', zh: '数据展示' },
    icon: 'analytics',
    components: [
      {
        name: 'Badge',
        zhName: '徽章',
        slug: 'badge',
        icon: 'bookmark',
        description: {
          en: 'Display a small count or status indicator on elements.',
          zh: '在元素上显示小型计数或状态标记。',
        },
      },
      {
        name: 'ChatBubble',
        zhName: '聊天气泡',
        slug: 'chat-bubble',
        icon: 'message',
        description: {
          en: 'Display chat messages in pixel-styled speech bubbles.',
          zh: '以像素风格对话气泡展示聊天消息。',
        },
      },
      {
        name: 'Indicator',
        zhName: '指示器',
        slug: 'indicator',
        icon: 'info-box',
        description: {
          en: 'Attach a corner indicator to any element for status or count.',
          zh: '在元素角落附加指示器，用于状态或计数显示。',
        },
      },
      {
        name: 'Avatar',
        zhName: '头像',
        slug: 'avatar',
        icon: 'user',
        description: {
          en: 'Display user profile images or initials in pixel style.',
          zh: '以像素风格显示用户头像图片或首字母。',
        },
      },
      {
        name: 'Card',
        zhName: '卡片',
        slug: 'card',
        icon: 'gift',
        description: {
          en: 'Container with header, body, and footer for grouped content.',
          zh: '包含头部、主体和底部的容器，用于内容分组。',
        },
      },
      {
        name: 'Carousel',
        zhName: '走马灯',
        slug: 'carousel',
        icon: 'animation',
        description: {
          en: 'Cycle through slides with pixel-art arrows and indicators.',
          zh: '使用像素风格箭头和指示器循环展示幻灯片。',
        },
      },
      {
        name: 'Progress',
        zhName: '进度条',
        slug: 'progress',
        icon: 'loader',
        description: {
          en: 'Chunked progress bar with pixel-art segmented fill.',
          zh: '像素风格的分段填充进度条。',
        },
      },
      {
        name: 'Table',
        zhName: '表格',
        slug: 'table',
        icon: 'add-grid',
        description: {
          en: 'Data table with zebra stripes, borders, pinned rows and columns.',
          zh: '数据表格，支持斑马纹、边框、固定行列。',
        },
      },
      {
        name: 'Collapse',
        zhName: '折叠面板',
        slug: 'collapse',
        icon: 'chevron-down',
        description: {
          en: 'Expandable panels to show and hide content sections.',
          zh: '可展开面板，用于显示和隐藏内容区域。',
        },
      },
      {
        name: 'Collapsible',
        zhName: '折叠块',
        slug: 'collapsible',
        icon: 'chevron-down',
        description: {
          en: 'Simple single-toggle component to show or hide a content block.',
          zh: '简单的单项折叠切换组件，用于显示或隐藏内容块。',
        },
      },
      {
        name: 'Pixelate',
        zhName: '像素化',
        slug: 'pixelate',
        icon: 'add-grid',
        description: {
          en: 'Apply a real-time pixelation effect to images.',
          zh: '对图片应用实时像素化效果。',
        },
      },
      {
        name: 'Diff',
        zhName: '对比',
        slug: 'diff',
        icon: 'animation',
        description: {
          en: 'Compare two items side-by-side with a draggable divider.',
          zh: '通过可拖动分割线并排对比两个内容。',
        },
      },
      {
        name: 'Kbd',
        zhName: '键盘按键',
        slug: 'kbd',
        icon: 'coffee',
        description: {
          en: 'Display keyboard keys with pixel-art 3D bevel styling.',
          zh: '以像素风格 3D 斜面效果展示键盘按键。',
        },
      },
    ],
  },
  {
    name: { en: 'Layout', zh: '布局组件' },
    icon: 'sliders',
    components: [
      {
        name: 'Divider',
        zhName: '分割线',
        slug: 'divider',
        icon: 'align-justify',
        description: {
          en: 'Separate content with a horizontal or vertical line.',
          zh: '使用水平或垂直线分隔内容。',
        },
      },
      {
        name: 'Drawer',
        zhName: '抽屉',
        slug: 'drawer',
        icon: 'arrow-bar-right',
        description: {
          en: 'Slide-in panel from any edge of the screen.',
          zh: '从屏幕任意边缘滑入的面板。',
        },
      },
      {
        name: 'Resizable',
        zhName: '可调面板',
        slug: 'resizable',
        icon: 'sliders',
        description: {
          en: 'Resizable panels with draggable dividers for flexible layouts.',
          zh: '可调整大小的面板，通过拖拽分隔线实现灵活布局。',
        },
      },
    ],
  },
  {
    name: { en: 'Navigation', zh: '导航组件' },
    icon: 'link',
    components: [
      {
        name: 'Link',
        zhName: '链接',
        slug: 'link',
        icon: 'link',
        description: {
          en: 'Styled hyperlinks with pixel aesthetic and icon support.',
          zh: '像素风格的超链接，支持图标。',
        },
      },
      {
        name: 'Breadcrumb',
        zhName: '面包屑',
        slug: 'breadcrumb',
        icon: 'chevron-right',
        description: {
          en: 'Show the current page path with navigable breadcrumbs.',
          zh: '通过面包屑导航显示当前页面路径。',
        },
      },
      {
        name: 'Command',
        zhName: '命令面板',
        slug: 'command',
        icon: 'search',
        description: {
          en: 'Searchable command palette with keyboard navigation and dialog mode.',
          zh: '可搜索的命令面板，支持键盘导航和弹窗模式。',
        },
      },
    ],
  },
  {
    name: { en: 'Feedback', zh: '反馈组件' },
    icon: 'notification',
    components: [
      {
        name: 'Alert',
        zhName: '提示',
        slug: 'alert',
        icon: 'alert',
        description: {
          en: 'Display important messages with contextual type colors.',
          zh: '显示带有上下文颜色的重要消息。',
        },
      },
      {
        name: 'Tooltip',
        zhName: '文字提示',
        slug: 'tooltip',
        icon: 'info-box',
        description: {
          en: 'Show extra info on hover with a pixel-styled popup.',
          zh: '悬停时以像素风格弹出层显示额外信息。',
        },
      },
      {
        name: 'Message',
        zhName: '消息',
        slug: 'message',
        icon: 'message',
        description: {
          en: 'Lightweight global feedback messages at the top of the page.',
          zh: '页面顶部的轻量级全局反馈消息。',
        },
      },
      {
        name: 'Notification',
        zhName: '通知',
        slug: 'notification',
        icon: 'notification',
        description: {
          en: 'Display a notification panel in the corner of the screen.',
          zh: '在屏幕角落显示通知面板。',
        },
      },
      {
        name: 'Popconfirm',
        zhName: '气泡确认框',
        slug: 'popconfirm',
        icon: 'warning-box',
        description: {
          en: 'Ask for confirmation before proceeding with an action.',
          zh: '在执行操作前弹出确认框。',
        },
      },
      {
        name: 'MessageBox',
        zhName: '消息弹框',
        slug: 'message-box',
        icon: 'close-box',
        description: {
          en: 'Modal dialog for alerts, confirmations, and prompts.',
          zh: '用于警告、确认和输入的模态对话框。',
        },
      },
      {
        name: 'Loading',
        zhName: '加载',
        slug: 'loading',
        icon: 'loader',
        description: {
          en: 'Show a loading overlay while content is being fetched.',
          zh: '在内容加载时显示遮罩层。',
        },
      },
      {
        name: 'Dropdown',
        zhName: '下拉菜单',
        slug: 'dropdown',
        icon: 'chevron-down',
        description: {
          en: 'Toggleable menu for actions and navigation links.',
          zh: '可切换的操作和导航链接菜单。',
        },
      },
      {
        name: 'Skeleton',
        zhName: '骨架屏',
        slug: 'skeleton',
        icon: 'animation',
        description: {
          en: 'Placeholder loading state with animated skeleton shapes.',
          zh: '带动画效果的骨架屏占位加载状态。',
        },
      },
    ],
  },
];

/**
 * Derive VitePress sidebar items from a category's components.
 */
export function getCategorySidebarItems(category: ComponentCategory, lang: Locale) {
  return category.components.map((c) => ({
    text: lang === 'zh' ? `${c.name} ${c.zhName}` : c.name,
    link: `/${lang}/components/${c.slug}`,
  }));
}
