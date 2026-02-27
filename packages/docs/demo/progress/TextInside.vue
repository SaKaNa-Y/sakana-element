<template>
  <div class="demo-progress">
    <px-progress :percentage="70" text-inside type="primary" />
    <px-progress :percentage="85" text-inside type="success" />
    <px-progress :percentage="45" text-inside type="warning" />
  </div>
</template>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
