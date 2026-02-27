<template>
  <div class="demo-progress">
    <px-progress :percentage="30" type="primary" />
    <px-progress :percentage="50" type="success" />
    <px-progress :percentage="60" type="info" />
    <px-progress :percentage="70" type="warning" />
    <px-progress :percentage="40" type="danger" />
  </div>
</template>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
