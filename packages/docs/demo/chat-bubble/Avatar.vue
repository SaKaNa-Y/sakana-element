<template>
  <div class="demo-chat">
    <px-chat-bubble name="Alice" time="12:30">
      <template #avatar>
        <px-avatar size="small">A</px-avatar>
      </template>
      Hey! Check out this pixel art.
    </px-chat-bubble>
    <px-chat-bubble placement="end" name="Bob" time="12:31">
      <template #avatar>
        <px-avatar size="small">B</px-avatar>
      </template>
      Looks awesome!
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
