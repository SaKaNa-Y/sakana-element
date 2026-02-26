import { mount } from '@vue/test-utils';
import { describe, expect, test, vi } from 'vitest';
import FileInput from './FileInput.vue';
import { PxFileInput } from './index';

/**
 * Helper: create a FileList containing the given files via DataTransfer.
 */
function createFileList(...files: File[]): FileList {
  const dt = new DataTransfer();
  files.forEach((f) => dt.items.add(f));
  return dt.files;
}

/**
 * Helper: simulate file selection on a native <input type="file"> element.
 */
async function selectFiles(wrapper: ReturnType<typeof mount>, files: File[]) {
  const input = wrapper.find<HTMLInputElement>('input[type="file"]');
  const dt = new DataTransfer();
  files.forEach((f) => dt.items.add(f));
  Object.defineProperty(input.element, 'files', {
    value: dt.files,
    writable: false,
    configurable: true,
  });
  await input.trigger('change');
}

describe('FileInput.vue', () => {
  // --- Basic rendering ---
  describe('basic rendering', () => {
    test('should render root element with px-file-input class', () => {
      const wrapper = mount(FileInput);
      expect(wrapper.classes()).toContain('px-file-input');
    });

    test('should render a hidden native file input', () => {
      const wrapper = mount(FileInput);
      const input = wrapper.find('input[type="file"]');
      expect(input.exists()).toBe(true);
      expect(input.classes()).toContain('px-file-input__native');
    });

    test('should render wrapper element', () => {
      const wrapper = mount(FileInput);
      expect(wrapper.find('.px-file-input__wrapper').exists()).toBe(true);
    });

    test('should render trigger and name elements', () => {
      const wrapper = mount(FileInput);
      expect(wrapper.find('.px-file-input__trigger').exists()).toBe(true);
      expect(wrapper.find('.px-file-input__name').exists()).toBe(true);
    });
  });

  // --- Placeholder ---
  describe('placeholder', () => {
    test('should show default placeholder "No file chosen"', () => {
      const wrapper = mount(FileInput);
      expect(wrapper.find('.px-file-input__name').text()).toBe('No file chosen');
    });

    test('should show custom placeholder', () => {
      const wrapper = mount(FileInput, {
        props: { placeholder: 'Select a file...' },
      });
      expect(wrapper.find('.px-file-input__name').text()).toBe('Select a file...');
    });
  });

  // --- Size ---
  describe('size', () => {
    test.each(['large', 'small'] as const)('should apply px-file-input--%s class', (size) => {
      const wrapper = mount(FileInput, { props: { size } });
      expect(wrapper.classes()).toContain(`px-file-input--${size}`);
    });
  });

  // --- Preset color ---
  describe('preset color', () => {
    test.each([
      'primary',
      'success',
      'warning',
      'danger',
      'info',
    ])('should apply px-file-input--%s class for preset color', (color) => {
      const wrapper = mount(FileInput, { props: { color } });
      expect(wrapper.classes()).toContain(`px-file-input--${color}`);
    });

    test('should not apply color class when color prop is not set', () => {
      const wrapper = mount(FileInput);
      expect(
        wrapper
          .classes()
          .some((c) => /^px-file-input--(primary|success|warning|danger|info)$/.test(c)),
      ).toBe(false);
    });
  });

  // --- Custom hex color ---
  describe('custom hex color', () => {
    test('should apply inline CSS variables for custom hex color', () => {
      const wrapper = mount(FileInput, {
        props: { color: '#626aef' },
      });
      const style = wrapper.attributes('style') ?? '';
      expect(style).toContain('--px-file-input-border-color');
      expect(style).toContain('--px-file-input-shadow-color');
    });

    test('should apply ghost template for custom hex + ghost', () => {
      const wrapper = mount(FileInput, {
        props: { color: '#626aef', ghost: true },
      });
      const style = wrapper.attributes('style') ?? '';
      expect(style).toContain('--px-file-input-border-color: transparent');
    });
  });

  // --- Ghost ---
  describe('ghost', () => {
    test('should apply is-ghost class when ghost prop is set', () => {
      const wrapper = mount(FileInput, { props: { ghost: true } });
      expect(wrapper.classes()).toContain('is-ghost');
    });

    test('should not apply is-ghost class by default', () => {
      const wrapper = mount(FileInput);
      expect(wrapper.classes()).not.toContain('is-ghost');
    });

    test('should combine ghost with preset color', () => {
      const wrapper = mount(FileInput, {
        props: { ghost: true, color: 'primary' },
      });
      expect(wrapper.classes()).toContain('is-ghost');
      expect(wrapper.classes()).toContain('px-file-input--primary');
    });
  });

  // --- Disabled ---
  describe('disabled', () => {
    test('should apply is-disabled class', () => {
      const wrapper = mount(FileInput, { props: { disabled: true } });
      expect(wrapper.classes()).toContain('is-disabled');
    });

    test('should set disabled on native input', () => {
      const wrapper = mount(FileInput, { props: { disabled: true } });
      expect(wrapper.find<HTMLInputElement>('input[type="file"]').element.disabled).toBe(true);
    });

    test('should not trigger file dialog when disabled', async () => {
      const wrapper = mount(FileInput, { props: { disabled: true } });
      const input = wrapper.find<HTMLInputElement>('input[type="file"]');
      const clickSpy = vi.spyOn(input.element, 'click');
      await wrapper.find('.px-file-input__trigger').trigger('click');
      expect(clickSpy).not.toHaveBeenCalled();
    });
  });

  // --- Native attrs ---
  describe('native attributes', () => {
    test('should forward accept to native input', () => {
      const wrapper = mount(FileInput, { props: { accept: 'image/*' } });
      expect(wrapper.find('input[type="file"]').attributes('accept')).toBe('image/*');
    });

    test('should forward multiple to native input', () => {
      const wrapper = mount(FileInput, { props: { multiple: true } });
      expect(wrapper.find('input[type="file"]').element.hasAttribute('multiple')).toBe(true);
    });

    test('should forward form to native input', () => {
      const wrapper = mount(FileInput, { props: { form: 'my-form' } });
      expect(wrapper.find('input[type="file"]').attributes('form')).toBe('my-form');
    });
  });

  // --- v-model / events ---
  describe('v-model and events', () => {
    test('should emit update:modelValue and change on file selection', async () => {
      const wrapper = mount(FileInput);
      const file = new File(['content'], 'test.txt', { type: 'text/plain' });
      await selectFiles(wrapper, [file]);

      expect(wrapper.emitted('update:modelValue')).toBeTruthy();
      expect(wrapper.emitted('change')).toBeTruthy();

      const emittedFiles = wrapper.emitted('update:modelValue')![0][0] as FileList;
      expect(emittedFiles).toBeInstanceOf(FileList);
      expect(emittedFiles.length).toBe(1);
      expect(emittedFiles[0].name).toBe('test.txt');
    });

    test('should display file name after selection', async () => {
      const wrapper = mount(FileInput);
      const file = new File(['content'], 'photo.png', { type: 'image/png' });
      await selectFiles(wrapper, [file]);

      expect(wrapper.find('.px-file-input__name').text()).toBe('photo.png');
    });

    test('should display file count for multiple files', async () => {
      const wrapper = mount(FileInput, { props: { multiple: true } });
      const file1 = new File(['a'], 'a.txt', { type: 'text/plain' });
      const file2 = new File(['b'], 'b.txt', { type: 'text/plain' });
      const file3 = new File(['c'], 'c.txt', { type: 'text/plain' });
      await selectFiles(wrapper, [file1, file2, file3]);

      expect(wrapper.find('.px-file-input__name').text()).toBe('3 files selected');
    });
  });

  // --- Clearable ---
  describe('clearable', () => {
    test('should not show clear icon when no file is selected', () => {
      const wrapper = mount(FileInput, {
        props: { clearable: true },
        global: { stubs: ['Icon'] },
      });
      expect(wrapper.find('.px-file-input__clear').exists()).toBe(false);
    });

    test('should show clear icon after file selection', async () => {
      const wrapper = mount(FileInput, {
        props: { clearable: true },
        global: { stubs: ['Icon'] },
      });
      const file = new File(['content'], 'test.txt', { type: 'text/plain' });
      await selectFiles(wrapper, [file]);

      expect(wrapper.find('.px-file-input__clear').exists()).toBe(true);
    });

    test('should clear file and emit events on clear click', async () => {
      const wrapper = mount(FileInput, {
        props: { clearable: true },
        global: { stubs: ['Icon'] },
      });
      const file = new File(['content'], 'test.txt', { type: 'text/plain' });
      await selectFiles(wrapper, [file]);

      await wrapper.find('.px-file-input__clear').trigger('click');

      expect(wrapper.emitted('clear')).toBeTruthy();
      // update:modelValue should be emitted with null
      const lastUpdate = wrapper.emitted('update:modelValue')!;
      expect(lastUpdate[lastUpdate.length - 1][0]).toBeNull();
      // Name should revert to placeholder
      expect(wrapper.find('.px-file-input__name').text()).toBe('No file chosen');
    });

    test('should not show clear icon when clearable is false', async () => {
      const wrapper = mount(FileInput, {
        props: { clearable: false },
        global: { stubs: ['Icon'] },
      });
      const file = new File(['content'], 'test.txt', { type: 'text/plain' });
      await selectFiles(wrapper, [file]);

      expect(wrapper.find('.px-file-input__clear').exists()).toBe(false);
    });
  });

  // --- Trigger slot ---
  describe('trigger slot', () => {
    test('should render default trigger text "Browse"', () => {
      const wrapper = mount(FileInput);
      expect(wrapper.find('.px-file-input__trigger').text()).toBe('Browse');
    });

    test('should render custom trigger slot content', () => {
      const wrapper = mount(FileInput, {
        slots: { trigger: 'Choose File' },
      });
      expect(wrapper.find('.px-file-input__trigger').text()).toBe('Choose File');
    });
  });

  // --- Exposed methods ---
  describe('exposed methods', () => {
    test('should expose ref', () => {
      const wrapper = mount(FileInput);
      expect((wrapper.vm as any).ref).toBeDefined();
    });

    test('should expose open method', () => {
      const wrapper = mount(FileInput);
      expect((wrapper.vm as any).open).toBeDefined();
      expect(typeof (wrapper.vm as any).open).toBe('function');
    });

    test('should expose clear method', () => {
      const wrapper = mount(FileInput);
      expect((wrapper.vm as any).clear).toBeDefined();
      expect(typeof (wrapper.vm as any).clear).toBe('function');
    });

    test('open() should trigger native input click', () => {
      const wrapper = mount(FileInput);
      const input = wrapper.find<HTMLInputElement>('input[type="file"]');
      const clickSpy = vi.spyOn(input.element, 'click');
      (wrapper.vm as any).open();
      expect(clickSpy).toHaveBeenCalled();
    });
  });

  // --- Trigger click ---
  test('clicking trigger should open file dialog', async () => {
    const wrapper = mount(FileInput);
    const input = wrapper.find<HTMLInputElement>('input[type="file"]');
    const clickSpy = vi.spyOn(input.element, 'click');
    await wrapper.find('.px-file-input__trigger').trigger('click');
    expect(clickSpy).toHaveBeenCalled();
  });
});

describe('FileInput/index', () => {
  test('should be exported with withInstall()', () => {
    expect(PxFileInput.install).toBeDefined();
  });

  test('component should be exported', () => {
    expect(PxFileInput).toBe(FileInput);
  });
});
