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
        <!-- Select: shows translated placeholder and "No data" -->
        <div>
          <p style="margin: 0 0 8px; font-weight: bold">Select</p>
          <px-select
            v-model="selectVal"
            :options="emptyOptions"
            filterable
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

      <!-- Translation Preview -->
      <table class="translation-table">
        <thead>
          <tr>
            <th class="translation-key">Key</th>
            <th>Translation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in translationPreview" :key="row.key">
            <td class="translation-key">{{ row.key }}</td>
            <td>{{ row.value }}</td>
          </tr>
        </tbody>
      </table>
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

const translationPreview = computed(() => {
  const el = currentLocale.value.el;
  return [
    { key: 'select.placeholder', value: el.select.placeholder },
    { key: 'select.noData', value: el.select.noData },
    { key: 'popconfirm.confirmButtonText', value: el.popconfirm.confirmButtonText },
    { key: 'popconfirm.cancelButtonText', value: el.popconfirm.cancelButtonText },
    { key: 'messagebox.confirm', value: el.messagebox.confirm },
    { key: 'messagebox.cancel', value: el.messagebox.cancel },
  ];
});

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

<style scoped>
.translation-table {
  margin-top: 16px;
  border-collapse: collapse;
  font-size: 14px;
  text-align: left;
}

.translation-table th {
  padding: 4px 12px 4px 0;
  border-bottom: 1px solid var(--px-border-color);
}

.translation-table td {
  padding: 4px 12px 4px 0;
}

.translation-key {
  color: var(--px-text-color-secondary);
  font-family: monospace;
}
</style>
