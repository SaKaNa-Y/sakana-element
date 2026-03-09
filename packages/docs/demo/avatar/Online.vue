<template>
  <div class="demo-avatar">
    <px-indicator type="success" :offset="[-4, 4]">
      <px-avatar>AB</px-avatar>
    </px-indicator>
    <px-indicator type="info" :offset="[-4, 4]">
      <px-avatar>JD</px-avatar>
    </px-indicator>
    <px-avatar>Px</px-avatar>
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
