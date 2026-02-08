import { describe, it, expect, beforeEach, vi } from 'vitest';
import { defineComponent } from 'vue';
import { mount } from '@vue/test-utils';

let useId: typeof import('../useId')['default'];

describe('hooks/useId', () => {
  beforeEach(async () => {
    vi.resetModules();
    const mod = await import('../useId');
    useId = mod.default;
  });

  it('should generate an ID with default "er" namespace', () => {
    let id: ReturnType<typeof useId>;
    mount(
      defineComponent({
        setup() {
          id = useId();
          return () => <div />;
        },
      })
    );
    expect(id!.value).toMatch(/^er-\d+-\d+$/);
  });

  it('should generate an ID with custom namespace', () => {
    let id: ReturnType<typeof useId>;
    mount(
      defineComponent({
        setup() {
          id = useId('custom');
          return () => <div />;
        },
      })
    );
    expect(id!.value).toMatch(/^custom-\d+-\d+$/);
  });

  it('separate useId calls should produce different IDs', () => {
    let idA: ReturnType<typeof useId>;
    let idB: ReturnType<typeof useId>;
    mount(
      defineComponent({
        setup() {
          idA = useId();
          idB = useId();
          return () => <div />;
        },
      })
    );
    // Each useId() call increments the counter, producing distinct IDs
    expect(idA!.value).not.toBe(idB!.value);

    // Both share the same prefix but have different counters
    const counterA = parseInt(idA!.value.split('-').pop()!);
    const counterB = parseInt(idB!.value.split('-').pop()!);
    expect(counterB).toBeGreaterThan(counterA);
  });
});
