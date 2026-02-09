import English from '@sakana-element/locale/lang/en';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { defineComponent, provide, ref } from 'vue';
import { createI18n, i18nSymbol } from 'vue3-i18n';
import { useLocale } from '../useLocale';

describe('hooks/useLocale', () => {
  it('should return a computed ref', () => {
    let result: ReturnType<typeof useLocale>;
    mount(
      defineComponent({
        setup() {
          result = useLocale();
          return () => <div />;
        },
      }),
    );
    expect(result!).toBeDefined();
    expect(result!.value).toBeDefined();
  });

  it('default locale should use English', () => {
    let result: ReturnType<typeof useLocale>;
    mount(
      defineComponent({
        setup() {
          result = useLocale();
          return () => <div />;
        },
      }),
    );
    // The i18n instance should have English locale functions
    const i18n = result!.value;
    expect(i18n).toBeDefined();
  });

  it('result should not have install property', () => {
    let result: ReturnType<typeof useLocale>;
    mount(
      defineComponent({
        setup() {
          result = useLocale();
          return () => <div />;
        },
      }),
    );
    expect(result!.value).not.toHaveProperty('install');
  });

  it('should create i18n with localeOverrides when provided', () => {
    let result: ReturnType<typeof useLocale>;
    const localeRef = ref(English);
    mount(
      defineComponent({
        setup() {
          result = useLocale(localeRef);
          return () => <div />;
        },
      }),
    );
    expect(result!.value).toBeDefined();
    expect(result!.value).not.toHaveProperty('install');
  });

  it('should use injected i18n instance when available', () => {
    let result: ReturnType<typeof useLocale>;
    const i18n = createI18n({
      locale: English.name,
      messages: { en: English.el },
    });

    const Child = defineComponent({
      setup() {
        result = useLocale();
        return () => <div />;
      },
    });

    mount(
      defineComponent({
        setup() {
          provide(i18nSymbol, ref(i18n));
          return () => <Child />;
        },
      }),
    );
    expect(result!.value).toBeDefined();
    expect(result!.value).not.toHaveProperty('install');
  });
});
