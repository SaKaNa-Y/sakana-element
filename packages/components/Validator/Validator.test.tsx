import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { nextTick, ref } from 'vue';
import { z } from 'zod';
import { PxValidator } from './index';
import Validator from './Validator.vue';

describe('Validator.vue', () => {
  it('should render .px-validator wrapper with child content', () => {
    const wrapper = mount(Validator, {
      slots: { default: () => <input type="text" /> },
    });
    expect(wrapper.find('.px-validator').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('should show .px-validator__hint with Zod error message when validation fails', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'Required field') }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    await vm.validate().catch(() => {});

    const hint = wrapper.find('.px-validator__hint');
    expect(hint.exists()).toBe(true);
    expect(hint.text()).toBe('Required field');
  });

  it('should hide hint with is-hidden class when valid', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: 'hello',
        rules: [{ schema: z.string().min(1) }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    await vm.validate();

    const hint = wrapper.find('.px-validator__hint');
    expect(hint.classes()).toContain('is-hidden');
  });

  it('should accept rules prop with schema and optional trigger/message', () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [
          { schema: z.string().email(), trigger: 'blur', message: 'Bad email' },
          { schema: z.string().min(3), trigger: ['change', 'input'] },
        ],
      },
      slots: { default: () => <input /> },
    });
    expect(wrapper.find('.px-validator').exists()).toBe(true);
  });

  it('should auto-generate required schema when rule has required: true', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ required: true }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    await vm.validate().catch(() => {});

    const hint = wrapper.find('.px-validator__hint');
    expect(hint.classes()).not.toContain('is-hidden');
    expect(hint.text()).toContain('required');
  });

  it('should use custom message from rule instead of Zod error', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1), message: 'Custom error' }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    await vm.validate().catch(() => {});

    expect(wrapper.find('.px-validator__hint').text()).toBe('Custom error');
  });

  it('should render #hint named slot with custom error content', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'err') }],
      },
      slots: {
        default: () => <input />,
        hint: ({ message }: { message: string }) => <span class="custom-hint">⚠ {message}</span>,
      },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    await vm.validate().catch(() => {});

    expect(wrapper.find('.custom-hint').exists()).toBe(true);
    expect(wrapper.find('.custom-hint').text()).toContain('err');
  });

  it('should validate on specified trigger (change)', async () => {
    const modelValue = ref('');
    const wrapper = mount(Validator, {
      props: {
        modelValue: modelValue.value,
        rules: [{ schema: z.string().min(1, 'Required'), trigger: 'change' }],
      },
      slots: { default: () => <input /> },
    });

    // Validate with 'blur' trigger — should pass (no matching rules)
    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    const blurResult = await vm.validate('blur');
    expect(blurResult).toBe(true);

    // Validate with 'change' trigger — should fail
    await vm.validate('change').catch(() => {});
    expect(wrapper.find('.px-validator__hint').classes()).not.toContain('is-hidden');
  });

  it('should expose validate() returning Promise<boolean> and reset() clearing state', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'Required') }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
      reset: () => void;
      validateStatus: { value: string };
      validateMessage: { value: string };
    };

    // Validate — should reject
    const result = await vm.validate().catch(() => false);
    expect(result).toBe(false);

    // Reset — should clear
    vm.reset();
    await nextTick();
    expect(wrapper.find('.px-validator').classes()).not.toContain('is-error');
    expect(wrapper.find('.px-validator__hint').classes()).toContain('is-hidden');
  });

  it('should add is-error class when validation fails', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1) }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    await vm.validate().catch(() => {});

    expect(wrapper.find('.px-validator').classes()).toContain('is-error');
  });

  it('should add is-success class when validation passes', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: 'valid',
        rules: [{ schema: z.string().min(1) }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    await vm.validate();

    expect(wrapper.find('.px-validator').classes()).toContain('is-success');
  });

  it('should always keep hint area in DOM (space reserved)', () => {
    const wrapper = mount(Validator, {
      props: { modelValue: 'valid' },
      slots: { default: () => <input /> },
    });

    // Hint should exist even when no error
    expect(wrapper.find('.px-validator__hint').exists()).toBe(true);
  });

  it('should have PxValidator.install defined (withInstall)', () => {
    expect(PxValidator.install).toBeDefined();
    expect(typeof PxValidator.install).toBe('function');
  });

  it('should emit validate event after validation', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'err') }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    await vm.validate().catch(() => {});

    expect(wrapper.emitted().validate).toBeTruthy();
    expect(wrapper.emitted().validate![0]).toEqual([false, 'err']);
  });

  it('should emit validate event with true on success', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: 'hello',
        rules: [{ schema: z.string().min(1) }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as {
      validate: (trigger?: string) => Promise<boolean>;
    };
    await vm.validate();

    expect(wrapper.emitted().validate).toBeTruthy();
    expect(wrapper.emitted().validate![0]).toEqual([true, '']);
  });
});
