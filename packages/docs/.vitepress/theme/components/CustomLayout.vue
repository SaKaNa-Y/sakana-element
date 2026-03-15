<script setup lang="ts">
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import VisitorCounter from './VisitorCounter.vue';

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <VisitorCounter v-if="frontmatter.layout === 'home'" />
    </template>
  </Layout>
</template>
