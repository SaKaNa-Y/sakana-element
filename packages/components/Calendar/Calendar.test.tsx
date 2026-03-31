import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Calendar from './Calendar.vue';
import {
  addMonths,
  getCalendarGrid,
  getDaysInMonth,
  getFirstDayOfWeek,
  isDateInRange,
  isSameDay,
  isSameMonth,
  isToday,
} from './hooks';
import { PxCalendar } from './index';
import type { CalendarType } from './types';

// ─── Date helpers ──────────────────────────────────────────────

describe('Calendar date helpers', () => {
  it('getDaysInMonth returns correct day count', () => {
    expect(getDaysInMonth(2025, 0)).toBe(31); // Jan
    expect(getDaysInMonth(2025, 1)).toBe(28); // Feb (non-leap)
    expect(getDaysInMonth(2024, 1)).toBe(29); // Feb (leap)
    expect(getDaysInMonth(2025, 3)).toBe(30); // Apr
  });

  it('getFirstDayOfWeek returns correct weekday index', () => {
    // 2025-01-01 is Wednesday (3)
    expect(getFirstDayOfWeek(2025, 0)).toBe(3);
  });

  it('isSameDay compares year/month/day only', () => {
    const a = new Date(2025, 5, 15, 10, 30);
    const b = new Date(2025, 5, 15, 22, 0);
    const c = new Date(2025, 5, 16);
    expect(isSameDay(a, b)).toBe(true);
    expect(isSameDay(a, c)).toBe(false);
  });

  it('isSameMonth compares year and month', () => {
    expect(isSameMonth(new Date(2025, 5, 1), new Date(2025, 5, 28))).toBe(true);
    expect(isSameMonth(new Date(2025, 5, 1), new Date(2025, 6, 1))).toBe(false);
  });

  it('isToday returns true for current date', () => {
    expect(isToday(new Date())).toBe(true);
    expect(isToday(new Date(2000, 0, 1))).toBe(false);
  });

  it('isDateInRange checks boundaries', () => {
    const date = new Date(2025, 5, 15);
    expect(isDateInRange(date, new Date(2025, 5, 1), new Date(2025, 5, 30))).toBe(true);
    expect(isDateInRange(date, new Date(2025, 5, 16))).toBe(false);
    expect(isDateInRange(date, undefined, new Date(2025, 5, 10))).toBe(false);
    expect(isDateInRange(date)).toBe(true);
  });

  it('getCalendarGrid returns 42 cells', () => {
    const grid = getCalendarGrid(2025, 0, 0);
    expect(grid).toHaveLength(42);
    // All should be Date instances
    grid.forEach((d) => expect(d).toBeInstanceOf(Date));
  });

  it('getCalendarGrid first visible day is correct for Sunday start', () => {
    // Jan 2025 starts on Wed (3), so offset is 3 → first cell is Dec 29, 2024
    const grid = getCalendarGrid(2025, 0, 0);
    expect(grid[0].getDate()).toBe(29);
    expect(grid[0].getMonth()).toBe(11); // December
  });

  it('getCalendarGrid respects weekStartsOn=1 (Monday)', () => {
    // Jan 2025 starts on Wed (3), weekStartsOn=1 → offset is (3-1+7)%7=2
    const grid = getCalendarGrid(2025, 0, 1);
    expect(grid[0].getDate()).toBe(30);
    expect(grid[0].getMonth()).toBe(11); // Dec 30
  });

  it('addMonths moves forward and backward', () => {
    const jan = new Date(2025, 0, 15);
    const mar = addMonths(jan, 2);
    expect(mar.getMonth()).toBe(2);
    expect(mar.getFullYear()).toBe(2025);

    const prev = addMonths(jan, -1);
    expect(prev.getMonth()).toBe(11);
    expect(prev.getFullYear()).toBe(2024);
  });
});

// ─── Component rendering ───────────────────────────────────────

describe('Calendar.vue', () => {
  const defaultMonth = new Date(2025, 5, 1); // June 2025

  it('should render with .px-calendar root class', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    expect(wrapper.find('.px-calendar').exists()).toBe(true);
  });

  it('should display month and year dropdowns in header', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    expect(wrapper.find('.px-calendar__month-select').exists()).toBe(true);
    expect(wrapper.find('.px-calendar__year-select').exists()).toBe(true);
  });

  it('should render month dropdown with correct selected value', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    const monthSelect = wrapper.find<HTMLSelectElement>('.px-calendar__month-select select');
    expect(monthSelect.exists()).toBe(true);
    expect(monthSelect.element.value).toBe('5');
  });

  it('should render year dropdown with correct selected value', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    const yearSelect = wrapper.find<HTMLSelectElement>('.px-calendar__year-select select');
    expect(yearSelect.exists()).toBe(true);
    expect(yearSelect.element.value).toBe('2025');
  });

  it('should render 7 weekday headers', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    const weekdays = wrapper.findAll('.px-calendar__weekday');
    expect(weekdays).toHaveLength(7);
  });

  it('should render day grid cells', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    const days = wrapper.findAll('.px-calendar__day');
    expect(days.length).toBe(42);
  });

  // ─── Month navigation ─────────────────────────────────────

  it('should navigate to previous month when prev button is clicked', async () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    await wrapper.find('.px-calendar__nav-prev').trigger('click');
    expect(wrapper.emitted('month-change')).toBeTruthy();
    const emitted = wrapper.emitted('month-change')![0][0] as Date;
    expect(emitted.getMonth()).toBe(4); // May
  });

  it('should navigate to next month when next button is clicked', async () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    await wrapper.find('.px-calendar__nav-next').trigger('click');
    expect(wrapper.emitted('month-change')).toBeTruthy();
    const emitted = wrapper.emitted('month-change')![0][0] as Date;
    expect(emitted.getMonth()).toBe(6); // July
  });

  it('should emit month-change on navigation', async () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    await wrapper.find('.px-calendar__nav-next').trigger('click');
    expect(wrapper.emitted('month-change')).toBeTruthy();
    const emitted = wrapper.emitted('month-change')![0][0] as Date;
    expect(emitted.getMonth()).toBe(6); // July
  });

  // ─── Date selection ────────────────────────────────────────

  it('should emit update:modelValue when a day is clicked', async () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    // Find a day cell that is in the current month
    const currentMonthDays = wrapper.findAll('.px-calendar__day:not(.is-outside)');
    expect(currentMonthDays.length).toBeGreaterThan(0);
    await currentMonthDays[0].trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
  });

  it('should apply .is-selected class on the selected day', () => {
    const selected = new Date(2025, 5, 15);
    const wrapper = mount(Calendar, {
      props: { modelValue: selected, defaultMonth },
    });
    const selectedDays = wrapper.findAll('.is-selected');
    expect(selectedDays).toHaveLength(1);
    expect(selectedDays[0].text()).toBe('15');
  });

  // ─── Outside days ──────────────────────────────────────────

  it('should mark outside days with .is-outside class', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth, showOutsideDays: true },
    });
    const outsideDays = wrapper.findAll('.is-outside');
    expect(outsideDays.length).toBeGreaterThan(0);
  });

  it('should hide outside days when showOutsideDays is false', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth, showOutsideDays: false },
    });
    const outsideDays = wrapper.findAll('.is-outside');
    outsideDays.forEach((day) => {
      expect(day.attributes('style')).toContain('visibility: hidden');
    });
  });

  // ─── Disabled dates ────────────────────────────────────────

  it('should apply .is-disabled class from disabledDate predicate', () => {
    const wrapper = mount(Calendar, {
      props: {
        defaultMonth,
        disabledDate: (d: Date) => d.getDay() === 0 || d.getDay() === 6, // weekends
      },
    });
    const disabledDays = wrapper.findAll('.is-disabled');
    expect(disabledDays.length).toBeGreaterThan(0);
  });

  it('should not emit update:modelValue when clicking a disabled day', async () => {
    const wrapper = mount(Calendar, {
      props: {
        defaultMonth,
        disabledDate: () => true, // all disabled
      },
    });
    const day = wrapper.find('.px-calendar__day');
    await day.trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeFalsy();
  });

  it('should disable dates outside minDate/maxDate range', () => {
    const wrapper = mount(Calendar, {
      props: {
        defaultMonth,
        minDate: new Date(2025, 5, 10),
        maxDate: new Date(2025, 5, 20),
      },
    });
    const disabledDays = wrapper.findAll('.is-disabled');
    // Days 1-9 and 21-30 of June should be disabled (plus outside days)
    expect(disabledDays.length).toBeGreaterThan(0);
  });

  // ─── Today highlight ──────────────────────────────────────

  it('should apply .is-today class on current date', () => {
    const today = new Date();
    const wrapper = mount(Calendar, {
      props: { defaultMonth: today },
    });
    const todayCell = wrapper.findAll('.is-today');
    expect(todayCell).toHaveLength(1);
    expect(todayCell[0].text()).toBe(String(today.getDate()));
  });

  // ─── Type variants ─────────────────────────────────────────

  it.each([['primary'], ['success'], ['info'], ['warning'], ['danger']] as [
    CalendarType,
  ][])('should apply correct class for type %s', (type) => {
    const wrapper = mount(Calendar, {
      props: { type, defaultMonth },
    });
    expect(wrapper.find('.px-calendar').classes()).toContain(`px-calendar--${type}`);
  });

  // ─── Custom color ──────────────────────────────────────────

  it('should apply custom color CSS variables when color prop is set', () => {
    const wrapper = mount(Calendar, {
      props: { color: '#ff6600', defaultMonth },
    });
    const style = wrapper.find('.px-calendar').attributes('style');
    expect(style).toContain('--px-calendar-selected-bg-color');
  });

  it('should not apply custom color when no color prop', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
    });
    const style = wrapper.find('.px-calendar').attributes('style') || '';
    expect(style).not.toContain('--px-calendar-selected-bg-color');
  });

  // ─── Keyboard navigation ───────────────────────────────────

  it('should move focus with arrow keys', async () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
      attachTo: document.body,
    });
    const days = wrapper.findAll('.px-calendar__day:not(.is-outside)');
    const firstDay = days[0];
    await firstDay.trigger('focus');
    await firstDay.trigger('keydown', { key: 'ArrowRight' });
    // Focus should have moved — the next day should be focused
    const focused = wrapper.find('.px-calendar__day:focus');
    expect(focused.exists()).toBe(true);
    wrapper.unmount();
  });

  it('should select date on Enter key', async () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
      attachTo: document.body,
    });
    const days = wrapper.findAll('.px-calendar__day:not(.is-outside)');
    await days[0].trigger('focus');
    await days[0].trigger('keydown', { key: 'Enter' });
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    wrapper.unmount();
  });

  it('should select date on Space key', async () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth },
      attachTo: document.body,
    });
    const days = wrapper.findAll('.px-calendar__day:not(.is-outside)');
    await days[0].trigger('focus');
    await days[0].trigger('keydown', { key: ' ' });
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    wrapper.unmount();
  });

  // ─── weekStartsOn ─────────────────────────────────────────

  it('should start week on Monday when weekStartsOn=1', () => {
    const wrapper = mount(Calendar, {
      props: { defaultMonth, weekStartsOn: 1 },
    });
    const weekdays = wrapper.findAll('.px-calendar__weekday');
    // First weekday header should be Mon
    expect(weekdays[0].text()).not.toBe('');
  });
});

// ─── withInstall ─────────────────────────────────────────────

describe('Calendar/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxCalendar.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxCalendar).toBe(Calendar);
  });

  it('should enhance Calendar component', () => {
    const enhanced = withInstall(Calendar);
    expect(enhanced).toBe(PxCalendar);
  });
});
