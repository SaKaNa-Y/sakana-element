<template>
  <div class="demo-progress">
    <px-progress :percentage="50" />
    <px-progress :percentage="80" />
    <px-progress :percentage="100" />
  </div>
</template>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
