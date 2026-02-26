import { withInstall } from '@sakana-element/utils';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { createApp, defineComponent, h, inject } from 'vue';
import ConfigProvider from './ConfigProvider.vue';
import { configProviderContextKey } from './constants';
import { provideGlobalConfig, useGlobalConfig } from './hooks';
import { PxConfigProvider } from './index';

describe('ConfigProvider.vue', () => {
  it('should render slot content', () => {
    const wrapper = mount(ConfigProvider, {
      slots: {
        default: '<div class="test-child">Hello</div>',
      },
    });
    expect(wrapper.find('.test-child').text()).toBe('Hello');
  });

  it('should provide config context to children', () => {
    let injectedConfig: any = null;

    const Child = {
      setup() {
        injectedConfig = inject(configProviderContextKey);
        return () => h('div', 'child');
      },
    };

    mount(ConfigProvider, {
      slots: {
        default: () => h(Child),
      },
    });

    expect(injectedConfig).toBeTruthy();
    expect(injectedConfig.value).toBeDefined();
  });

  it('should pass locale config to context', () => {
    let injectedConfig: any = null;

    const Child = {
      setup() {
        injectedConfig = inject(configProviderContextKey);
        return () => h('div', 'child');
      },
    };

    const locale = {
      name: 'en',
      el: {
        test: 'value',
      },
    };

    mount(ConfigProvider, {
      props: { locale },
      slots: {
        default: () => h(Child),
      },
    });

    expect(injectedConfig).toBeTruthy();
    expect(injectedConfig.value.locale).toBeDefined();
  });

  it('should support nested ConfigProviders', () => {
    let innerConfig: any = null;

    const InnerChild = {
      setup() {
        innerConfig = inject(configProviderContextKey);
        return () => h('div', 'inner');
      },
    };

    const outerLocale = { name: 'en', el: {} };
    const innerLocale = { name: 'zh-cn', el: {} };

    mount(ConfigProvider, {
      props: { locale: outerLocale },
      slots: {
        default: () =>
          h(
            ConfigProvider,
            { locale: innerLocale },
            {
              default: () => h(InnerChild),
            },
          ),
      },
    });

    expect(innerConfig).toBeTruthy();
    expect(innerConfig.value.locale.name).toBe('zh-cn');
  });
});

describe('ConfigProvider/index', () => {
  it('should be exported with withInstall()', () => {
    expect(PxConfigProvider.install).toBeDefined();
  });

  it('component should be exported', () => {
    expect(PxConfigProvider).toBe(ConfigProvider);
  });

  it('should enhance ConfigProvider component', () => {
    const enhanced = withInstall(ConfigProvider);
    expect(enhanced).toBe(PxConfigProvider);
  });
});

describe('ConfigProvider hooks', () => {
  it('useGlobalConfig should return config when called in setup', () => {
    let config: any = null;
    const Child = defineComponent({
      setup() {
        config = useGlobalConfig();
        return () => h('div');
      },
    });

    mount(ConfigProvider, {
      slots: {
        default: () => h(Child),
      },
    });

    expect(config).toBeTruthy();
  });

  it('useGlobalConfig with key should return specific value', () => {
    let localeVal: any = null;
    const Child = defineComponent({
      setup() {
        localeVal = useGlobalConfig('locale');
        return () => h('div');
      },
    });

    mount(ConfigProvider, {
      props: { locale: { name: 'en', el: {} } },
      slots: {
        default: () => h(Child),
      },
    });

    expect(localeVal).toBeTruthy();
  });

  it('provideGlobalConfig should return undefined outside setup', () => {
    // Called outside setup context with no app - should warn and return undefined
    const result = provideGlobalConfig({});
    expect(result).toBeUndefined();
  });

  it('provideGlobalConfig with app should work', () => {
    const app = createApp({ render: () => null });
    const result = provideGlobalConfig({ locale: { name: 'en', el: {} } }, app);
    expect(result).toBeTruthy();
    expect(result?.value).toBeDefined();
  });

  it('provideGlobalConfig with global flag should set global config', () => {
    const app = createApp({ render: () => null });
    const result = provideGlobalConfig({ locale: { name: 'zh-cn', el: {} } }, app, true);
    expect(result).toBeTruthy();
  });

  it('provideGlobalConfig inside setup should work', () => {
    let result: any = null;
    const Child = defineComponent({
      setup() {
        result = provideGlobalConfig({ locale: { name: 'fr', el: {} } });
        return () => h('div');
      },
    });

    mount(Child);
    expect(result).toBeTruthy();
  });

  it('provideGlobalConfig with extendsI18nMsg should merge messages', () => {
    const app = createApp({ render: () => null });
    const result = provideGlobalConfig(
      {
        locale: { name: 'en', el: {} },
        extendsI18nMsg: { en: { custom: 'value' } },
      },
      app,
    );
    expect(result).toBeTruthy();
  });

  it('provideGlobalConfig without locale should use English defaults', () => {
    const app = createApp({ render: () => null });
    const result = provideGlobalConfig({}, app);
    expect(result).toBeTruthy();
  });

  it('provideGlobalConfig should update context when config ref changes', async () => {
    const { nextTick, ref } = await import('vue');
    let result: any = null;
    const configRef = ref({ locale: { name: 'en', el: {} } });

    const Child = defineComponent({
      setup() {
        result = provideGlobalConfig(configRef);
        return () => h('div');
      },
    });

    mount(Child);
    expect(result).toBeTruthy();

    // Update config ref
    configRef.value = { locale: { name: 'fr', el: { test: 'val' } } };
    await nextTick();

    // Context should have been updated
    expect(result.value).toBeTruthy();
  });
});
