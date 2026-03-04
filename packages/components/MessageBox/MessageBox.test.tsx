import { rAF } from '@sakana-element/utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createApp, h } from 'vue';
import { PxMessageBox } from './index';
import MessageBox from './methods';
import type { MessageBoxType } from './types';

describe('MessageBox Component', () => {
  afterEach(async () => {
    MessageBox.close();
    await rAF();
    await rAF();
    document.querySelectorAll('.px-message-box').forEach((el) => el.remove());
    document.querySelectorAll('.px-overlay').forEach((el) => el.remove());
  });

  it('renders correctly', async () => {
    const props = {
      title: 'Test Title',
      message: 'Test Message',
      showClose: true,
      closeOnClickModal: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      showConfirmButton: true,
    };

    MessageBox(props);
    await rAF();
    const header = document.querySelector('.px-message-box__header');
    const title = document.querySelector('.px-message-box__title');
    const messageEl = document.querySelector('.px-message-box__message');

    expect(title).toBeTruthy();
    expect(header).toBeTruthy();
    expect(messageEl).toBeTruthy();

    MessageBox.close();
  });

  it('closes on close button click', async () => {
    const props = {
      title: 'Test Title',
      message: 'Test Message',
      showClose: true,
    };

    const doAction = vi.fn();
    MessageBox(props).catch((action) => doAction(action));
    await rAF();

    const closeBtn = document.querySelector('.px-message-box__header-btn') as HTMLButtonElement;
    closeBtn.click();

    await rAF();

    expect(doAction).toHaveBeenCalledWith('close');
  });

  it('triggers confirm action on confirm button click', async () => {
    const props = {
      title: 'Test Title',
      message: 'Test Message',
      showConfirmButton: true,
      showCancelButton: false,
    };

    const doAction = vi.fn();
    MessageBox(props).then((action) => doAction(action));
    await rAF();

    const confirmBtn = document.querySelector('.px-message-box__footer-btn') as HTMLButtonElement;
    confirmBtn.click();
    await rAF();

    expect(doAction).toBeCalledWith('confirm');
  });

  it('triggers cancel action on cancel button click', async () => {
    const props = {
      title: 'Test Title',
      message: 'Test Message',
      showConfirmButton: true,
      showCancelButton: true,
    };

    const doAction = vi.fn();
    MessageBox(props).catch((action) => doAction(action));
    await rAF();

    const cancelBtn = document.querySelector('.px-message-box__cancel-btn') as HTMLButtonElement;
    cancelBtn.click();

    await rAF();

    expect(doAction).toHaveBeenCalledWith('cancel');
  });

  it('handles input in prompt mode', async () => {
    const props = {
      title: 'Test Title',
      message: 'Test Message',
      boxType: 'prompt' as MessageBoxType,
      showInput: true,
    };

    const doAction = vi.fn();
    MessageBox(props).then((res) => doAction(res));
    await rAF();

    const input = document.querySelector('input') as HTMLInputElement;
    input.value = 'Test Input';
    input.dispatchEvent(new Event('input'));

    const confirmBtn = document.querySelector('.px-message-box__confirm-btn') as HTMLButtonElement;
    confirmBtn.click();

    await rAF();

    expect(doAction).toHaveBeenCalledWith({
      value: 'Test Input',
      action: 'confirm',
    });
  });

  it('should support string message shorthand', async () => {
    MessageBox('Simple message');
    await rAF();
    const messageEl = document.querySelector('.px-message-box__message');
    expect(messageEl).toBeTruthy();
    MessageBox.close();
  });

  it('should support callback option', async () => {
    const callback = vi.fn();
    MessageBox({
      title: 'Callback Test',
      message: 'Test',
      showConfirmButton: true,
      callback,
    });
    await rAF();

    const confirmBtn = document.querySelector('.px-message-box__footer-btn') as HTMLButtonElement;
    confirmBtn.click();
    await rAF();

    expect(callback).toHaveBeenCalled();
  });

  it('should close when clicking overlay with closeOnClickModal', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'Test',
      message: 'Test Message',
      closeOnClickModal: true,
    }).catch((action) => doAction(action));
    await rAF();

    const overlay = document.querySelector('.px-overlay-message-box') as HTMLElement;
    overlay.click();
    await rAF();
    expect(doAction).toHaveBeenCalledWith('close');
  });

  it('should render with center layout', async () => {
    MessageBox({
      title: 'Center',
      message: 'Centered',
      center: true,
      type: 'warning',
    });
    await rAF();
    expect(document.querySelector('.px-message-box.is-center')).toBeTruthy();
    MessageBox.close();
  });

  it('should render type icon in content area', async () => {
    MessageBox({
      title: 'Info',
      message: 'Info message',
      type: 'info',
    });
    await rAF();
    const icon = document.querySelector('.px-message-box__content .px-icon');
    expect(icon).toBeTruthy();
    MessageBox.close();
  });

  it('should handle input enter key in prompt mode', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'Prompt',
      message: 'Enter value',
      boxType: 'prompt',
      showInput: true,
    }).then((res) => doAction(res));
    await rAF();

    const input = document.querySelector('input') as HTMLInputElement;
    input.value = 'Enter value';
    input.dispatchEvent(new Event('input'));

    // Simulate Enter key
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', bubbles: true }));
    await rAF();
    expect(doAction).toHaveBeenCalled();
  });

  it('should support beforeClose callback', async () => {
    const beforeClose = vi.fn((_action: string, _state: any, done: () => void) => {
      done();
    });
    MessageBox({
      title: 'Test',
      message: 'msg',
      beforeClose,
      showConfirmButton: true,
    });
    await rAF();

    const confirmBtn = document.querySelector('.px-message-box__footer-btn') as HTMLButtonElement;
    confirmBtn.click();
    await rAF();

    expect(beforeClose).toHaveBeenCalled();
  });

  it('should handle Enter keydown on confirm button', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'Test',
      message: 'msg',
      showConfirmButton: true,
    }).then((action) => doAction(action));
    await rAF();

    const confirmBtn = document.querySelector('.px-message-box__confirm-btn') as HTMLButtonElement;
    expect(confirmBtn).toBeTruthy();
    confirmBtn.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await rAF();
    expect(doAction).toHaveBeenCalledWith('confirm');
  });

  it('should handle Enter keydown on cancel button', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'Test',
      message: 'msg',
      showConfirmButton: true,
      showCancelButton: true,
    }).catch((action) => doAction(action));
    await rAF();

    const cancelBtn = document.querySelector('.px-message-box__cancel-btn') as HTMLButtonElement;
    expect(cancelBtn).toBeTruthy();
    cancelBtn.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await rAF();
    expect(doAction).toHaveBeenCalledWith('cancel');
  });

  it('should render close icon inside the close button', async () => {
    MessageBox({
      title: 'Close Icon Test',
      message: 'Test message',
      showClose: true,
    });
    await rAF();
    const closeBtn = document.querySelector('.px-message-box__header-btn');
    expect(closeBtn).toBeTruthy();
    const icon = closeBtn?.querySelector('.px-icon');
    expect(icon).toBeTruthy();
    MessageBox.close();
  });
});

describe('MessageBox factory methods', () => {
  afterEach(async () => {
    MessageBox.close();
    await rAF();
    await rAF();
    document.querySelectorAll('.px-message-box').forEach((el) => el.remove());
    document.querySelectorAll('.px-overlay').forEach((el) => el.remove());
  });

  it('MessageBox.alert should work', async () => {
    MessageBox.alert('Alert message', 'Alert Title');
    await rAF();
    const title = document.querySelector('.px-message-box__title');
    expect(title?.textContent).toContain('Alert Title');
    MessageBox.close();
  });

  it('MessageBox.confirm should show cancel button', async () => {
    MessageBox.confirm('Confirm message', 'Confirm Title');
    await rAF();
    const cancelBtn = document.querySelector('.px-message-box__cancel-btn');
    expect(cancelBtn).toBeTruthy();
    MessageBox.close();
  });

  it('MessageBox.prompt should show input', async () => {
    MessageBox.prompt('Prompt message', 'Prompt Title');
    await rAF();
    const input = document.querySelector('.px-message-box input');
    expect(input).toBeTruthy();
    MessageBox.close();
  });

  it('MessageBox.alert with options object as title', async () => {
    MessageBox.alert('Alert message', { title: 'Custom Alert' });
    await rAF();
    MessageBox.close();
  });

  it('MessageBox.alert without title', async () => {
    MessageBox.alert('Alert message');
    await rAF();
    MessageBox.close();
  });

  it('MessageBox.close should close all instances', async () => {
    MessageBox({ title: 'Test', message: 'msg' });
    await rAF();
    expect(document.querySelector('.px-message-box')).toBeTruthy();
    MessageBox.close();
    await rAF();
    await rAF();
  });

  it('MessageBox.confirm with options object as title', async () => {
    MessageBox.confirm('Confirm message', { title: 'Custom Confirm' });
    await rAF();
    MessageBox.close();
  });

  it('MessageBox.confirm without title', async () => {
    MessageBox.confirm('Confirm message');
    await rAF();
    MessageBox.close();
  });

  it('MessageBox.prompt with options object as title', async () => {
    MessageBox.prompt('Prompt message', { title: 'Custom Prompt' });
    await rAF();
    MessageBox.close();
  });

  it('MessageBox.prompt without title', async () => {
    MessageBox.prompt('Prompt message');
    await rAF();
    MessageBox.close();
  });
});

describe('MessageBox/index', () => {
  it('should export PxMessageBox', () => {
    expect(PxMessageBox).toBe(MessageBox);
  });

  it('should have install method', () => {
    expect(PxMessageBox.install).toBeDefined();
  });

  it('install should register global properties', () => {
    const app = createApp({ render: () => null });
    PxMessageBox.install(app);
    expect(app.config.globalProperties.$msgbox).toBe(MessageBox);
    expect(app.config.globalProperties.$messagebox).toBe(MessageBox);
    expect(app.config.globalProperties.$alert).toBeDefined();
    expect(app.config.globalProperties.$confirm).toBeDefined();
    expect(app.config.globalProperties.$prompt).toBeDefined();
  });
});

describe('MessageBox new features', () => {
  afterEach(async () => {
    MessageBox.close();
    await rAF();
    await rAF();
    document.querySelectorAll('.px-message-box').forEach((el) => el.remove());
    document.querySelectorAll('.px-overlay').forEach((el) => el.remove());
  });

  // Feature: customClass
  it('should apply customClass to the root element', async () => {
    MessageBox({
      title: 'Custom',
      message: 'msg',
      customClass: 'my-custom-class',
    });
    await rAF();
    const el = document.querySelector('.px-message-box.my-custom-class');
    expect(el).toBeTruthy();
  });

  // Feature: customStyle
  it('should apply customStyle to the root element', async () => {
    MessageBox({
      title: 'Style',
      message: 'msg',
      customStyle: { backgroundColor: 'red' },
    });
    await rAF();
    const el = document.querySelector('.px-message-box') as HTMLElement;
    expect(el.style.backgroundColor).toBe('red');
  });

  // Feature: width
  it('should apply width as CSS variable', async () => {
    MessageBox({
      title: 'Width',
      message: 'msg',
      width: 600,
    });
    await rAF();
    const el = document.querySelector('.px-message-box') as HTMLElement;
    expect(el.style.getPropertyValue('--px-message-box-width')).toBe('600px');
  });

  it('should apply string width as CSS variable', async () => {
    MessageBox({
      title: 'Width',
      message: 'msg',
      width: '50%',
    });
    await rAF();
    const el = document.querySelector('.px-message-box') as HTMLElement;
    expect(el.style.getPropertyValue('--px-message-box-width')).toBe('50%');
  });

  // Feature: closeOnPressEscape
  it('should close on Escape key press by default', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'ESC',
      message: 'msg',
    }).catch((action) => doAction(action));
    await rAF();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await rAF();
    expect(doAction).toHaveBeenCalledWith('close');
  });

  it('should not close on Escape when closeOnPressEscape is false', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'ESC',
      message: 'msg',
      closeOnPressEscape: false,
    }).catch((action) => doAction(action));
    await rAF();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await rAF();
    expect(doAction).not.toHaveBeenCalled();
  });

  // Feature: type-colored borders
  (['info', 'success', 'warning', 'danger'] as const).forEach((type) => {
    it(`should apply ${type} type class`, async () => {
      MessageBox({ title: type, message: 'msg', type });
      await rAF();
      expect(document.querySelector(`.px-message-box.px-message-box--${type}`)).toBeTruthy();
    });
  });

  // Feature: distinguishCancelAndClose
  it('should send close action by default when close button clicked', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'Test',
      message: 'msg',
      showClose: true,
      distinguishCancelAndClose: true,
    }).catch((action) => doAction(action));
    await rAF();

    const closeBtn = document.querySelector('.px-message-box__header-btn') as HTMLButtonElement;
    closeBtn.click();
    await rAF();
    expect(doAction).toHaveBeenCalledWith('close');
  });

  it('should send cancel action on close when distinguishCancelAndClose is false', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'Test',
      message: 'msg',
      showClose: true,
      distinguishCancelAndClose: false,
    }).catch((action) => doAction(action));
    await rAF();

    const closeBtn = document.querySelector('.px-message-box__header-btn') as HTMLButtonElement;
    closeBtn.click();
    await rAF();
    expect(doAction).toHaveBeenCalledWith('cancel');
  });

  it('should send cancel on overlay click when distinguishCancelAndClose is false', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'Test',
      message: 'msg',
      closeOnClickModal: true,
      distinguishCancelAndClose: false,
    }).catch((action) => doAction(action));
    await rAF();

    const overlay = document.querySelector('.px-overlay-message-box') as HTMLElement;
    overlay.click();
    await rAF();
    expect(doAction).toHaveBeenCalledWith('cancel');
  });

  // Feature: draggable
  it('should add is-draggable class when draggable is true', async () => {
    MessageBox({
      title: 'Drag',
      message: 'msg',
      draggable: true,
    });
    await rAF();
    expect(document.querySelector('.px-message-box.is-draggable')).toBeTruthy();
  });

  it('should not add is-draggable class by default', async () => {
    MessageBox({
      title: 'No Drag',
      message: 'msg',
    });
    await rAF();
    expect(document.querySelector('.px-message-box.is-draggable')).toBeFalsy();
  });

  // Feature: beforeClose auto-loading
  it('should set loading state when beforeClose is async', async () => {
    let resolveFn: (() => void) | undefined;
    const beforeClose = vi.fn((_action: string, _state: any, done: () => void) => {
      return new Promise<void>((resolve) => {
        resolveFn = () => {
          done();
          resolve();
        };
      });
    });

    MessageBox({
      title: 'Test',
      message: 'msg',
      beforeClose,
      showConfirmButton: true,
    });
    await rAF();

    const confirmBtn = document.querySelector('.px-message-box__confirm-btn') as HTMLButtonElement;
    confirmBtn.click();
    await rAF();

    expect(beforeClose).toHaveBeenCalled();
    // Resolve the promise
    resolveFn?.();
    await rAF();
  });

  // Feature: footer VNode
  it('should render custom footer VNode', async () => {
    MessageBox({
      title: 'Footer',
      message: 'msg',
      footer: h('div', { class: 'custom-footer' }, 'Custom Footer'),
    });
    await rAF();
    const footer = document.querySelector('.px-message-box__footer .custom-footer');
    expect(footer).toBeTruthy();
    expect(footer?.textContent).toBe('Custom Footer');
  });

  it('should render footer render function', async () => {
    MessageBox({
      title: 'Footer Fn',
      message: 'msg',
      footer: () => h('span', { class: 'fn-footer' }, 'Render Footer'),
    });
    await rAF();
    const footer = document.querySelector('.px-message-box__footer .fn-footer');
    expect(footer).toBeTruthy();
    expect(footer?.textContent).toBe('Render Footer');
  });

  it('should hide default buttons when footer is provided', async () => {
    MessageBox({
      title: 'Footer',
      message: 'msg',
      showConfirmButton: true,
      showCancelButton: true,
      footer: h('button', { class: 'my-btn' }, 'OK'),
    });
    await rAF();
    expect(document.querySelector('.px-message-box__confirm-btn')).toBeFalsy();
    expect(document.querySelector('.px-message-box__cancel-btn')).toBeFalsy();
    expect(document.querySelector('.my-btn')).toBeTruthy();
  });

  // Feature: close button alignment (flex header)
  it('should render header without show-close class (removed padding hack)', async () => {
    MessageBox({
      title: 'Aligned',
      message: 'msg',
      showClose: true,
    });
    await rAF();
    const header = document.querySelector('.px-message-box__header');
    expect(header).toBeTruthy();
    // The show-close class should no longer be present
    expect(header?.classList.contains('show-close')).toBe(false);
  });

  // Feature: closeOnHashChange
  it('should close on hash change by default', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'Hash',
      message: 'msg',
    }).catch((action) => doAction(action));
    await rAF();

    window.dispatchEvent(new HashChangeEvent('hashchange'));
    await rAF();
    expect(doAction).toHaveBeenCalledWith('close');
  });

  it('should not close on hash change when closeOnHashChange is false', async () => {
    const doAction = vi.fn();
    MessageBox({
      title: 'Hash',
      message: 'msg',
      closeOnHashChange: false,
    }).catch((action) => doAction(action));
    await rAF();

    window.dispatchEvent(new HashChangeEvent('hashchange'));
    await rAF();
    expect(doAction).not.toHaveBeenCalled();
  });
});
