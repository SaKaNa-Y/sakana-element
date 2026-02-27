<template>
  <div class="demo-progress">
    <px-progress :percentage="70" variant="striped" striped-flow type="primary" />
    <px-progress :percentage="55" variant="striped" striped-flow type="danger" />
  </div>
</template>

<style scoped>
.demo-progress {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
