<script setup lang="ts">
import { ref } from 'vue';

const active1 = ref(['1']);
const active2 = ref(['1']);
const active3 = ref(['1']);
const active4 = ref(['1']);
const active5 = ref(['1']);
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <px-collapse v-model="active1" color="primary">
      <px-collapse-item title="Primary Color" name="1">
        This collapse uses the primary color theme.
      </px-collapse-item>
      <px-collapse-item title="Second Item" name="2">
        Content of the second item.
      </px-collapse-item>
    </px-collapse>

    <px-collapse v-model="active2" color="success">
      <px-collapse-item title="Success Color" name="1">
        This collapse uses the success color theme.
      </px-collapse-item>
      <px-collapse-item title="Second Item" name="2">
        Content of the second item.
      </px-collapse-item>
    </px-collapse>

    <px-collapse v-model="active3" color="warning">
      <px-collapse-item title="Warning Color" name="1">
        This collapse uses the warning color theme.
      </px-collapse-item>
      <px-collapse-item title="Second Item" name="2">
        Content of the second item.
      </px-collapse-item>
    </px-collapse>

    <px-collapse v-model="active4" color="danger">
      <px-collapse-item title="Danger Color" name="1">
        This collapse uses the danger color theme.
      </px-collapse-item>
      <px-collapse-item title="Second Item" name="2">
        Content of the second item.
      </px-collapse-item>
    </px-collapse>

    <px-collapse v-model="active5" color="info">
      <px-collapse-item title="Info Color" name="1">
        This collapse uses the info color theme.
      </px-collapse-item>
      <px-collapse-item title="Second Item" name="2">
        Content of the second item.
      </px-collapse-item>
    </px-collapse>
  </div>
</template>
