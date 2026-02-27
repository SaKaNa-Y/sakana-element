<template>
  <div class="demo-progress">
    <px-progress :percentage="60" size="large" />
    <px-progress :percentage="60" />
    <px-progress :percentage="60" size="small" />
  </div>
</template>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
