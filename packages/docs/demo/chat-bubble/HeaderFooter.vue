<template>
  <div class="demo-chat">
    <px-chat-bubble name="Alice" time="12:30" status="Delivered">
      I'll send you the files tonight.
    </px-chat-bubble>
    <px-chat-bubble placement="end" name="Bob" time="12:31" status="Seen">
      Great, no rush!
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
