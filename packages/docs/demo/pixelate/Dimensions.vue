<template>
  <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end">
    <div>
      <p style="margin-bottom: 8px">100 × 100</p>
      <px-pixelate src="/images/pixelate/002.jpg" :pixel-size="4" :width="100" :height="100" />
    </div>
    <div>
      <p style="margin-bottom: 8px">200 × 150</p>
      <px-pixelate src="/images/pixelate/002.jpg" :pixel-size="4" :width="200" :height="150" />
    </div>
    <div>
      <p style="margin-bottom: 8px">400 (auto height)</p>
      <px-pixelate src="/images/pixelate/002.jpg" :pixel-size="4" :width="400" />
    </div>
  </div>
</template>
