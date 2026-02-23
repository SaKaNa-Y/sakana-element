<template>
  <div class="demo-config-provider">
    <div style="margin-bottom: 16px">
      <label for="locale-picker" style="margin-right: 8px; font-weight: bold">
        Locale:
      </label>
      <select
        id="locale-picker"
        :value="localeKey"
        @change="localeKey = ($event.target as HTMLSelectElement).value"
        style="padding: 4px 8px; font-size: 14px"
      >
        <option v-for="opt in localeOptions" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>

    <px-config-provider :locale="currentLocale">
      <div style="display: flex; align-items: flex-start; gap: 24px; flex-wrap: wrap">
        <!-- Select: shows translated "No data" -->
        <div>
          <p style="margin: 0 0 8px; font-weight: bold">Select</p>
          <px-select
            v-model="selectVal"
            :options="emptyOptions"
            filterable
            placeholder="Select"
            style="width: 200px"
          />
        </div>

        <!-- Popconfirm: shows translated Yes / No -->
        <div>
          <p style="margin: 0 0 8px; font-weight: bold">Popconfirm</p>
          <px-popconfirm title="Are you sure?">
            <px-button type="danger">Delete</px-button>
          </px-popconfirm>
        </div>

        <!-- MessageBox: explicit translated text -->
        <div>
          <p style="margin: 0 0 8px; font-weight: bold">MessageBox</p>
          <px-button type="primary" @click="openMessageBox">
            Open MessageBox
          </px-button>
        </div>
      </div>
    </px-config-provider>
  </div>
</template>

<script setup lang="ts">
import { en, ja, ko, PxMessageBox, zhCn, zhTw } from 'sakana-element';
import { computed, ref } from 'vue';

const localeMap: Record<string, { label: string; locale: typeof en }> = {
  en: { label: 'English', locale: en },
  zhCn: { label: '简体中文', locale: zhCn },
  zhTw: { label: '繁體中文', locale: zhTw },
  ja: { label: '日本語', locale: ja },
  ko: { label: '한국어', locale: ko },
};

const localeOptions = Object.entries(localeMap).map(([value, { label }]) => ({
  value,
  label,
}));

const localeKey = ref('en');
const currentLocale = computed(() => localeMap[localeKey.value].locale);

const selectVal = ref('');
const emptyOptions = ref([]);

async function openMessageBox() {
  const msgLocale = currentLocale.value.el.messagebox;
  try {
    await PxMessageBox({
      title: msgLocale.title,
      message: 'This demonstrates locale-aware button text.',
      showCancelButton: true,
      cancelButtonText: msgLocale.cancel,
      confirmButtonText: msgLocale.confirm,
    });
  } catch {
    // cancelled
  }
}
</script>
