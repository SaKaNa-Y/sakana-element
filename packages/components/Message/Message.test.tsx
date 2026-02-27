import { rAF } from '@sakana-element/utils';
import { afterEach, describe, expect, test } from 'vitest';
import { closeAll, destroyAll, message } from './methods';

function getTopValue(element: Element) {
  const styles = window.getComputedStyle(element);
  const topValue = styles.getPropertyValue('top');
  return Number.parseFloat(topValue);
}

const cleanup = async () => {
  closeAll();
  await rAF();
  await rAF();
  destroyAll();
  document.querySelectorAll('.px-message').forEach((el) => el.remove());
};

describe('Message', () => {
  afterEach(cleanup);

  test('message() function', async () => {
    const handler = message({ message: 'hello msg', duration: 0, transitionName: '' });
    await rAF();
    expect(document.querySelector('.px-message')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
    expect(document.querySelector('.px-message')).toBeFalsy();
  });

  test('call message() function more than once', async () => {
    message({ message: 'hello msg', duration: 0, transitionName: '' });
    message({ message: 'hello msg1', duration: 0, transitionName: '' });
    await rAF();
    expect(document.querySelectorAll('.px-message').length).toBe(2);
    closeAll();
    await rAF();
    await rAF();
    expect(document.querySelector('.px-message')).toBeFalsy();
  });

  test('message offset', async () => {
    message({ message: 'hello msg', duration: 0, offset: 100, transitionName: '' });
    message({ message: 'hello msg', duration: 0, offset: 50, transitionName: '' });
    await rAF();
    const elements = document.querySelectorAll('.px-message');
    expect(elements.length).toBe(2);
    expect(getTopValue(elements[0])).toBe(100);
    expect(getTopValue(elements[1])).toBeGreaterThan(100);
  });

  test('message type shortcut (success)', async () => {
    const handler = message.success!({ message: 'success msg', duration: 0, transitionName: '' });
    await rAF();
    expect(document.querySelector('.px-message')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
  });

  test('closeAll with specific type', async () => {
    message({ message: 'info msg', duration: 0, type: 'info', transitionName: '' });
    message({ message: 'success msg', duration: 0, type: 'success', transitionName: '' });
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
    message({ message: 'msg1', duration: 0, transitionName: '' });
    message({ message: 'msg2', duration: 0, transitionName: '' });
    await rAF();
    expect(document.querySelectorAll('.px-message').length).toBe(2);
    message.closeAll!();
    await rAF();
    await rAF();
    expect(document.querySelectorAll('.px-message').length).toBe(0);
  });

  test('should clear timer on mouseenter and restart on mouseleave', async () => {
    message({ message: 'hover test', duration: 5000, transitionName: '' });
    await rAF();
    const el = document.querySelector('.px-message') as HTMLElement;
    expect(el).toBeTruthy();
    el.dispatchEvent(new MouseEvent('mouseenter'));
    await rAF();
    expect(document.querySelector('.px-message')).toBeTruthy();
    el.dispatchEvent(new MouseEvent('mouseleave'));
    await rAF();
  });

  test('should close on Escape key', async () => {
    message({ message: 'escape test', duration: 0, transitionName: '' });
    await rAF();
    expect(document.querySelector('.px-message')).toBeTruthy();
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    await rAF();
    await rAF();
    expect(document.querySelector('.px-message')).toBeFalsy();
  });

  test('message with string shorthand', async () => {
    const handler = message('hello string');
    await rAF();
    expect(document.querySelector('.px-message')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
  });

  test('plain variant applies is-plain class', async () => {
    message({
      message: 'plain msg',
      duration: 0,
      plain: true,
      type: 'success',
      transitionName: '',
    });
    await rAF();
    const el = document.querySelector('.px-message');
    expect(el?.classList.contains('is-plain')).toBe(true);
    expect(el?.classList.contains('px-message--success')).toBe(true);
  });

  test('ghost variant applies is-ghost class', async () => {
    message({
      message: 'ghost msg',
      duration: 0,
      ghost: true,
      type: 'warning',
      transitionName: '',
    });
    await rAF();
    const el = document.querySelector('.px-message');
    expect(el?.classList.contains('is-ghost')).toBe(true);
    expect(el?.classList.contains('px-message--warning')).toBe(true);
  });

  test('custom icon, center, showClose classes', async () => {
    message({
      message: 'custom',
      duration: 0,
      icon: 'star',
      center: true,
      showClose: true,
      transitionName: '',
    });
    await rAF();
    const el = document.querySelector('.px-message');
    expect(el?.querySelector('.px-message__icon')).toBeTruthy();
    expect(el?.classList.contains('text-center')).toBe(true);
    expect(el?.classList.contains('is-close')).toBe(true);
  });

  test('timer bar visibility', async () => {
    message({ message: 'timer msg', duration: 1, transitionName: '' });
    await rAF();
    expect(document.querySelector('.px-message__timer')).toBeTruthy();
  });

  test('timer bar hidden when showTimer is false or duration is 0', async () => {
    message({ message: 'no timer', duration: 0, transitionName: '' });
    await rAF();
    expect(document.querySelector('.px-message__timer')).toBeFalsy();
  });

  test('max count limits visible messages', async () => {
    message({ message: 'msg1', duration: 0, max: 2, transitionName: '' });
    message({ message: 'msg2', duration: 0, max: 2, transitionName: '' });
    message({ message: 'msg3', duration: 0, max: 2, transitionName: '' });
    await rAF();
    await rAF();
    expect(document.querySelectorAll('.px-message').length).toBeLessThanOrEqual(2);
  });

  test('type shortcuts warning', async () => {
    message.warning!({ message: 'w', duration: 0, transitionName: '' });
    await rAF();
    expect(document.querySelector('.px-message')?.classList.contains('px-message--warning')).toBe(
      true,
    );
  });
});
