<template>
  <div class="demo-file-input">
    <px-file-input ghost placeholder="Ghost" />
    <px-file-input ghost color="primary" placeholder="Ghost Primary" />
    <px-file-input ghost color="danger" placeholder="Ghost Danger" />
    <px-file-input ghost color="#626aef" placeholder="Ghost Custom" />
  </div>
</template>

<style scoped>
.demo-file-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
}
</style>
