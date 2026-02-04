<template>
  <div class="row">
    <px-button>button</px-button>
    <px-button tag="div" role="button" tabindex="0">div</px-button>
    <px-button
      type="primary"
      tag="a"
      href="https://github.com/SaKaNa-Y/sakana-element"
      target="_blank"
      rel="noopener noreferrer"
    >
      a
    </px-button>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
