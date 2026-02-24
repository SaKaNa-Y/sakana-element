<template>
  <div class="demo-file-input">
    <px-file-input accept="image/*" placeholder="Images only" />
    <px-file-input accept=".pdf" placeholder="PDF files only" />
    <px-file-input accept=".jpg,.png,.gif" placeholder=".jpg, .png, .gif" />
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
