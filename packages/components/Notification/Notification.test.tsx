import { describe, test, expect, afterEach } from 'vitest';
import { notification, closeAll } from './methods';
import { rAF } from '@sakana-element/utils';

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
    document
      .querySelectorAll('.px-notification')
      .forEach((el) => el.remove());
  });

  test('notification() function', async () => {
    const handler = notification({ message: 'hello notify', duration: 0 });
    await rAF();
    expect(document.querySelector('.px-notification')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
    expect(document.querySelector('.px-notification')).toBeFalsy();
  });

  test('call notification() function more than once', async () => {
    notification({ message: 'hello notify', duration: 0 });
    notification({ message: 'hello notify', duration: 0 });
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(2);
    notification.closeAll();
    await rAF();
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(0);
  });

  test('notification offset', async () => {
    notification({ message: 'hello msg', duration: 0, offset: 100 });
    notification({ message: 'hello msg', duration: 0, offset: 50 });
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
    const handler = (notification as any).success('success notify');
    await rAF();
    expect(document.querySelector('.px-notification')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
  });

  test('closeAll with specific type', async () => {
    notification({ message: 'info', duration: 0, type: 'info' });
    notification({ message: 'success', duration: 0, type: 'success' });
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(2);

    closeAll('info');
    await rAF();
    await rAF();
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
});
