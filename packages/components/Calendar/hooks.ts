import { CALENDAR_GRID_SIZE } from './constants';

/** Returns the number of days in a given month (0-indexed month). */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/** Returns the day-of-week index (0=Sun, 6=Sat) for the first day of the month. */
export function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

/** Checks if two dates refer to the same calendar day. */
export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** Checks if two dates are in the same month and year. */
export function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/** Checks if the given date is today. */
export function isToday(date: Date): boolean {
  return isSameDay(date, new Date());
}

/** Checks if a date falls within an optional min/max range (inclusive). */
export function isDateInRange(date: Date, min?: Date, max?: Date): boolean {
  if (min) {
    const minDay = new Date(min.getFullYear(), min.getMonth(), min.getDate());
    if (date < minDay) return false;
  }
  if (max) {
    const maxDay = new Date(max.getFullYear(), max.getMonth(), max.getDate());
    if (date > maxDay) return false;
  }
  return true;
}

/**
 * Generates a 42-cell (6 rows × 7 cols) calendar grid for the given month.
 * Includes overflow days from the previous and next months.
 *
 * @param year        - Full year (e.g. 2025)
 * @param month       - 0-indexed month (0=Jan, 11=Dec)
 * @param weekStartsOn - 0 for Sunday, 1 for Monday
 * @returns Array of 42 Date objects
 */
export function getCalendarGrid(year: number, month: number, weekStartsOn: 0 | 1 = 0): Date[] {
  const firstDay = getFirstDayOfWeek(year, month);
  // How many cells before the 1st of the month
  const offset = (firstDay - weekStartsOn + 7) % 7;

  const grid: Date[] = [];
  for (let i = 0; i < CALENDAR_GRID_SIZE; i++) {
    grid.push(new Date(year, month, 1 - offset + i));
  }
  return grid;
}

/** Safely adds N months to a date, clamping the day if needed. */
export function addMonths(date: Date, n: number): Date {
  const result = new Date(date.getFullYear(), date.getMonth() + n, 1);
  return result;
}
