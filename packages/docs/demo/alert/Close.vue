<script setup></script>
<template>
  <div class="basic block">
    <px-alert title="Unclosable alert" type="success" :closable="false" />
    <px-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
