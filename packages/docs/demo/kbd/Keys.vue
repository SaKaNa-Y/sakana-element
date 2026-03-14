<template>
  <div class="demo-kbd">
    <px-kbd :keys="['command']">K</px-kbd>
    <px-kbd :keys="['ctrl']">C</px-kbd>
    <px-kbd :keys="['shift']">A</px-kbd>
    <px-kbd :keys="['alt']">F4</px-kbd>
    <px-kbd :keys="['enter']" />
    <px-kbd :keys="['escape']" />
    <px-kbd :keys="['tab']" />
    <px-kbd :keys="['delete']" />
  </div>
</template>

<style scoped>
.demo-kbd {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
