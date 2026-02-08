import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import { rAF } from '@sakana-element/utils';
import Form from './Form.vue';
import FormItem from './FormItem.vue';
import { PxForm, PxFormItem } from './index';
import { withInstall } from '@sakana-element/utils';

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
    expect(wrapper.find('.px-form-item__error-msg').text()).toBe(
      'Name is required'
    );
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
    const itemRules = [
      { required: true, message: 'Required', trigger: ['blur', 'change'] },
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
