<template>
  <div style="display: flex; align-items: flex-start; gap: 48px; flex-wrap: wrap">
    <!-- Default Popconfirm -->
    <div>
      <p style="margin: 0 0 8px; font-weight: bold">Default</p>
      <px-config-provider>
        <px-popconfirm title="Are you sure?">
          <px-button>Delete</px-button>
        </px-popconfirm>
      </px-config-provider>
    </div>

    <!-- Popconfirm with extendsI18nMsg -->
    <div>
      <p style="margin: 0 0 8px; font-weight: bold">With extendsI18nMsg</p>
      <px-config-provider :extendsI18nMsg="customMessages">
        <px-popconfirm title="Are you sure?">
          <px-button type="primary">Delete</px-button>
        </px-popconfirm>
      </px-config-provider>
    </div>
  </div>
</template>

<script setup lang="ts">
const customMessages = {
  en: {
    popconfirm: {
      confirmButtonText: 'Sure!',
      cancelButtonText: 'Nope',
    },
  },
};
</script>
