<template>
  <div class="demo-chat">
    <px-chat-bubble type="primary">Primary message</px-chat-bubble>
    <px-chat-bubble type="success">Success message</px-chat-bubble>
    <px-chat-bubble type="info">Info message</px-chat-bubble>
    <px-chat-bubble type="warning">Warning message</px-chat-bubble>
    <px-chat-bubble type="danger">Danger message</px-chat-bubble>
  </div>
</template>

<style scoped>
.demo-chat {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
