<template>
  <div>
    <px-button type="primary" @click="open = true">
      Open Command Palette
      <px-badge size="small" type="info">Ctrl+K</px-badge>
    </px-button>

    <px-command-dialog v-model="open">
      <px-command @select="onSelect" label="Command palette">
        <px-command-input placeholder="What do you need?" />
        <px-command-list>
          <px-command-empty>No results found.</px-command-empty>
          <px-command-group heading="Pages">
            <px-command-item value="home" icon="home" :shortcut="['Ctrl', 'H']">Home</px-command-item>
            <px-command-item value="docs" icon="bookmark" :shortcut="['Ctrl', 'D']">Documentation</px-command-item>
          </px-command-group>
          <px-command-separator />
          <px-command-group heading="Theme">
            <px-command-item value="light" icon="sun">Light Mode</px-command-item>
            <px-command-item value="dark" icon="moon">Dark Mode</px-command-item>
          </px-command-group>
        </px-command-list>
      </px-command>
    </px-command-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);

function onSelect() {
  open.value = false;
}
</script>
