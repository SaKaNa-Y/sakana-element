<template>
  <px-command label="Command menu">
    <px-command-input placeholder="Type a command or search..." />
    <px-command-list>
      <px-command-empty>No results found.</px-command-empty>
      <px-command-item value="calendar" icon="calendar">Calendar</px-command-item>
      <px-command-item value="search" icon="search">Search</px-command-item>
      <px-command-item value="settings" icon="settings">Settings</px-command-item>
      <px-command-item value="profile" icon="user">Profile</px-command-item>
    </px-command-list>
  </px-command>
</template>

<style scoped>
.px-command {
  max-width: 480px;
}
</style>
