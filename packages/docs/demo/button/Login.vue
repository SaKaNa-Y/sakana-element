<template>
  <div class="login-demo">
    <px-button icon="mail" color="#000000">Login with Email</px-button>
    <px-button icon="github" color="#24292f">Login with GitHub</px-button>
  </div>
</template>

<style scoped>
.login-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
}
.login-demo :deep(.px-button) {
  width: 100%;
  justify-content: center;
}
.login-demo :deep(.px-button + .px-button) {
  margin-left: 0;
}
</style>
