<template>
  <div class="demo-progress">
    <px-progress :percentage="65" variant="solid" type="primary" />
    <px-progress :percentage="65" variant="striped" type="success" />
    <px-progress :percentage="65" variant="checkered" type="warning" />
  </div>
</template>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
