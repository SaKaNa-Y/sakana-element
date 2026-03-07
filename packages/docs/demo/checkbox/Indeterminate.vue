<template>
  <div class="demo-checkbox">
    <px-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      label="Select All"
      @change="handleCheckAllChange"
    />
    <px-checkbox-group v-model="checkedItems" @change="handleGroupChange">
      <px-checkbox value="a" label="Option A" />
      <px-checkbox value="b" label="Option B" />
      <px-checkbox value="c" label="Option C" />
    </px-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const allOptions = ['a', 'b', 'c'];
const checkedItems = ref(['a']);
const checkAll = ref(false);
const isIndeterminate = ref(true);

function handleCheckAllChange(val: boolean) {
  checkedItems.value = val ? [...allOptions] : [];
  isIndeterminate.value = false;
}

function handleGroupChange(val: (string | number | boolean)[]) {
  const count = val.length;
  checkAll.value = count === allOptions.length;
  isIndeterminate.value = count > 0 && count < allOptions.length;
}
</script>

<style scoped>
.demo-checkbox {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
