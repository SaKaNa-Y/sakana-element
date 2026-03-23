<template>
  <px-command label="Grouped command menu">
    <px-command-input placeholder="Search commands..." />
    <px-command-list>
      <px-command-empty>No results found.</px-command-empty>
      <px-command-group heading="Navigation">
        <px-command-item value="home" icon="home">Home</px-command-item>
        <px-command-item value="dashboard" icon="analytics">Dashboard</px-command-item>
        <px-command-item value="settings" icon="settings">Settings</px-command-item>
      </px-command-group>
      <px-command-separator />
      <px-command-group heading="Actions">
        <px-command-item value="new-file" icon="add-box">New File</px-command-item>
        <px-command-item value="upload" icon="upload">Upload</px-command-item>
        <px-command-item value="download" icon="download">Download</px-command-item>
      </px-command-group>
    </px-command-list>
  </px-command>
</template>

<style scoped>
.px-command {
  max-width: 480px;
}
</style>
