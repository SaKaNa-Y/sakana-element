<template>
  <px-button @click="showCustomFooter">Custom Footer</px-button>
</template>

<script setup lang="ts">
import { PxMessageBox } from 'sakana-element';
import { h } from 'vue';

const showCustomFooter = () => {
  PxMessageBox({
    title: 'Custom Footer',
    message: 'This dialog replaces the default buttons with a custom footer.',
    footer: () =>
      h('div', { style: 'text-align: center; padding: 8px 0' }, [
        h(
          'a',
          {
            href: '#',
            style: 'color: var(--px-color-primary); cursor: pointer',
            onClick: (e: Event) => {
              e.preventDefault();
              PxMessageBox.close();
            },
          },
          'I have read and agree to the terms',
        ),
      ]),
  }).catch(() => {});
};
</script>
