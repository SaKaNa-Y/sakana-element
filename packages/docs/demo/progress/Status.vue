<template>
  <div class="demo-progress">
    <px-progress :percentage="100" status="success" />
    <px-progress :percentage="50" status="warning" />
    <px-progress :percentage="30" status="danger" />
  </div>
</template>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
