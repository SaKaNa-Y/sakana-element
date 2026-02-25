<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px">
    <px-card color="#8B5CF6" style="width: 180px">
      <template #header>Default</template>
      Custom purple color with filled background.
    </px-card>
    <px-card color="#8B5CF6" outline style="width: 180px">
      <template #header>Outline</template>
      Custom purple with outline style.
    </px-card>
    <px-card color="#8B5CF6" dash style="width: 180px">
      <template #header>Dash</template>
      Custom purple with dashed border.
    </px-card>
    <px-card color="#8B5CF6" ghost style="width: 180px">
      <template #header>Ghost</template>
      Custom purple ghost style.
    </px-card>
  </div>
</template>
