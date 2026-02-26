import { rAF } from '@sakana-element/utils';
import { afterEach, describe, expect, test } from 'vitest';
import { closeAll, message } from './methods';

function getTopValue(element: Element) {
  const styles = window.getComputedStyle(element);
  const topValue = styles.getPropertyValue('top');
  return Number.parseFloat(topValue);
}

describe('Message', () => {
  afterEach(async () => {
    closeAll();
    await rAF();
    await rAF();
    document.querySelectorAll('.px-message').forEach((el) => el.remove());
  });

  test('message() function', async () => {
    const handler = message({ message: 'hello msg', duration: 0 });
    await rAF();
    expect(document.querySelector('.px-message')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
    expect(document.querySelector('.px-message')).toBeFalsy();
  });

  test('call message() function more than once', async () => {
    message({ message: 'hello msg', duration: 0 });
    message({ message: 'hello msg1', duration: 0 });
    await rAF();
    expect(document.querySelectorAll('.px-message').length).toBe(2);
    closeAll();
    await rAF();
    await rAF();
    expect(document.querySelector('.px-message')).toBeFalsy();
  });

  test('message offset', async () => {
    message({ message: 'hello msg', duration: 0, offset: 100 });
    message({ message: 'hello msg', duration: 0, offset: 50 });

    await rAF();
    const elements = document.querySelectorAll('.px-message');
    expect(elements.length).toBe(2);

    expect(getTopValue(elements[0])).toBe(100);
    const secondTop = getTopValue(elements[1]);
    expect(secondTop).toBeGreaterThan(100);
  });

  test('message with string shorthand', async () => {
    const handler = message('hello string');
    await rAF();
    expect(document.querySelector('.px-message')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
  });

  test('message type shortcuts', async () => {
    const handler = message.success!('success msg');
    await rAF();
    expect(document.querySelector('.px-message')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
  });

  test('closeAll with specific type', async () => {
    message({ message: 'info msg', duration: 0, type: 'info' });
    message({ message: 'success msg', duration: 0, type: 'success' });
    await rAF();
    expect(document.querySelectorAll('.px-message').length).toBe(2);

    closeAll('info');
    await rAF();
    await rAF();
    const remaining = document.querySelectorAll('.px-message');
    expect(remaining.length).toBe(1);
    expect(remaining[0].textContent).toContain('success msg');
  });

  test('message.closeAll should work', async () => {
    message({ message: 'msg1', duration: 0 });
    message({ message: 'msg2', duration: 0 });
    await rAF();
    expect(document.querySelectorAll('.px-message').length).toBe(2);
    message.closeAll!();
    await rAF();
    await rAF();
    expect(document.querySelectorAll('.px-message').length).toBe(0);
  });

  test('should clear timer on mouseenter and restart on mouseleave', async () => {
    message({ message: 'hover test', duration: 5000 });
    await rAF();
    const el = document.querySelector('.px-message') as HTMLElement;
    expect(el).toBeTruthy();

    // Mouseenter should prevent auto-close
    el.dispatchEvent(new MouseEvent('mouseenter'));
    await rAF();
    // Message should still be visible
    expect(document.querySelector('.px-message')).toBeTruthy();

    // Mouseleave should restart timer
    el.dispatchEvent(new MouseEvent('mouseleave'));
    await rAF();
  });

  test('should close on Escape key', async () => {
    message({ message: 'escape test', duration: 0 });
    await rAF();
    expect(document.querySelector('.px-message')).toBeTruthy();

    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    await rAF();
    await rAF();
    expect(document.querySelector('.px-message')).toBeFalsy();
  });
});
