<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
import VisitorCounter from './VisitorCounter.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <VisitorCounter />
    </template>
  </Layout>
</template>
