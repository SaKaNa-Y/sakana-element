<script setup lang="ts">
import { computed, ref } from 'vue';
import { CATEGORIES, type Locale } from '../../data/componentData';

const props = defineProps<{ lang: Locale }>();

const search = ref('');

const filteredCategories = computed(() => {
  const q = search.value.trim().toLowerCase();
  if (!q) return CATEGORIES;

  return CATEGORIES.map((cat) => ({
    ...cat,
    components: cat.components.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.zhName.toLowerCase().includes(q) ||
        c.description[props.lang].toLowerCase().includes(q),
    ),
  })).filter((cat) => cat.components.length > 0);
});

const totalCount = computed(() =>
  filteredCategories.value.reduce((sum, cat) => sum + cat.components.length, 0),
);
</script>

<template>
  <div class="component-nav">
    <div class="component-nav__search">
      <px-input
        v-model="search"
        :placeholder="lang === 'zh' ? '搜索组件...' : 'Search components...'"
        clearable
      >
        <template #prefix>
          <px-icon icon="search" />
        </template>
      </px-input>
      <span class="component-nav__total">
        {{ totalCount }} {{ lang === 'zh' ? '个组件' : 'components' }}
      </span>
    </div>

    <section
      v-for="category in filteredCategories"
      :key="category.name.en"
      class="component-nav__category"
    >
      <h2 class="component-nav__category-title">
        <px-icon :icon="category.icon" />
        <span>{{ category.name[lang] }}</span>
        <span class="component-nav__count">{{ category.components.length }}</span>
      </h2>

      <div class="component-nav__grid">
        <a
          v-for="comp in category.components"
          :key="comp.slug"
          :href="`/${lang}/components/${comp.slug}`"
          class="component-nav__card-link"
        >
          <px-card hoverable shadow="hover" size="small">
            <div class="component-nav__card-content">
              <div class="component-nav__card-header">
                <px-icon :icon="comp.icon" class="component-nav__card-icon" />
                <span class="component-nav__card-name">{{ comp.name }}</span>
              </div>
              <p class="component-nav__card-desc">{{ comp.description[lang] }}</p>
            </div>
          </px-card>
        </a>
      </div>
    </section>

    <div v-if="filteredCategories.length === 0" class="component-nav__empty">
      <px-icon icon="search" />
      <p>{{ lang === 'zh' ? '未找到匹配的组件' : 'No components found' }}</p>
    </div>
  </div>
</template>

<style scoped>
.component-nav {
  margin-top: 16px;
}

.component-nav__search {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}

.component-nav__search .px-input {
  max-width: 360px;
}

.component-nav__total {
  font-size: 14px;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.component-nav__category {
  margin-bottom: 36px;
}

.component-nav__category-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  border-bottom: 2px solid var(--vp-c-divider);
  padding-bottom: 8px;
}

.component-nav__count {
  font-size: 12px;
  font-weight: 400;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  padding: 1px 8px;
  border-radius: 10px;
  margin-left: 4px;
}

.component-nav__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}

a.component-nav__card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

a.component-nav__card-link:hover {
  text-decoration: none;
}

.component-nav__card-content {
  min-height: 80px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.component-nav__card-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.component-nav__card-icon {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.component-nav__card-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.component-nav__card-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
}

.component-nav__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px 0;
  color: var(--vp-c-text-3);
  font-size: 16px;
}

.component-nav__empty .px-icon {
  font-size: 32px;
}
</style>
