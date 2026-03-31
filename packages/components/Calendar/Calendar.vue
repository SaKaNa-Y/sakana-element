<script setup lang="ts">
import { useLocale } from '@sakana-element/hooks';
import { createColorPalette, resolveColorVars } from '@sakana-element/utils';
import { computed, ref, watch } from 'vue';
import { CALENDAR_COLOR_TEMPLATES, CALENDAR_GRID_SIZE, DAYS_PER_WEEK } from './constants';
import {
  addMonths,
  getCalendarGrid,
  isDateInRange,
  isSameDay,
  isSameMonth,
  isToday,
} from './hooks';
import type { CalendarEmits, CalendarInstance, CalendarProps } from './types';

defineOptions({
  name: 'PxCalendar',
});

const props = withDefaults(defineProps<CalendarProps>(), {
  showOutsideDays: true,
  weekStartsOn: 0,
});

const emit = defineEmits<CalendarEmits>();

const locale = useLocale();

const dayNamesShort = computed(() => {
  const i18n = locale.value;
  const lang = i18n.getLocale();
  const msgs = i18n.messages[lang] ?? i18n.messages.en;
  const names: string[] = msgs.calendar.dayNamesShort;
  if (props.weekStartsOn === 1) {
    return [...names.slice(1), names[0]];
  }
  return names;
});

const monthNames = computed(() => {
  const i18n = locale.value;
  const lang = i18n.getLocale();
  const msgs = i18n.messages[lang] ?? i18n.messages.en;
  return msgs.calendar.monthNames as string[];
});

const ariaLabels = computed(() => {
  const i18n = locale.value;
  const lang = i18n.getLocale();
  const msgs = i18n.messages[lang] ?? i18n.messages.en;
  return {
    prevMonth: msgs.calendar.prevMonth as string,
    nextMonth: msgs.calendar.nextMonth as string,
  };
});

// Current displayed month
const currentMonth = ref<Date>(props.defaultMonth ?? props.modelValue ?? new Date());

// Sync currentMonth when modelValue changes externally
watch(
  () => props.modelValue,
  (val) => {
    if (val && !isSameMonth(val, currentMonth.value)) {
      currentMonth.value = new Date(val.getFullYear(), val.getMonth(), 1);
    }
  },
);

const displayYear = computed(() => currentMonth.value.getFullYear());
const displayMonth = computed(() => currentMonth.value.getMonth());

// Month/year dropdown options
const monthOptions = computed(() =>
  monthNames.value.map((name, i) => ({ label: name, value: String(i) })),
);

const yearRangeArray = computed(() => {
  const [min, max] = props.yearRange ?? [displayYear.value - 10, displayYear.value + 10];
  const years: { label: string; value: string }[] = [];
  for (let y = min; y <= max; y++) {
    years.push({ label: String(y), value: String(y) });
  }
  return years;
});

function onMonthSelect(val: string) {
  currentMonth.value = new Date(displayYear.value, Number(val), 1);
  emit('month-change', new Date(currentMonth.value));
}

function onYearSelect(val: string) {
  currentMonth.value = new Date(Number(val), displayMonth.value, 1);
  emit('month-change', new Date(currentMonth.value));
}

// Calendar grid
const grid = computed(() =>
  getCalendarGrid(displayYear.value, displayMonth.value, props.weekStartsOn),
);

// Custom color
const customColorStyle = computed(() => {
  if (!props.color) return {};
  return resolveColorVars(
    createColorPalette(props.color),
    'px-calendar',
    CALENDAR_COLOR_TEMPLATES.default,
  );
});

// Check if a date is disabled
function isDisabled(date: Date): boolean {
  if (props.disabledDate?.(date)) return true;
  if (!isDateInRange(date, props.minDate, props.maxDate)) return true;
  return false;
}

// Navigation
function prevMonth() {
  currentMonth.value = addMonths(currentMonth.value, -1);
  emit('month-change', new Date(currentMonth.value));
}

function nextMonth() {
  currentMonth.value = addMonths(currentMonth.value, 1);
  emit('month-change', new Date(currentMonth.value));
}

// Selection
function selectDate(date: Date) {
  if (isDisabled(date)) return;
  emit('update:modelValue', date);
}

// Keyboard navigation
const focusedIndex = ref<number>(-1);

function handleKeydown(event: KeyboardEvent, index: number) {
  let nextIndex = index;

  switch (event.key) {
    case 'ArrowRight':
      nextIndex = index + 1;
      event.preventDefault();
      break;
    case 'ArrowLeft':
      nextIndex = index - 1;
      event.preventDefault();
      break;
    case 'ArrowDown':
      nextIndex = index + DAYS_PER_WEEK;
      event.preventDefault();
      break;
    case 'ArrowUp':
      nextIndex = index - DAYS_PER_WEEK;
      event.preventDefault();
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      selectDate(grid.value[index]);
      return;
    default:
      return;
  }

  if (nextIndex >= 0 && nextIndex < CALENDAR_GRID_SIZE) {
    focusedIndex.value = nextIndex;
    // Focus the button element at that index
    const buttons = calendarRef.value?.querySelectorAll('.px-calendar__day');
    if (buttons?.[nextIndex]) {
      (buttons[nextIndex] as HTMLElement).focus();
    }
  }
}

// Expose
const calendarRef = ref<HTMLElement>();

function focus() {
  const firstDay = calendarRef.value?.querySelector(
    '.px-calendar__day:not(.is-disabled):not(.is-outside)',
  ) as HTMLElement | null;
  firstDay?.focus();
}

defineExpose<CalendarInstance>({
  focus,
  prevMonth,
  nextMonth,
});
</script>

<template>
  <div
    ref="calendarRef"
    class="px-calendar"
    :class="{
      [`px-calendar--${type}`]: type,
    }"
    :style="customColorStyle"
  >
    <div class="px-calendar__header">
      <button
        class="px-calendar__nav-prev"
        type="button"
        :aria-label="ariaLabels.prevMonth"
        @click="prevMonth"
      >
        ◀
      </button>
      <div class="px-calendar__selectors">
        <div class="px-calendar__month-select">
          <select
            class="px-calendar__select-inner"
            :value="String(displayMonth)"
            @change="onMonthSelect(($event.target as HTMLSelectElement).value)"
          >
            <option v-for="opt in monthOptions" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
        </div>
        <div class="px-calendar__year-select">
          <select
            class="px-calendar__select-inner"
            :value="String(displayYear)"
            @change="onYearSelect(($event.target as HTMLSelectElement).value)"
          >
            <option v-for="opt in yearRangeArray" :key="opt.value" :value="opt.value">
              {{ opt.label }}
            </option>
          </select>
        </div>
      </div>
      <button
        class="px-calendar__nav-next"
        type="button"
        :aria-label="ariaLabels.nextMonth"
        @click="nextMonth"
      >
        ▶
      </button>
    </div>
    <div class="px-calendar__grid" role="grid">
      <div
        v-for="dayName in dayNamesShort"
        :key="dayName"
        class="px-calendar__weekday"
        role="columnheader"
      >
        {{ dayName }}
      </div>
      <button
        v-for="(day, index) in grid"
        :key="index"
        type="button"
        class="px-calendar__day"
        :class="{
          'is-outside': !isSameMonth(day, currentMonth),
          'is-today': isToday(day),
          'is-selected': modelValue && isSameDay(day, modelValue),
          'is-disabled': isDisabled(day),
        }"
        :style="{
          visibility: !showOutsideDays && !isSameMonth(day, currentMonth) ? 'hidden' : undefined,
        }"
        :tabindex="index === focusedIndex || (focusedIndex === -1 && index === 0) ? 0 : -1"
        :disabled="isDisabled(day)"
        @click="selectDate(day)"
        @keydown="handleKeydown($event, index)"
      >
        {{ day.getDate() }}
      </button>
    </div>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
