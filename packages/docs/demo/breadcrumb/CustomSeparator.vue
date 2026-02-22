<script setup lang="ts"></script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <px-breadcrumb separator=">">
      <px-breadcrumb-item to="#">Home</px-breadcrumb-item>
      <px-breadcrumb-item to="#">Products</px-breadcrumb-item>
      <px-breadcrumb-item>Detail</px-breadcrumb-item>
    </px-breadcrumb>

    <px-breadcrumb>
      <template #separator>
        <px-icon icon="chevron-right" />
      </template>
      <px-breadcrumb-item to="#">Home</px-breadcrumb-item>
      <px-breadcrumb-item to="#">Products</px-breadcrumb-item>
      <px-breadcrumb-item>Detail</px-breadcrumb-item>
    </px-breadcrumb>
  </div>
</template>
