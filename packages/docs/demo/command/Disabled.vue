<template>
  <px-command label="Command with disabled items">
    <px-command-input placeholder="Search..." />
    <px-command-list>
      <px-command-item value="save" icon="check">Save</px-command-item>
      <px-command-item value="delete" icon="close" disabled>Delete (Disabled)</px-command-item>
      <px-command-item value="export" icon="download">Export</px-command-item>
      <px-command-item value="archive" icon="archive" disabled>Archive (Disabled)</px-command-item>
    </px-command-list>
  </px-command>
</template>

<style scoped>
.px-command {
  max-width: 480px;
}
</style>
