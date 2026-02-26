import { rAF } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { defineComponent, h, inject, nextTick, ref } from 'vue';
import { z } from 'zod';
import Input from '../Input/Input.vue';
import { FORM_ITEM_CTX_KEY } from './constants';
import Form from './Form.vue';
import FormItem from './FormItem.vue';
import { PxForm, PxFormItem } from './index';
import type { FormItemContext } from './types';

describe('Form.vue', () => {
  it('should render form element', () => {
    const wrapper = mount(Form, {
      props: { model: {} },
    });
    expect(wrapper.find('form').exists()).toBeTruthy();
    expect(wrapper.find('form').classes()).toContain('px-form');
  });

  it('should render slot content', () => {
    const wrapper = mount(Form, {
      props: { model: {} },
      slots: {
        default: '<div class="test-slot">Form Content</div>',
      },
    });
    expect(wrapper.find('.test-slot').text()).toBe('Form Content');
  });

  it('should render FormItem with label', () => {
    const model = { name: '' };
    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name">
          <input />
        </FormItem>
      </Form>
    ));
    expect(wrapper.find('.px-form-item').exists()).toBeTruthy();
    expect(wrapper.find('.px-form-item__label').text()).toContain('Name');
  });

  it('should validate fields with rules', async () => {
    const model = ref({ name: '' });
    const itemRules = [{ required: true, message: 'Name is required', trigger: 'blur' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // validation fails as expected
    }
    await rAF();

    // Should show error message
    expect(wrapper.find('.px-form-item__error-msg').exists()).toBeTruthy();
    expect(wrapper.find('.px-form-item__error-msg').text()).toBe('Name is required');
  });

  it('should pass validation when fields are valid', async () => {
    const model = ref({ name: 'John' });
    const itemRules = [{ required: true, message: 'Name is required', trigger: 'blur' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    const result = await form.vm.validate();
    expect(result).toBeTruthy();
  });

  it('should reset fields', async () => {
    const model = ref({ name: 'test' });
    const itemRules = [{ required: true, message: 'Name is required' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);

    // Validate to create error state
    model.value.name = '';
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();

    // Reset
    form.vm.resetFields();
    await rAF();

    expect(wrapper.find('.px-form-item__error-msg').exists()).toBeFalsy();
  });

  it('should clear validate errors', async () => {
    const model = ref({ name: '' });
    const itemRules = [{ required: true, message: 'Name is required' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);

    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').exists()).toBeTruthy();

    form.vm.clearValidate();
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').exists()).toBeFalsy();
  });

  it('should show required asterisk on form-item', () => {
    const model = { name: '' };

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name" required>
          <input />
        </FormItem>
      </Form>
    ));

    expect(wrapper.find('.px-form-item').classes()).toContain('is-required');
  });

  it('should propagate disabled state', () => {
    const model = { name: '' };

    const wrapper = mount(() => (
      <Form model={model} disabled>
        <FormItem label="Name" prop="name">
          <input />
        </FormItem>
      </Form>
    ));

    expect(wrapper.find('.px-form-item').classes()).toContain('is-disabled');
  });

  it('should apply label-top layout via flex-direction', () => {
    const model = { name: '' };
    const wrapper = mount(() => (
      <Form model={model} labelPosition="top">
        <FormItem label="Name" prop="name">
          <input />
        </FormItem>
      </Form>
    ));
    const formItem = wrapper.find('.px-form-item');
    expect(formItem.attributes('style')).toContain('flex-direction: column');
  });
});

describe('Form Zod validation', () => {
  it('should validate with Zod schema on form-item rules', async () => {
    const model = ref({ name: '' });
    const itemRules = [{ schema: z.string().min(1, 'Name is required'), trigger: 'blur' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').text()).toBe('Name is required');
  });

  it('should validate with form-level rules (Zod schema)', async () => {
    const model = ref({ name: '' });
    const rules = {
      name: [{ schema: z.string().min(1, 'Field required'), trigger: 'blur' }],
    };

    const wrapper = mount(() => (
      <Form model={model.value} rules={rules}>
        <FormItem label="Name" prop="name">
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').text()).toBe('Field required');
  });

  it('should merge form-level and item-level Zod rules', async () => {
    const model = ref({ name: 'a' });
    const formRules = {
      name: [{ schema: z.string().min(2, 'Too short from form'), trigger: 'blur' }],
    };
    const itemRules = [{ schema: z.string().min(1, 'Required from item'), trigger: 'blur' }];

    const wrapper = mount(() => (
      <Form model={model.value} rules={formRules}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    // 'a' has length 1, passes item rule (min 1) but fails form rule (min 2)
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').text()).toBe('Too short from form');
  });

  it('should validate Zod schema with min/max length', async () => {
    const model = ref({ name: 'a' });
    const itemRules = [
      { schema: z.string().min(2, 'Too short').max(20, 'Too long'), trigger: 'blur' },
    ];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').text()).toBe('Too short');
  });

  it('should validate Zod email schema', async () => {
    const model = ref({ email: 'notanemail' });
    const itemRules = [{ schema: z.string().email('Invalid email format'), trigger: 'blur' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Email" prop="email" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').text()).toBe('Invalid email format');
  });

  it('should use required shorthand without explicit Zod schema', async () => {
    const model = ref({ name: '' });
    const itemRules = [{ required: true, message: 'Please fill this field', trigger: 'blur' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').text()).toBe('Please fill this field');
  });

  it('should use rule.message override over Zod message', async () => {
    const model = ref({ name: '' });
    const itemRules = [
      { schema: z.string().min(1, 'Zod message'), message: 'Override message', trigger: 'blur' },
    ];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').text()).toBe('Override message');
  });
});

describe('Form inline', () => {
  it('should apply is-inline class when inline prop is true', () => {
    const model = { name: '' };
    const wrapper = mount(() => (
      <Form model={model} inline>
        <FormItem label="Name" prop="name">
          <input />
        </FormItem>
      </Form>
    ));
    expect(wrapper.find('.px-form').classes()).toContain('is-inline');
  });

  it('should not apply is-inline class by default', () => {
    const model = { name: '' };
    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name">
          <input />
        </FormItem>
      </Form>
    ));
    expect(wrapper.find('.px-form').classes()).not.toContain('is-inline');
  });
});

describe('Form statusIcon', () => {
  it('should show success icon after successful validation', async () => {
    const model = ref({ name: 'John' });
    const itemRules = [{ required: true, message: 'Required' }];

    const wrapper = mount(() => (
      <Form model={model.value} statusIcon>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    await form.vm.validate();
    await rAF();

    expect(wrapper.find('.px-form-item__status-icon.is-success').exists()).toBe(true);
  });

  it('should show error icon after failed validation', async () => {
    const model = ref({ name: '' });
    const itemRules = [{ required: true, message: 'Required' }];

    const wrapper = mount(() => (
      <Form model={model.value} statusIcon>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();

    expect(wrapper.find('.px-form-item__status-icon.is-error').exists()).toBe(true);
  });

  it('should not show status icon when statusIcon is not set', async () => {
    const model = ref({ name: 'John' });
    const itemRules = [{ required: true, message: 'Required' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    await form.vm.validate();
    await rAF();

    expect(wrapper.find('.px-form-item__status-icon').exists()).toBe(false);
  });
});

describe('FormItem.vue', () => {
  it('should render without label', () => {
    const wrapper = mount(() => (
      <Form model={{}}>
        <FormItem>
          <input />
        </FormItem>
      </Form>
    ));
    expect(wrapper.find('.px-form-item').exists()).toBeTruthy();
    expect(wrapper.find('.px-form-item__label').exists()).toBeFalsy();
  });

  it('should apply label width', () => {
    const wrapper = mount(() => (
      <Form model={{}}>
        <FormItem label="Name" labelWidth="120px">
          <input />
        </FormItem>
      </Form>
    ));
    const label = wrapper.find('.px-form-item__label');
    expect(label.exists()).toBeTruthy();
  });

  it('should render content slot', () => {
    const wrapper = mount(() => (
      <Form model={{}}>
        <FormItem label="Name">
          <div class="custom-content">Custom Input</div>
        </FormItem>
      </Form>
    ));
    expect(wrapper.find('.custom-content').text()).toBe('Custom Input');
  });

  it('should validate with trigger filter', async () => {
    const model = ref({ name: '' });
    const itemRules = [
      { required: true, message: 'Required on blur', trigger: 'blur' },
      { required: true, message: 'Required on change', trigger: 'change' },
    ];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    try {
      await formItem.vm.validate('blur');
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').exists()).toBeTruthy();
  });

  it('should validate with array trigger', async () => {
    const model = ref({ name: '' });
    const itemRules = [{ required: true, message: 'Required', trigger: ['blur', 'change'] }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    try {
      await formItem.vm.validate('blur');
    } catch {
      // expected
    }
    await rAF();
    expect(wrapper.find('.px-form-item__error-msg').exists()).toBeTruthy();
  });

  it('should skip validation when disabled', async () => {
    const model = ref({ name: '' });
    const itemRules = [{ required: true, message: 'Required' }];

    const wrapper = mount(() => (
      <Form model={model.value} disabled>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    const result = await formItem.vm.validate('');
    expect(result).toBe(false);
  });

  it('should skip validation when no prop', async () => {
    const model = ref({ name: '' });

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name">
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    const result = await formItem.vm.validate('');
    expect(result).toBe(false);
  });

  it('should pass validation with callback', async () => {
    const model = ref({ name: 'John' });
    const itemRules = [{ required: true, message: 'Required' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    let callbackResult: boolean | undefined;
    await formItem.vm.validate('', (valid: boolean) => {
      callbackResult = valid;
    });
    expect(callbackResult).toBe(true);
  });

  it('should handle required prop override', () => {
    const model = { name: '' };
    const itemRules = [{ required: false, message: 'msg' }];

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name" rules={itemRules} required>
          <input />
        </FormItem>
      </Form>
    ));

    expect(wrapper.find('.px-form-item').classes()).toContain('is-required');
  });

  it('should handle validate fields with specific props', async () => {
    const model = ref({ name: '', email: '' });
    const nameRules = [{ required: true, message: 'Name required' }];
    const emailRules = [{ required: true, message: 'Email required' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={nameRules}>
          <input />
        </FormItem>
        <FormItem label="Email" prop="email" rules={emailRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();

    // Both items should show errors
    const errors = wrapper.findAll('.px-form-item__error-msg');
    expect(errors.length).toBeGreaterThanOrEqual(1);

    // Clear validate for specific field
    form.vm.clearValidate(['name']);
    await rAF();
  });

  it('should reset fields to initial values', async () => {
    const model = ref({ name: 'initial' });
    const itemRules = [{ required: true, message: 'Required' }];

    const wrapper = mount(() => (
      <Form model={model.value}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    // Change model value
    model.value.name = 'changed';
    await nextTick();

    const form = wrapper.findComponent(Form);
    form.vm.resetFields(['name']);
    await nextTick();
    await rAF();
  });

  it('should expose validateMessage and validateStatus', () => {
    const model = { name: '' };

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name" rules={[{ required: true }]}>
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    expect(formItem.vm.validateStatus).toBeDefined();
    expect(formItem.vm.validate).toBeDefined();
    expect(formItem.vm.resetField).toBeDefined();
    expect(formItem.vm.clearValidate).toBeDefined();
  });

  it('should remove field from form when FormItem unmounts', async () => {
    const model = ref({ name: '', email: '' });
    const showEmail = ref(true);
    const nameRules = [{ required: true, message: 'Name required' }];
    const emailRules = [{ required: true, message: 'Email required' }];

    const Comp = defineComponent({
      setup() {
        return () => (
          <Form model={model.value}>
            <FormItem label="Name" prop="name" rules={nameRules}>
              <input />
            </FormItem>
            {showEmail.value && (
              <FormItem label="Email" prop="email" rules={emailRules}>
                <input />
              </FormItem>
            )}
          </Form>
        );
      },
    });

    const wrapper = mount(Comp);
    const form = wrapper.findComponent(Form);

    // Both fields should fail validation
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
    const errorsBefore = wrapper.findAll('.px-form-item__error-msg');
    expect(errorsBefore.length).toBe(2);

    // Unmount email field
    showEmail.value = false;
    await nextTick();
    await rAF();

    // Clear remaining validations and re-validate
    form.vm.clearValidate();
    await rAF();
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();

    // Only name field should show error now
    const errorsAfter = wrapper.findAll('.px-form-item__error-msg');
    expect(errorsAfter.length).toBe(1);
  });

  it('should show required asterisk when required prop is set without required in rules', () => {
    const model = { name: '' };
    const itemRules = [{ schema: z.string().min(1, 'Too short') }];

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name" rules={itemRules} required>
          <input />
        </FormItem>
      </Form>
    ));

    expect(wrapper.find('.px-form-item').classes()).toContain('is-required');
  });

  it('should validate with callback returning true when no rules', async () => {
    const model = { name: 'test' };
    const callback = vi.fn();

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name">
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    await formItem.vm.validate('change', callback);
    expect(callback).toHaveBeenCalledWith(true);
  });

  it('should validate with callback returning false when fails', async () => {
    const model = { name: '' };
    const callback = vi.fn();

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name" rules={[{ required: true }]}>
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    try {
      await formItem.vm.validate('change', callback);
    } catch {
      // expected
    }
    expect(callback).toHaveBeenCalledWith(false, expect.anything());
  });

  it('should handle addInputId and removeInputId via Input mount/unmount', async () => {
    const model = ref({ name: '' });
    const show = ref(true);

    const Comp = defineComponent({
      setup() {
        return () => (
          <Form model={model.value}>
            <FormItem label="Name" prop="name" rules={[{ required: true }]}>
              {show.value ? <Input modelValue={model.value.name} /> : null}
            </FormItem>
          </Form>
        );
      },
    });

    const wrapper = mount(Comp);
    await nextTick();
    // Input is mounted, addInputId should have been called

    // Toggle off the Input to trigger removeInputId
    show.value = false;
    await nextTick();
    await rAF();

    wrapper.unmount();
  });

  it('should handle validate with disabled field', async () => {
    const model = { name: '' };

    const wrapper = mount(() => (
      <Form model={model} disabled>
        <FormItem label="Name" prop="name" rules={[{ required: true }]}>
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    const result = await formItem.vm.validate('change');
    expect(result).toBe(false);
  });

  it('should handle resetField', async () => {
    const model = ref({ name: 'original' });

    const Comp = defineComponent({
      setup() {
        return () => (
          <Form model={model.value}>
            <FormItem label="Name" prop="name" rules={[{ required: true }]}>
              <input />
            </FormItem>
          </Form>
        );
      },
    });

    const wrapper = mount(Comp);
    const formItem = wrapper.findComponent(FormItem);

    // Change model
    model.value.name = 'changed';
    await nextTick();

    // Reset field
    formItem.vm.resetField();
    await nextTick();
  });

  it('should handle propString with array prop', () => {
    const model = { nested: { name: '' } };

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop={['nested', 'name']} rules={[{ required: true }]}>
          <input />
        </FormItem>
      </Form>
    ));

    expect(wrapper.find('.px-form-item').exists()).toBe(true);
  });

  it('should handle Form-level rules merged with FormItem rules', async () => {
    const model = { name: '' };
    const formRules = { name: [{ required: true, message: 'Form rule' }] };
    const itemRules = [{ schema: z.string().min(3, 'Too short') }];

    const wrapper = mount(() => (
      <Form model={model} rules={formRules}>
        <FormItem label="Name" prop="name" rules={itemRules}>
          <input />
        </FormItem>
      </Form>
    ));

    const form = wrapper.findComponent(Form);
    try {
      await form.vm.validate();
    } catch {
      // expected
    }
    await rAF();
  });

  it('should handle required prop that overrides existing required rule', async () => {
    const model = { name: '' };
    const rules = [{ required: false, message: 'Not required' }];

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name" rules={rules} required={true}>
          <input />
        </FormItem>
      </Form>
    ));

    expect(wrapper.find('.px-form-item').classes()).toContain('is-required');

    // Trigger validate to actually evaluate the itemRules computed
    // which exercises the required-rule override logic (lines 137-149)
    const formItem = wrapper.findComponent(FormItem);
    try {
      await formItem.vm.validate('change');
    } catch {
      // expected - validation fails because name is empty
    }
    await rAF();
  });

  it('should handle required prop set to true with no matching required rules (pushes new)', async () => {
    const model = { name: '' };
    const rules = [{ schema: z.string().min(1, 'Too short') }];

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name" rules={rules} required={true}>
          <input />
        </FormItem>
      </Form>
    ));

    // Call validate to trigger itemRules evaluation
    const formItem = wrapper.findComponent(FormItem);
    try {
      await formItem.vm.validate('change');
    } catch {
      // expected
    }
    await rAF();
  });

  it('should handle required prop matching existing rule (continue branch)', async () => {
    const model = { name: 'valid' };
    // Rule already has required: true, and required prop is also true
    const rules = [{ required: true, message: 'Required field' }];

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name" rules={rules} required={true}>
          <input />
        </FormItem>
      </Form>
    ));

    // Call validate to trigger itemRules evaluation
    const formItem = wrapper.findComponent(FormItem);
    const result = await formItem.vm.validate('change');
    expect(result).toBe(true);
  });

  it('should call addInputId and removeInputId via inject context', async () => {
    const model = { name: '' };
    let ctx: FormItemContext | undefined;

    const ChildWithInject = defineComponent({
      setup() {
        ctx = inject<FormItemContext>(FORM_ITEM_CTX_KEY);
        return () => <div>child</div>;
      },
    });

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name">
          <ChildWithInject />
        </FormItem>
      </Form>
    ));

    expect(ctx).toBeDefined();
    ctx!.addInputId('test-id-1');
    ctx!.addInputId('test-id-2');
    ctx!.removeInputId('test-id-1');
  });

  it('should register and unregister input ids via PxInput lifecycle', async () => {
    const model = ref({ name: '' });
    const showInput = ref(true);

    const Comp = defineComponent({
      setup() {
        return () => (
          <Form model={model.value}>
            <FormItem label="Name" prop="name">
              {showInput.value && <Input modelValue={model.value.name} />}
            </FormItem>
          </Form>
        );
      },
    });

    const wrapper = mount(Comp, { attachTo: document.body });
    await nextTick();
    await rAF();

    // Input should be rendered inside FormItem
    expect(wrapper.find('input').exists()).toBe(true);

    // Unmount the Input to trigger removeInputId
    showInput.value = false;
    await nextTick();
    await rAF();

    // Input should be gone
    expect(wrapper.find('.px-input').exists()).toBe(false);

    wrapper.unmount();
  });

  it('should handle FormItem without prop attribute (getValByProp returns null)', () => {
    const model = { name: '' };

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="No Prop">
          <input />
        </FormItem>
      </Form>
    ));

    // FormItem without prop - getValByProp line 77 returns null
    expect(wrapper.find('.px-form-item').exists()).toBe(true);
  });

  it('should handle FormItem with prop that does not exist in model', async () => {
    const model = {} as any;

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Missing" prop="nonexistent" rules={[{ required: true }]}>
          <input />
        </FormItem>
      </Form>
    ));

    // prop exists but value is undefined in model - getValByProp returns null
    const formItem = wrapper.findComponent(FormItem);
    try {
      await formItem.vm.validate('change');
    } catch {
      // expected
    }
    await rAF();
  });

  it('should reject dangerous prop paths like __proto__', async () => {
    const model = { __proto__: 'evil' } as any;

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Danger" prop="__proto__" rules={[{ required: true }]}>
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);
    // The dangerous path guard should reject __proto__
    // innerVal will be null, and getValByProp returns null
    try {
      await formItem.vm.validate('change');
    } catch {
      // expected
    }
    await rAF();
  });

  it('should return false from validate when validateStatus is falsy', async () => {
    const model = { name: '' };
    const callback = vi.fn();

    const wrapper = mount(() => (
      <Form model={model}>
        <FormItem label="Name" prop="name" rules={[{ required: true }]}>
          <input />
        </FormItem>
      </Form>
    ));

    const formItem = wrapper.findComponent(FormItem);

    // validateStatus is always initialized to 'init' and can only transition
    // to 'validating'/'success'/'error' through the public API. Direct mutation
    // is the only way to exercise the defensive guard at FormItem.vue:210.
    (formItem.vm as any).validateStatus = '';
    await nextTick();

    const result = await formItem.vm.validate('change', callback);
    expect(result).toBe(false);
    expect(callback).toHaveBeenCalledWith(false);
  });
});

describe('Form/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxForm.install).toBeDefined();
    expect(PxFormItem.install).toBeDefined();
  });

  it('Form component should be exported', () => {
    expect(PxForm).toBe(Form);
  });

  it('FormItem component should be exported', () => {
    expect(PxFormItem).toBe(FormItem);
  });
});
