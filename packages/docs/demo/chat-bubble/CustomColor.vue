<template>
  <div class="demo-chat">
    <px-chat-bubble color="#8b5cf6" name="Violet">
      Custom purple bubble!
    </px-chat-bubble>
    <px-chat-bubble placement="end" color="#f59e0b" name="Amber">
      Custom amber bubble!
    </px-chat-bubble>
  </div>
</template>

<style scoped>
.demo-chat {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
