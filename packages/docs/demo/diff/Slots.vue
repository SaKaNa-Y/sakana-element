<template>
  <div style="display: flex; flex-direction: column; align-items: center; gap: 16px">
    <px-diff :width="500" :height="300" color="primary">
      <template #before>
        <img src="/images/pixelate/001.png" style="width: 100%; height: 100%; object-fit: cover" />
      </template>
      <template #after>
        <img src="/images/pixelate/002.jpg" style="width: 100%; height: 100%; object-fit: cover" />
      </template>
    </px-diff>
  </div>
</template>
