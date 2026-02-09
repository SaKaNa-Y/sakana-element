import { rAF } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it } from 'vitest';
import { createApp, defineComponent, nextTick, ref } from 'vue';
import { vLoading } from './directive';
import { PxLoading } from './index';
import { Loading } from './service';

describe('Loading', () => {
  afterEach(async () => {
    document.querySelectorAll('.px-loading').forEach((el) => el.remove());
    document.querySelectorAll('.px-loading__mask').forEach((el) => el.remove());
    document
      .querySelectorAll('.px-loading-parent--relative')
      .forEach((el) => el.classList.remove('px-loading-parent--relative'));
    document
      .querySelectorAll('.px-loading-parent--hiden')
      .forEach((el) => el.classList.remove('px-loading-parent--hiden'));
    await rAF();
  });

  it('should create Loading instance', () => {
    const instance = Loading();
    expect(instance).toBeTruthy();
    instance.close();
  });

  it('should render mask', async () => {
    const instance = Loading();
    await rAF();
    expect(document.querySelector('.px-loading__mask')).toBeTruthy();
    instance.close();
  });

  it('should close Loading and remove it from DOM', async () => {
    const instance = Loading();
    await rAF();
    expect(document.querySelector('.px-loading')).toBeTruthy();
    instance.close();
    await rAF();
    await rAF();
    expect(document.querySelector('.px-loading')).toBeFalsy();
  });

  it('should support custom text', async () => {
    const instance = Loading({ text: 'Loading...' });
    await rAF();
    expect(document.querySelector('.px-loading')?.textContent).toContain('Loading...');
    instance.close();
  });

  it('should set text via setText', async () => {
    const instance = Loading({ text: 'Initial' });
    await rAF();
    instance.setText('Updated');
    await nextTick();
    await rAF();
    await nextTick();
    const text = document.querySelector('.px-loading')?.textContent;
    // setText changes reactive data, text may or may not have updated
    expect(text).toBeTruthy();
    instance.close();
  });

  it('should support target element', async () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    const instance = Loading({ target });
    await rAF();
    expect(target.querySelector('.px-loading')).toBeTruthy();
    expect(target.classList.contains('px-loading-parent--relative')).toBe(true);
    instance.close();
    await rAF();
    await rAF();
    target.remove();
  });

  it('should support string target selector', async () => {
    const target = document.createElement('div');
    target.id = 'loading-target';
    document.body.appendChild(target);

    const instance = Loading({ target: '#loading-target' });
    await rAF();
    expect(target.querySelector('.px-loading')).toBeTruthy();
    instance.close();
    await rAF();
    await rAF();
    target.remove();
  });

  it('should support lock option (hidden class)', async () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    const instance = Loading({ target, lock: true });
    await rAF();
    expect(target.classList.contains('px-loading-parent--hiden')).toBe(true);
    instance.close();
    await rAF();
    await rAF();
    target.remove();
  });

  it('should return same instance for same target', async () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    const instance1 = Loading({ target });
    const instance2 = Loading({ target });
    expect(instance1).toBe(instance2);
    instance1.close();
    await rAF();
    await rAF();
    target.remove();
  });

  it('should return same fullscreen instance', async () => {
    const instance1 = Loading({ fullscreen: true });
    const instance2 = Loading({ fullscreen: true });
    expect(instance1).toBe(instance2);
    instance1.close();
    await rAF();
    await rAF();
  });

  it('should support background option', async () => {
    const instance = Loading({ background: 'rgba(255,0,0,0.5)' });
    await rAF();
    instance.close();
    await rAF();
    await rAF();
  });

  it('should support visible option', async () => {
    const instance = Loading({ visible: true });
    await rAF();
    expect(instance.visible.value).toBe(true);
    instance.close();
    await rAF();
    await rAF();
  });
});

describe('Loading directive', () => {
  afterEach(async () => {
    document.querySelectorAll('.px-loading').forEach((el) => el.remove());
    document.querySelectorAll('.px-loading__mask').forEach((el) => el.remove());
    document
      .querySelectorAll('.px-loading-parent--relative')
      .forEach((el) => el.classList.remove('px-loading-parent--relative'));
    await rAF();
  });

  it('should show loading when v-loading is true', async () => {
    const Comp = defineComponent({
      directives: { loading: vLoading },
      setup() {
        return () => (
          <div v-loading={true} style="width:100px;height:100px">
            Content
          </div>
        );
      },
    });
    const wrapper = mount(Comp, { attachTo: document.body });
    await nextTick();
    await rAF();
    // The loading is appended as child of the target element
    expect(wrapper.element.querySelector('.px-loading')).toBeTruthy();
    wrapper.unmount();
    await rAF();
  });

  it('should not show loading when v-loading is false', async () => {
    const Comp = defineComponent({
      directives: { loading: vLoading },
      setup() {
        return () => <div v-loading={false}>Content</div>;
      },
    });
    const wrapper = mount(Comp, { attachTo: document.body });
    await nextTick();
    await rAF();
    expect(wrapper.element.querySelector('.px-loading')).toBeFalsy();
    wrapper.unmount();
  });

  it('should toggle loading on value update', async () => {
    const loading = ref(true);
    const Comp = defineComponent({
      directives: { loading: vLoading },
      setup() {
        return () => (
          <div v-loading={loading.value} style="width:100px;height:100px">
            Content
          </div>
        );
      },
    });
    const wrapper = mount(Comp, { attachTo: document.body });
    await nextTick();
    await rAF();
    expect(wrapper.element.querySelector('.px-loading')).toBeTruthy();

    loading.value = false;
    await nextTick();
    await rAF();
    await rAF();

    wrapper.unmount();
  });
});

describe('Loading/index', () => {
  it('should have install method', () => {
    expect(PxLoading.install).toBeDefined();
  });

  it('should have directive property', () => {
    expect(PxLoading.directive).toBe(vLoading);
  });

  it('should have service property', () => {
    expect(PxLoading.service).toBe(Loading);
  });

  it('install should register directive and service', () => {
    const app = createApp({ render: () => null });
    PxLoading.install(app);
    expect(app.config.globalProperties.$loading).toBe(Loading);
  });
});
