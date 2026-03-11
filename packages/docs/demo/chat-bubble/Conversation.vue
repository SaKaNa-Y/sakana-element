<template>
  <div class="demo-chat">
    <px-chat-bubble name="Alice" time="14:00">
      <template #avatar>
        <px-avatar size="small">A</px-avatar>
      </template>
      Have you tried the new pixel component library?
    </px-chat-bubble>
    <px-chat-bubble placement="end" type="primary" name="Bob" time="14:01">
      <template #avatar>
        <px-avatar size="small">B</px-avatar>
      </template>
      Yes! Sakana Element is great for retro-themed UIs.
    </px-chat-bubble>
    <px-chat-bubble name="Alice" time="14:02" status="Delivered">
      <template #avatar>
        <px-avatar size="small">A</px-avatar>
      </template>
      I love the pixel borders and drop shadows.
    </px-chat-bubble>
    <px-chat-bubble placement="end" type="success" name="Bob" time="14:03" status="Seen">
      <template #avatar>
        <px-avatar size="small">B</px-avatar>
      </template>
      The ChatBubble component even has a stepped pixel tail!
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
