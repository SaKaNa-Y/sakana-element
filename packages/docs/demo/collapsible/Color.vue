<template>
  <div class="demo-collapsible">
    <px-collapsible v-for="c in colors" :key="c" :color="c" default-open>
      <px-collapsible-trigger>
        <span class="trigger-label">{{ c }}</span>
      </px-collapsible-trigger>
      <px-collapsible-content>
        <p>Content styled with {{ c }} color theme.</p>
      </px-collapsible-content>
    </px-collapsible>

    <px-collapsible color="#e64553" default-open>
      <px-collapsible-trigger>
        <span class="trigger-label">Custom hex #e64553</span>
      </px-collapsible-trigger>
      <px-collapsible-content>
        <p>Content styled with a custom hex color.</p>
      </px-collapsible-content>
    </px-collapsible>
  </div>
</template>

<script setup lang="ts">
const colors = ['primary', 'success', 'warning', 'danger', 'info'];
</script>

<style scoped>
.demo-collapsible {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}
.trigger-label {
  font-weight: 500;
  text-transform: capitalize;
}
</style>
