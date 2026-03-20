import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { defineComponent, inject, nextTick, ref } from 'vue';
import { z } from 'zod';
import { FORM_ITEM_CTX_KEY } from '../Form/constants';
import type { FormItemContext } from '../Form/types';
import { PxValidator } from './index';
import type { ValidatorInstance } from './types';
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

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate().catch(() => {});

    const hint = wrapper.find('.px-validator__hint');
    expect(hint.exists()).toBe(true);
    expect(hint.text()).toBe('Required field');
  });

  it('should show success bubble (not hidden) when validation passes', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: 'hello',
        rules: [{ schema: z.string().min(1) }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate();

    const hint = wrapper.find('.px-validator__hint');
    expect(hint.classes()).not.toContain('is-hidden');
    expect(wrapper.find('.px-validator__bubble--success').exists()).toBe(true);
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

    const vm = wrapper.vm as unknown as ValidatorInstance;
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

    const vm = wrapper.vm as unknown as ValidatorInstance;
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

    const vm = wrapper.vm as unknown as ValidatorInstance;
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
    const vm = wrapper.vm as unknown as ValidatorInstance;
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

    const vm = wrapper.vm as unknown as ValidatorInstance;

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

    const vm = wrapper.vm as unknown as ValidatorInstance;
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

    const vm = wrapper.vm as unknown as ValidatorInstance;
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

    const vm = wrapper.vm as unknown as ValidatorInstance;
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

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate();

    expect(wrapper.emitted().validate).toBeTruthy();
    expect(wrapper.emitted().validate![0]).toEqual([true, '']);
  });

  it('should auto-validate on modelValue change when rule has change trigger', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: 'valid',
        rules: [{ schema: z.string().min(3, 'Too short'), trigger: 'change' }],
      },
      slots: { default: () => <input /> },
    });

    // Initially no error
    expect(wrapper.find('.px-validator').classes()).not.toContain('is-error');

    // Update to invalid value — triggers the watcher
    await wrapper.setProps({ modelValue: 'ab' });
    // Wait for watcher + async validate
    await nextTick();
    await nextTick();

    expect(wrapper.find('.px-validator').classes()).toContain('is-error');
    expect(wrapper.find('.px-validator__hint-text').text()).toBe('Too short');
  });

  it('should not auto-validate when no rules have change trigger', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: 'valid',
        rules: [{ schema: z.string().min(3, 'Too short'), trigger: 'blur' }],
      },
      slots: { default: () => <input /> },
    });

    await wrapper.setProps({ modelValue: 'ab' });
    await nextTick();
    await nextTick();

    // Should not show error because rule trigger is 'blur', not 'change'
    expect(wrapper.find('.px-validator').classes()).not.toContain('is-error');
  });

  it('should provide FormItemContext with validate that catches errors', async () => {
    let injectedCtx: FormItemContext | undefined;

    const Child = defineComponent({
      setup() {
        injectedCtx = inject(FORM_ITEM_CTX_KEY);
        return () => <span>child</span>;
      },
    });

    mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'Required') }],
      },
      slots: { default: () => <Child /> },
    });

    expect(injectedCtx).toBeDefined();

    // The provided validate should catch rejection and return false
    const result = await injectedCtx!.validate('');
    expect(result).toBe(false);
  });

  it('should pass validation when rules prop is omitted (defaults to empty)', async () => {
    const wrapper = mount(Validator, {
      props: { modelValue: '' },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    const result = await vm.validate();
    expect(result).toBe(true);
  });

  it('should filter rules by array trigger when trigger is in the array', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'Required'), trigger: ['change', 'blur'] }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    // 'change' is in the trigger array, should fail
    await vm.validate('change').catch(() => {});
    expect(wrapper.find('.px-validator').classes()).toContain('is-error');
  });

  it('should skip rules with no schema and no required flag', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: 'anything',
        rules: [{ trigger: 'change' }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    // Rule has no schema and no required — should be skipped, validation passes
    const result = await vm.validate();
    expect(result).toBe(true);
  });

  it('should use default fallback message when rule has no message and schema error has none', async () => {
    // Create a custom schema whose error has no message
    const customSchema = z.any().refine(() => false);

    const wrapper = mount(Validator, {
      props: {
        modelValue: 'test',
        rules: [{ schema: customSchema }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate().catch(() => {});

    // Should show the Zod default message (from issues[0].message)
    expect(wrapper.find('.px-validator__hint-text').text()).toBe('Invalid input');
  });

  it('should match rule without trigger property against any trigger string', async () => {
    // Rule has NO trigger property — should match all triggers
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'Required') /* no trigger */ }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    // Validate with a specific trigger — rule without trigger should still apply
    await vm.validate('blur').catch(() => {});
    expect(wrapper.find('.px-validator').classes()).toContain('is-error');
    expect(wrapper.find('.px-validator__hint-text').text()).toBe('Required');
  });

  it('should use Zod issues[0].message when rule has no custom message', async () => {
    // Schema with a specific Zod message, but rule has NO message property
    const wrapper = mount(Validator, {
      props: {
        modelValue: 'ab',
        rules: [{ schema: z.string().min(5, 'Must be at least 5 chars') }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate().catch(() => {});

    // The fallback chain: rule.message (undefined) ?? issues[0].message → Zod message
    expect(wrapper.find('.px-validator__hint-text').text()).toBe('Must be at least 5 chars');
  });

  // ── Pixel-Art Style Tests ──

  it('should render speech bubble with pixel border on error', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'Required') }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate().catch(() => {});

    expect(wrapper.find('.px-validator__bubble').exists()).toBe(true);
  });

  it('should render bubble arrow (triangle pointer) on error', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'err') }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate().catch(() => {});

    expect(wrapper.find('.px-validator__bubble-arrow').exists()).toBe(true);
  });

  it('should render pixel exclamation icon on error', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'err') }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate().catch(() => {});

    expect(wrapper.find('.px-validator__hint-icon').exists()).toBe(true);
  });

  it('should render success bubble on successful validation', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: 'valid',
        rules: [{ schema: z.string().min(1) }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate();

    expect(wrapper.find('.px-validator__hint').classes()).not.toContain('is-hidden');
    expect(wrapper.find('.px-validator__bubble--success').exists()).toBe(true);
    expect(wrapper.find('.px-validator__success-icon').exists()).toBe(true);
  });

  it('should not render success bubble when status is not success', () => {
    const wrapper = mount(Validator, {
      props: { modelValue: '' },
      slots: { default: () => <input /> },
    });

    // In init state, hint is hidden and no success bubble is rendered
    expect(wrapper.find('.px-validator__hint').classes()).toContain('is-hidden');
    expect(wrapper.find('.px-validator__bubble--success').exists()).toBe(false);
  });

  it('should add is-error class on error state (drives shake animation)', async () => {
    const wrapper = mount(Validator, {
      props: {
        modelValue: '',
        rules: [{ schema: z.string().min(1, 'err') }],
      },
      slots: { default: () => <input /> },
    });

    const vm = wrapper.vm as unknown as ValidatorInstance;
    await vm.validate().catch(() => {});

    expect(wrapper.find('.px-validator').classes()).toContain('is-error');
  });

  it('should not have is-error class when not in error state', () => {
    const wrapper = mount(Validator, {
      props: { modelValue: 'valid' },
      slots: { default: () => <input /> },
    });

    expect(wrapper.find('.px-validator').classes()).not.toContain('is-error');
  });
});
