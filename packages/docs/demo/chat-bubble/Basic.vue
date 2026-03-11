<template>
  <div class="demo-chat">
    <px-chat-bubble name="Alice" time="12:30">
      Hey! How's it going?
    </px-chat-bubble>
    <px-chat-bubble placement="end" name="Bob" time="12:31">
      Pretty good, thanks! Working on a pixel art project.
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
