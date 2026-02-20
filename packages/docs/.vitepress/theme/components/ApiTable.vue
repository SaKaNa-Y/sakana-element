<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ApiCategory, ApiSection } from '../../../apis/types';

const props = defineProps<{
  sections: ApiSection[];
  lang: 'zh' | 'en';
}>();

const search = ref('');

const CATEGORY_ORDER: ApiCategory[] = [
  'style',
  'size',
  'color',
  'state',
  'behavior',
  'content',
  'event',
  'slot',
  'expose',
  'method',
];

const CATEGORY_CONFIG: Record<
  ApiCategory,
  { en: string; zh: string; cssColor: string; cssBg: string; icon: string }
> = {
  style: {
    en: 'Style',
    zh: '风格',
    cssColor: 'var(--api-cat-style)',
    cssBg: 'var(--api-cat-style-bg)',
    icon: 'sliders',
  },
  size: {
    en: 'Size',
    zh: '尺寸',
    cssColor: 'var(--api-cat-size)',
    cssBg: 'var(--api-cat-size-bg)',
    icon: 'open',
  },
  color: {
    en: 'Color',
    zh: '颜色',
    cssColor: 'var(--api-cat-color)',
    cssBg: 'var(--api-cat-color-bg)',
    icon: 'paint-bucket',
  },
  state: {
    en: 'State',
    zh: '状态',
    cssColor: 'var(--api-cat-state)',
    cssBg: 'var(--api-cat-state-bg)',
    icon: 'toggle-right',
  },
  behavior: {
    en: 'Behavior',
    zh: '行为',
    cssColor: 'var(--api-cat-behavior)',
    cssBg: 'var(--api-cat-behavior-bg)',
    icon: 'zap',
  },
  content: {
    en: 'Content',
    zh: '内容',
    cssColor: 'var(--api-cat-content)',
    cssBg: 'var(--api-cat-content-bg)',
    icon: 'article',
  },
  event: {
    en: 'Event',
    zh: '事件',
    cssColor: 'var(--api-cat-event)',
    cssBg: 'var(--api-cat-event-bg)',
    icon: 'radio-on',
  },
  slot: {
    en: 'Slot',
    zh: '插槽',
    cssColor: 'var(--api-cat-slot)',
    cssBg: 'var(--api-cat-slot-bg)',
    icon: 'view-col',
  },
  expose: {
    en: 'Expose',
    zh: '暴露',
    cssColor: 'var(--api-cat-expose)',
    cssBg: 'var(--api-cat-expose-bg)',
    icon: 'external-link',
  },
  method: {
    en: 'Method',
    zh: '方法',
    cssColor: 'var(--api-cat-method)',
    cssBg: 'var(--api-cat-method-bg)',
    icon: 'script',
  },
};

interface FlatItem {
  name: string;
  desc: { zh: string; en: string };
  category?: ApiCategory;
  component?: string;
  type?: string;
  default?: string;
  sectionTitle: { zh: string; en: string };
  sectionIndex: number;
}

function matchesSearch(item: FlatItem, q: string): boolean {
  if (!q) return true;
  const lower = q.toLowerCase();
  if (item.name.toLowerCase().includes(lower)) return true;
  if (item.component?.toLowerCase().includes(lower)) return true;
  if (item.type?.toLowerCase().includes(lower)) return true;
  if (item.desc.zh.toLowerCase().includes(lower)) return true;
  if (item.desc.en.toLowerCase().includes(lower)) return true;
  if (item.default?.toLowerCase().includes(lower)) return true;
  if (item.sectionTitle.en.toLowerCase().includes(lower)) return true;
  if (item.sectionTitle.zh.includes(lower)) return true;
  if (item.category) {
    const cat = CATEGORY_CONFIG[item.category];
    if (cat.en.toLowerCase().includes(lower)) return true;
    if (cat.zh.includes(lower)) return true;
  }
  return false;
}

const filteredItems = computed(() => {
  const q = search.value.trim();

  const items: FlatItem[] = [];
  props.sections.forEach((section, sIdx) => {
    for (const item of section.items) {
      const flat: FlatItem = { ...item, sectionTitle: section.title, sectionIndex: sIdx };
      if (matchesSearch(flat, q)) {
        items.push(flat);
      }
    }
  });

  return items.sort((a, b) => {
    const aIdx = a.category
      ? CATEGORY_ORDER.indexOf(a.category)
      : CATEGORY_ORDER.length + a.sectionIndex;
    const bIdx = b.category
      ? CATEGORY_ORDER.indexOf(b.category)
      : CATEGORY_ORDER.length + b.sectionIndex;
    return aIdx - bIdx;
  });
});

const hasType = computed(() => filteredItems.value.some((i) => i.type));
const hasDefault = computed(() => filteredItems.value.some((i) => i.default));

const searchPlaceholder = computed(() =>
  props.lang === 'zh' ? '搜索名称、类型、分类…' : 'Search name, type, category…',
);
</script>

<template>
  <div class="api-table">
    <div class="api-search">
      <px-icon icon="search" size="sm" class="api-search-icon" />
      <input
        v-model="search"
        type="text"
        :placeholder="searchPlaceholder"
        class="api-search-input"
        maxlength="30"
      />
    </div>

    <div v-if="filteredItems.length === 0" class="api-empty">
      {{ lang === 'zh' ? '无匹配结果' : 'No matching results' }}
    </div>

    <div v-else class="api-list">
      <table class="api-grid">
        <thead>
          <tr>
            <th class="col-name">{{ lang === 'zh' ? '名称' : 'Name' }}</th>
            <th class="col-category">{{ lang === 'zh' ? '分类' : 'Category' }}</th>
            <th class="col-desc">{{ lang === 'zh' ? '说明' : 'Description' }}</th>
            <th v-if="hasType" class="col-type">{{ lang === 'zh' ? '类型' : 'Type' }}</th>
            <th v-if="hasDefault" class="col-default">{{ lang === 'zh' ? '默认值' : 'Default' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredItems" :key="(item.component || '') + '-' + item.name + '-' + item.sectionIndex" class="api-row">
            <td class="col-name">
              <span v-if="item.component" class="api-component">{{ item.component }}</span>
              <code class="api-name">{{ item.name }}</code>
            </td>
            <td class="col-category">
              <span
                v-if="item.category"
                class="api-tag"
                :style="{ '--tag-color': CATEGORY_CONFIG[item.category].cssColor, '--tag-bg': CATEGORY_CONFIG[item.category].cssBg }"
              >
                <px-icon :icon="CATEGORY_CONFIG[item.category].icon" size="xs" />
                {{ CATEGORY_CONFIG[item.category][lang] }}
              </span>
              <span v-else class="api-section-tag">
                {{ item.sectionTitle[lang] }}
              </span>
            </td>
            <td class="col-desc">
              {{ item.desc[lang] }}
            </td>
            <td v-if="hasType" class="col-type">
              <code v-if="item.type" class="api-type">{{ item.type }}</code>
            </td>
            <td v-if="hasDefault" class="col-default">
              <code v-if="item.default" class="api-default">{{ item.default }}</code>
              <span v-else class="api-default-empty">—</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* ───── CSS Variables ───── */
.api-table {
  --api-cat-style: #f43f5e;
  --api-cat-size: #3b82f6;
  --api-cat-color: #22c55e;
  --api-cat-state: #f97316;
  --api-cat-behavior: #a855f7;
  --api-cat-content: #14b8a6;

  --api-cat-style-bg: rgba(244, 63, 94, 0.12);
  --api-cat-size-bg: rgba(59, 130, 246, 0.12);
  --api-cat-color-bg: rgba(34, 197, 94, 0.12);
  --api-cat-state-bg: rgba(249, 115, 22, 0.12);
  --api-cat-behavior-bg: rgba(168, 85, 247, 0.12);
  --api-cat-content-bg: rgba(20, 184, 166, 0.12);

  --api-cat-event: #ec4899;
  --api-cat-slot: #06b6d4;
  --api-cat-expose: #eab308;
  --api-cat-method: #6366f1;

  --api-cat-event-bg: rgba(236, 72, 153, 0.12);
  --api-cat-slot-bg: rgba(6, 182, 212, 0.12);
  --api-cat-expose-bg: rgba(234, 179, 8, 0.12);
  --api-cat-method-bg: rgba(99, 102, 241, 0.12);

  --api-border: #e5e7eb;
  --api-bg: #ffffff;
  --api-bg-header: #f9fafb;
  --api-text: #1f2937;
  --api-text-muted: #6b7280;
  --api-code-bg: #f3f4f6;
  --api-code-text: #1f2937;
  --api-search-bg: #ffffff;
  --api-search-border: #d1d5db;

  margin: 1rem 0;
  font-size: 14px;
}

:root.dark .api-table,
.dark .api-table {
  --api-cat-style-bg: rgba(244, 63, 94, 0.2);
  --api-cat-size-bg: rgba(59, 130, 246, 0.2);
  --api-cat-color-bg: rgba(34, 197, 94, 0.2);
  --api-cat-state-bg: rgba(249, 115, 22, 0.2);
  --api-cat-behavior-bg: rgba(168, 85, 247, 0.2);
  --api-cat-content-bg: rgba(20, 184, 166, 0.2);

  --api-cat-event-bg: rgba(236, 72, 153, 0.2);
  --api-cat-slot-bg: rgba(6, 182, 212, 0.2);
  --api-cat-expose-bg: rgba(234, 179, 8, 0.2);
  --api-cat-method-bg: rgba(99, 102, 241, 0.2);

  --api-border: #374151;
  --api-bg: #1f2937;
  --api-bg-header: #111827;
  --api-text: #f3f4f6;
  --api-text-muted: #9ca3af;
  --api-code-bg: #374151;
  --api-code-text: #e5e7eb;
  --api-search-bg: #1f2937;
  --api-search-border: #4b5563;
}

/* ───── Search ───── */
.api-search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 2px solid var(--api-search-border);
  background: var(--api-search-bg);
  margin-bottom: 1rem;
}

.api-search-icon {
  color: var(--api-text-muted);
  flex-shrink: 0;
}

.api-search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--px-font-family, monospace);
  font-size: 14px;
  color: var(--api-text);
}

.api-search-input::placeholder {
  color: var(--api-text-muted);
}

/* ───── Empty State ───── */
.api-empty {
  text-align: center;
  color: var(--api-text-muted);
  padding: 2rem 1rem;
  font-style: italic;
}

/* ───── Table ───── */
.api-list {
  max-height: 520px;
  overflow-y: auto;
  overflow-x: auto;
}

.api-grid {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
}

.api-grid th {
  text-align: left;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--api-text-muted);
  background: var(--api-bg-header);
  border-bottom: 2px solid var(--api-border);
  white-space: nowrap;
  position: sticky;
  top: 0;
  z-index: 1;
}

.api-grid td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--api-border);
  color: var(--api-text);
  background: var(--api-bg);
  vertical-align: top;
}

/* ───── Columns ───── */
.col-name {
  white-space: nowrap;
}

.col-category {
  white-space: nowrap;
}

.col-desc {
  min-width: 120px;
}

.col-type {
  min-width: 100px;
}

.col-default {
  white-space: nowrap;
}

/* ───── Name code ───── */
.api-component {
  display: block;
  font-size: 11px;
  color: var(--api-text-muted);
  margin-bottom: 2px;
}

.api-name {
  font-family: 'Fira Code', 'Cascadia Code', ui-monospace, monospace;
  font-size: 13px;
  font-weight: 600;
  color: var(--api-cat-behavior);
  background: none;
  padding: 0;
  border: none;
}

/* ───── Category Tags ───── */
.api-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  color: var(--tag-color);
  background: var(--tag-bg);
}

/* ───── Section Tags (Events, Slots, Exposes, etc.) ───── */
.api-section-tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  white-space: nowrap;
  color: var(--api-text-muted);
  background: var(--api-code-bg);
}

/* ───── Type code ───── */
.api-type {
  font-family: 'Fira Code', 'Cascadia Code', ui-monospace, monospace;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--api-code-bg);
  color: var(--api-code-text);
  word-break: break-word;
  white-space: pre-wrap;
  border: none;
}

/* ───── Default code ───── */
.api-default {
  font-family: 'Fira Code', 'Cascadia Code', ui-monospace, monospace;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--api-code-bg);
  color: var(--api-text-muted);
  border: none;
}

.api-default-empty {
  color: var(--api-text-muted);
}
</style>
