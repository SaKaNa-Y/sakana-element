import { rAF } from '@sakana-element/utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createApp } from 'vue';
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
