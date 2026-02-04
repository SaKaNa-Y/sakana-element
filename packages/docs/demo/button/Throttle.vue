<script setup>
function handleBtnClick() {
  console.log("btn click");
}
</script>

<template>
  <div class="row">
    <px-button @click="handleBtnClick">with throttle</px-button>
    <px-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</px-button
    >
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
