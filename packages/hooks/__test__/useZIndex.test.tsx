import { describe, it, expect, beforeEach, vi } from 'vitest';
import { defineComponent } from 'vue';
import { mount } from '@vue/test-utils';

let useZIndex: typeof import('../useZIndex')['default'];

describe('hooks/useZIndex', () => {
  beforeEach(async () => {
    vi.resetModules();
    const mod = await import('../useZIndex');
    useZIndex = mod.default;
  });

  it('initialValue should default to 2000', () => {
    let result: ReturnType<typeof useZIndex>;
    mount(
      defineComponent({
        setup() {
          result = useZIndex();
          return () => <div />;
        },
      })
    );
    expect(result!.initialValue.value).toBe(2000);
  });

  it('should accept a custom initial value', () => {
    let result: ReturnType<typeof useZIndex>;
    mount(
      defineComponent({
        setup() {
          result = useZIndex(3000);
          return () => <div />;
        },
      })
    );
    expect(result!.initialValue.value).toBe(3000);
  });

  it('currentZIndex should equal zIndex + initialValue', () => {
    let result: ReturnType<typeof useZIndex>;
    mount(
      defineComponent({
        setup() {
          result = useZIndex(2000);
          return () => <div />;
        },
      })
    );
    // zIndex starts at 0, so currentZIndex = 0 + 2000
    expect(result!.currentZIndex.value).toBe(2000);
  });

  it('nextZIndex should increment the counter and return new currentZIndex', () => {
    let result: ReturnType<typeof useZIndex>;
    mount(
      defineComponent({
        setup() {
          result = useZIndex(2000);
          return () => <div />;
        },
      })
    );
    const first = result!.nextZIndex();
    expect(first).toBe(2001);
    const second = result!.nextZIndex();
    expect(second).toBe(2002);
  });

  it('two instances should share the same zIndex counter', () => {
    let resultA: ReturnType<typeof useZIndex>;
    let resultB: ReturnType<typeof useZIndex>;
    mount(
      defineComponent({
        setup() {
          resultA = useZIndex(2000);
          resultB = useZIndex(1000);
          return () => <div />;
        },
      })
    );
    resultA!.nextZIndex(); // shared zIndex becomes 1
    // A: 1 + 2000 = 2001, B: 1 + 1000 = 1001
    expect(resultA!.currentZIndex.value).toBe(2001);
    expect(resultB!.currentZIndex.value).toBe(1001);
  });
});
