<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end">
    <div>
      <p style="margin-bottom: 8px">Original</p>
      <px-pixelate src="/images/pixelate/002.jpg" :pixel-size="4" :width="300" />
    </div>
    <div>
      <p style="margin-bottom: 8px">Grayscale</p>
      <px-pixelate src="/images/pixelate/002.jpg" :pixel-size="4" grayscale :width="300" />
    </div>
  </div>
</template>
