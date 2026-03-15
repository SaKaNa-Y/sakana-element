<script setup lang="ts">
import { useData } from 'vitepress';
import { computed, onMounted, ref } from 'vue';

const { lang } = useData();
const isZh = computed(() => lang.value.startsWith('zh'));

const uv = ref(0);
const pv = ref(0);
const loaded = ref(false);

onMounted(async () => {
  try {
    const res = await fetch('/api/counter', { method: 'POST' });
    if (res.ok) {
      const data = await res.json();
      uv.value = data.uv;
      pv.value = data.pv;
      loaded.value = true;
    }
  } catch {
    // Silently fail — counter is non-critical
  }
});
</script>

<template>
  <div v-if="loaded" class="visitor-counter">
    <span class="visitor-counter__item">
      <span class="visitor-counter__label">{{ isZh ? '本站访客数' : 'Visitors' }}</span>
      <span class="visitor-counter__value">{{ uv }}</span>
      <span class="visitor-counter__unit">{{ isZh ? '人次' : '' }}</span>
    </span>
    <span class="visitor-counter__item">
      <span class="visitor-counter__label">{{ isZh ? '本站总访问量' : 'Total Views' }}</span>
      <span class="visitor-counter__value">{{ pv }}</span>
      <span class="visitor-counter__unit">{{ isZh ? '次' : '' }}</span>
    </span>
  </div>
</template>

<style scoped>
.visitor-counter {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px 0;
  font-family: var(--px-font-family);
  font-size: var(--px-font-size-small);
  color: var(--px-border-color-light);
  border-top: 1px solid var(--px-border-color-extra-light);
}

.visitor-counter__value {
  color: var(--px-color-primary);
  margin: 0 4px;
  font-weight: bold;
}

.dark .visitor-counter {
  border-top-color: var(--px-border-color-dark);
  color: var(--px-border-color-light);
}

</style>
