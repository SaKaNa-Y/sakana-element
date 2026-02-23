<template>
  <div class="demo-avatar">
    <px-avatar>AB</px-avatar>
    <px-avatar :border="false">AB</px-avatar>
    <px-avatar shape="square">AB</px-avatar>
    <px-avatar shape="square" :border="false">AB</px-avatar>
  </div>
</template>

<style scoped>
.demo-avatar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
