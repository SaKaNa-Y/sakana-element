<script setup lang="ts">
import { ref } from 'vue';

const activeNames = ref(['1']);
</script>
<template>
  <px-collapse v-model="activeNames">
    <px-collapse-item title="Favorites" name="1" icon="heart">
      Manage your favorite items and saved collections here.
    </px-collapse-item>
    <px-collapse-item title="Bookmarks" name="2" icon="bookmark">
      Access your bookmarked pages and resources.
    </px-collapse-item>
    <px-collapse-item title="Quick Actions" name="3" icon="zap">
      Shortcuts for frequently used operations.
    </px-collapse-item>
  </px-collapse>
</template>
