import { rAF } from '@sakana-element/utils';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { closeAll, notification } from './methods';

function getTopValue(element: Element) {
  const styles = window.getComputedStyle(element);
  const topValue = styles.getPropertyValue('top');
  return Number.parseFloat(topValue);
}

describe('Notification', () => {
  afterEach(async () => {
    notification.closeAll();
    await rAF();
    await rAF();
    document.querySelectorAll('.px-notification').forEach((el) => el.remove());
  });

  test('notification() function', async () => {
    const handler = notification({ title: 'Test', message: 'hello notify', duration: 0 });
    await rAF();
    expect(document.querySelector('.px-notification')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
    expect(document.querySelector('.px-notification')).toBeFalsy();
  });

  test('call notification() function more than once', async () => {
    notification({ title: 'Test', message: 'hello notify', duration: 0 });
    notification({ title: 'Test', message: 'hello notify', duration: 0 });
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(2);
    notification.closeAll();
    await rAF();
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(0);
  });

  test('notification offset', async () => {
    notification({ title: 'Test', message: 'hello msg', duration: 0, offset: 100 });
    notification({ title: 'Test', message: 'hello msg', duration: 0, offset: 50 });
    await rAF();
    const elements = document.querySelectorAll('.px-notification');
    expect(elements.length).toBe(2);

    expect(getTopValue(elements[0])).toBe(100);
    const secondTop = getTopValue(elements[1]);
    expect(secondTop).toBeGreaterThan(100);
  });

  test('notification with string shorthand', async () => {
    const handler = notification('hello string');
    await rAF();
    expect(document.querySelector('.px-notification')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
  });

  test('notification type shortcuts', async () => {
    const handler = notification.success!('success notify');
    await rAF();
    expect(document.querySelector('.px-notification')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
  });

  test('closeAll with specific type', async () => {
    notification({ title: 'Test', message: 'info', duration: 0, type: 'info' });
    notification({ title: 'Test', message: 'success', duration: 0, type: 'success' });
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(2);

    closeAll('info');
    await rAF();
    await rAF();
    const remaining = document.querySelectorAll('.px-notification');
    expect(remaining.length).toBe(1);
    expect(remaining[0].textContent).toContain('success');
  });

  test('notification with title', async () => {
    const handler = notification({
      title: 'Title',
      message: 'Content',
      duration: 0,
    });
    await rAF();
    const titleEl = document.querySelector('.px-notification__title');
    expect(titleEl?.textContent).toContain('Title');
    handler.close();
    await rAF();
    await rAF();
  });

  test('notification with custom position', async () => {
    const handler = notification({
      title: 'Test',
      message: 'bottom-right',
      duration: 0,
      position: 'bottom-right',
    });
    await rAF();
    expect(document.querySelector('.px-notification')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
  });

  test('should clear timer on mouseenter', async () => {
    notification({ title: 'Test', message: 'hover test', duration: 5000 });
    await rAF();
    const el = document.querySelector('.px-notification') as HTMLElement;
    expect(el).toBeTruthy();

    el.dispatchEvent(new MouseEvent('mouseenter'));
    await rAF();
    expect(document.querySelector('.px-notification')).toBeTruthy();

    el.dispatchEvent(new MouseEvent('mouseleave'));
    await rAF();
  });

  test('should invoke onClick callback when clicked', async () => {
    const onClick = vi.fn();
    notification({ title: 'Test', message: 'click test', duration: 0, onClick });
    await rAF();
    const el = document.querySelector('.px-notification') as HTMLElement;
    expect(el).toBeTruthy();

    el.click();
    await rAF();
    expect(onClick).toHaveBeenCalled();
  });

  test('notification with all position variants', async () => {
    const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;
    for (const position of positions) {
      const handler = notification({
        title: 'Test',
        message: `msg-${position}`,
        duration: 0,
        position,
      });
      await rAF();
      const el = document.querySelector('.px-notification');
      expect(el).toBeTruthy();
      handler.close();
      await rAF();
      await rAF();
      document.querySelectorAll('.px-notification').forEach((e) => e.remove());
    }
  });
});
