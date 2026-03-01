import { rAF } from '@sakana-element/utils';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { closeAll, destroyAll, notification } from './methods';

function getTopValue(element: Element) {
  const styles = window.getComputedStyle(element);
  const topValue = styles.getPropertyValue('top');
  return Number.parseFloat(topValue);
}

describe('Notification', () => {
  afterEach(async () => {
    destroyAll();
    await rAF();
    document.querySelectorAll('.px-notification').forEach((el) => el.remove());
  });

  test('notification() function', async () => {
    const handler = notification({
      title: 'Test',
      message: 'hello notify',
      duration: 0,
      transitionName: '',
    });
    await rAF();
    expect(document.querySelector('.px-notification')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
    expect(document.querySelector('.px-notification')).toBeFalsy();
  });

  test('call notification() function more than once', async () => {
    notification({ title: 'Test', message: 'hello notify', duration: 0, transitionName: '' });
    notification({ title: 'Test', message: 'hello notify', duration: 0, transitionName: '' });
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(2);
    notification.closeAll();
    await rAF();
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(0);
  });

  test('notification offset', async () => {
    notification({
      title: 'Test',
      message: 'hello msg',
      duration: 0,
      offset: 100,
      transitionName: '',
    });
    notification({
      title: 'Test',
      message: 'hello msg',
      duration: 0,
      offset: 50,
      transitionName: '',
    });
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
    notification({
      title: 'Test',
      message: 'info',
      duration: 0,
      type: 'info',
      transitionName: '',
    });
    notification({
      title: 'Test',
      message: 'success',
      duration: 0,
      type: 'success',
      transitionName: '',
    });
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
      transitionName: '',
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
      transitionName: '',
    });
    await rAF();
    expect(document.querySelector('.px-notification')).toBeTruthy();
    handler.close();
    await rAF();
    await rAF();
  });

  test('should clear timer on mouseenter', async () => {
    notification({
      title: 'Test',
      message: 'hover test',
      duration: 5000,
      transitionName: '',
    });
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
    notification({
      title: 'Test',
      message: 'click test',
      duration: 0,
      onClick,
      transitionName: '',
    });
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
        transitionName: '',
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

  // ─── New feature tests ───

  test('error type shortcut', async () => {
    const handler = notification.error!('error notify');
    await rAF();
    const el = document.querySelector('.px-notification');
    expect(el).toBeTruthy();
    expect(el?.classList.contains('px-notification--error')).toBe(true);
    handler.close();
    await rAF();
    await rAF();
  });

  test('plain variant adds is-plain class', async () => {
    notification({
      title: 'Test',
      message: 'plain',
      duration: 0,
      plain: true,
      type: 'success',
      transitionName: '',
    });
    await rAF();
    const el = document.querySelector('.px-notification');
    expect(el?.classList.contains('is-plain')).toBe(true);
  });

  test('ghost variant adds is-ghost class', async () => {
    notification({
      title: 'Test',
      message: 'ghost',
      duration: 0,
      ghost: true,
      type: 'warning',
      transitionName: '',
    });
    await rAF();
    const el = document.querySelector('.px-notification');
    expect(el?.classList.contains('is-ghost')).toBe(true);
  });

  test('timer bar is rendered by default when duration > 0', async () => {
    notification({
      title: 'Test',
      message: 'timer',
      duration: 5000,
      transitionName: '',
    });
    await rAF();
    const timer = document.querySelector('.px-notification__timer');
    expect(timer).toBeTruthy();
  });

  test('timer bar is not rendered when showTimer is false', async () => {
    notification({
      title: 'Test',
      message: 'no timer',
      duration: 5000,
      showTimer: false,
      transitionName: '',
    });
    await rAF();
    const timer = document.querySelector('.px-notification__timer');
    expect(timer).toBeFalsy();
  });

  test('timer bar is not rendered when duration is 0', async () => {
    notification({
      title: 'Test',
      message: 'no timer',
      duration: 0,
      transitionName: '',
    });
    await rAF();
    const timer = document.querySelector('.px-notification__timer');
    expect(timer).toBeFalsy();
  });

  test('max option limits visible notifications per position', async () => {
    notification({
      title: 'Test',
      message: 'msg1',
      duration: 0,
      max: 2,
      transitionName: '',
    });
    notification({
      title: 'Test',
      message: 'msg2',
      duration: 0,
      max: 2,
      transitionName: '',
    });
    notification({
      title: 'Test',
      message: 'msg3',
      duration: 0,
      max: 2,
      transitionName: '',
    });
    await rAF();
    const els = document.querySelectorAll('.px-notification');
    expect(els.length).toBe(2);
  });

  test('Escape key closes the most recent notification', async () => {
    notification({
      title: 'Test',
      message: 'first',
      duration: 0,
      transitionName: '',
    });
    notification({
      title: 'Test',
      message: 'second',
      duration: 0,
      transitionName: '',
    });
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(2);

    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    await rAF();
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(1);
  });

  test('destroyAll removes all notifications immediately', async () => {
    notification({
      title: 'Test',
      message: 'a',
      duration: 0,
      transitionName: '',
    });
    notification({
      title: 'Test',
      message: 'b',
      duration: 0,
      position: 'bottom-left',
      transitionName: '',
    });
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(2);

    destroyAll();
    await rAF();
    expect(document.querySelectorAll('.px-notification').length).toBe(0);
  });

  test('custom icon overrides default type icon', async () => {
    notification({
      title: 'Test',
      message: 'custom icon',
      duration: 0,
      type: 'success',
      icon: 'star',
      transitionName: '',
    });
    await rAF();
    const el = document.querySelector('.px-notification');
    expect(el).toBeTruthy();
  });
});
