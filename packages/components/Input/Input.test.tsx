import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Input from './Input.vue';
import { PxInput } from './index';

describe('Input.vue', () => {
  test('render', () => {
    const wrapper = mount(Input, {
      props: {
        type: 'text',
        size: 'small',
        modelValue: 'test',
      },
      slots: {
        prepend: 'prepend',
        prefix: 'prefix',
      },
    });
    // 针对动态 class 的测试
    expect(wrapper.classes()).toContain('px-input');
    expect(wrapper.classes()).toContain('px-input--small');
    expect(wrapper.classes()).toContain('px-input--text');

    expect(wrapper.classes()).toContain('is-prefix');
    expect(wrapper.classes()).toContain('is-prepend');

    // 正确的标签和节点
    expect(wrapper.find('input').exists()).toBeTruthy();
    expect(wrapper.get('input').attributes('type')).toBe('text');

    // 针对 slots 的测试
    expect(wrapper.find('.px-input__prepend').exists()).toBeTruthy();
    expect(wrapper.get('.px-input__prepend').text()).toBe('prepend');

    expect(wrapper.find('.px-input__prefix').exists()).toBeTruthy();
    expect(wrapper.get('.px-input__prefix').text()).toBe('prefix');

    // 针对 v-if 的测试
    const wrapper2 = mount(Input, {
      props: {
        type: 'textarea',
        modelValue: 'test',
      },
    });

    expect(wrapper2.find('textarea').exists()).toBeTruthy();
  });

  test('v-model', async () => {
    const wrapper: any = mount(Input, {
      props: {
        modelValue: 'test',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        type: 'text',
      },
    });
    const input = wrapper.get('input');

    // 初始值
    expect(input.element.value).toBe('test');

    // 更新值
    // setValue 会触发 input 和 change 事件
    await input.setValue('test2');
    expect(wrapper.props('modelValue')).toBe('test2');
    expect(input.element.value).toBe('test2');

    expect(wrapper.emitted()).toHaveProperty('input');
    expect(wrapper.emitted()).toHaveProperty('change');

    const inputEvent = wrapper.emitted('input');
    const changeEvent = wrapper.emitted('change');

    expect(inputEvent![0]).toEqual(['test2']);
    expect(changeEvent![0]).toEqual(['test2']);

    // v-model 异步更新
    await wrapper.setProps({ modelValue: 'test3' });
    expect(input.element.value).toBe('test3');
  });

  test('clearable', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        clearable: true,
        type: 'text',
      },
      global: {
        stubs: ['Icon'],
      },
    });

    // 不应该出现 Icon 区域
    expect(wrapper.find('.px-input__clear').exists()).toBeFalsy();

    const input = wrapper.get('input');
    await input.trigger('focus');
    expect(wrapper.emitted()).toHaveProperty('focus');

    // 出现 Icon 区域
    expect(wrapper.find('.px-input__clear').exists()).toBeTruthy();

    // 点击 Icon 区域，触发 clear 事件
    await wrapper.get('.px-input__clear').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('clear');

    expect(wrapper.emitted()).toHaveProperty('input');
    expect(wrapper.emitted()).toHaveProperty('change');

    const inputEvent = wrapper.emitted('input');
    const changeEvent = wrapper.emitted('change');

    expect(inputEvent![0]).toEqual(['']);
    expect(changeEvent![0]).toEqual(['']);
    expect(input.element.value).toBe('');

    await input.trigger('blur');
    expect(wrapper.emitted()).toHaveProperty('blur');
  });

  test('toggle password', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        type: 'password',
        showPassword: true,
      },
      global: {
        stubs: ['Icon'],
      },
    });

    // 不应该出现 Icon 区域
    expect(wrapper.find('.px-input__password').exists()).toBeFalsy();
    const input = wrapper.get('input');

    expect(input.element.type).toBe('password');
    await input.setValue('123');

    const eyeIcon = wrapper.find('.px-input__password');
    expect(eyeIcon.exists()).toBeTruthy();
    expect(eyeIcon.attributes('icon')).toBe('eye-closed');

    // 点击 切换
    await eyeIcon.trigger('click');
    expect(input.element.type).toBe('text');
    // 缓存 Icon
    expect(wrapper.find('.px-input__password').attributes('icon')).toBe('eye');
  });

  test('disabled state', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        type: 'text',
        disabled: true,
      },
    });

    expect(wrapper.classes()).toContain('is-disabled');
    expect(wrapper.get('input').element.disabled).toBe(true);
  });

  test('readonly state', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        type: 'text',
        readonly: true,
      },
    });

    expect(wrapper.get('input').element.readOnly).toBe(true);
  });

  test('suffix slot', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        type: 'text',
      },
      slots: {
        suffix: 'suffix content',
        append: 'append content',
      },
    });

    expect(wrapper.find('.px-input__suffix').exists()).toBeTruthy();
    expect(wrapper.find('.px-input__append').exists()).toBeTruthy();
  });

  test('should expose focus, blur, select, clear methods', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        type: 'text',
      },
    });

    const vm = wrapper.vm as any;
    expect(vm.focus).toBeDefined();
    expect(vm.blur).toBeDefined();
    expect(vm.select).toBeDefined();
    expect(vm.clear).toBeDefined();
  });

  test('should handle autofocus', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        type: 'text',
        autofocus: true,
      },
    });

    expect(wrapper.get('input').element.autofocus).toBe(true);
  });

  test('should handle placeholder', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        type: 'text',
        placeholder: 'Enter text',
      },
    });

    expect(wrapper.get('input').element.placeholder).toBe('Enter text');
  });

  // --- Preset color prop tests ---
  describe('preset color', () => {
    test.each([
      'primary',
      'success',
      'warning',
      'danger',
      'info',
    ])('should apply px-input--%s class for preset color', (color) => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'text', color },
      });
      expect(wrapper.classes()).toContain(`px-input--${color}`);
    });

    test('should not apply color class when color prop is not set', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'text' },
      });
      expect(
        wrapper.classes().some((c) => /^px-input--(primary|success|warning|danger|info)$/.test(c)),
      ).toBe(false);
    });

    test('should combine color with type and size correctly', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'text', color: 'primary', size: 'large' },
      });
      expect(wrapper.classes()).toContain('px-input--primary');
      expect(wrapper.classes()).toContain('px-input--large');
      expect(wrapper.classes()).toContain('px-input--text');
    });
  });

  // --- Custom hex color prop tests ---
  describe('custom hex color', () => {
    test('should apply inline CSS variables for custom hex color', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'text', color: '#626aef' },
      });
      const style = wrapper.attributes('style') ?? '';
      expect(style).toContain('--px-input-border-color');
      expect(style).toContain('--px-input-shadow-color');
    });

    test('should apply ghost template for custom hex + ghost', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'text', color: '#626aef', ghost: true },
      });
      const style = wrapper.attributes('style') ?? '';
      expect(style).toContain('--px-input-border-color: transparent');
    });
  });

  // --- Ghost prop tests ---
  describe('ghost', () => {
    test('should apply is-ghost class when ghost prop is set', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'text', ghost: true },
      });
      expect(wrapper.classes()).toContain('is-ghost');
    });

    test('should not apply is-ghost class by default', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'text' },
      });
      expect(wrapper.classes()).not.toContain('is-ghost');
    });

    test('should combine ghost with preset color correctly', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'text', ghost: true, color: 'primary' },
      });
      expect(wrapper.classes()).toContain('is-ghost');
      expect(wrapper.classes()).toContain('px-input--primary');
    });
  });

  // --- Native HTML type tests ---
  describe('native HTML types', () => {
    test('should render native date input', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'date' },
      });
      expect(wrapper.get('input').attributes('type')).toBe('date');
      expect(wrapper.classes()).toContain('px-input--date');
    });

    test('should render native time input', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'time' },
      });
      expect(wrapper.get('input').attributes('type')).toBe('time');
      expect(wrapper.classes()).toContain('px-input--time');
    });

    test('should render native url input', () => {
      const wrapper = mount(Input, {
        props: { modelValue: '', type: 'url' },
      });
      expect(wrapper.get('input').attributes('type')).toBe('url');
      expect(wrapper.classes()).toContain('px-input--url');
    });
  });
});

describe('Input/index', () => {
  test('should be exported with withInstall()', () => {
    expect(PxInput.install).toBeDefined();
  });

  test('component should be exported', () => {
    expect(PxInput).toBe(Input);
  });
});
