import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, nextTick } from 'vue';

type ChangeHandler = (e: { matches: boolean }) => void;

function createMockMediaQuery(initialMatches = false) {
  const handlers: ChangeHandler[] = [];
  return {
    matches: initialMatches,
    addEventListener: vi.fn((_: string, handler: ChangeHandler) => {
      handlers.push(handler);
    }),
    removeEventListener: vi.fn((_: string, handler: ChangeHandler) => {
      const i = handlers.indexOf(handler);
      if (i >= 0) handlers.splice(i, 1);
    }),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    _trigger(newMatches: boolean) {
      handlers.forEach((h) => h({ matches: newMatches }));
    },
    _handlers: handlers,
  };
}

let useSystemTheme: typeof import('../useSystemTheme')['useSystemTheme'];
let mockMql: ReturnType<typeof createMockMediaQuery>;

describe('hooks/useSystemTheme', () => {
  beforeEach(async () => {
    vi.resetModules();
    mockMql = createMockMediaQuery(false);
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => mockMql),
    );
    const mod = await import('../useSystemTheme');
    useSystemTheme = mod.useSystemTheme;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('prefersDark should be false when system prefers light', () => {
    let result: ReturnType<typeof useSystemTheme>;
    mount(
      defineComponent({
        setup() {
          result = useSystemTheme();
          return () => <div />;
        },
      }),
    );
    expect(result!.prefersDark.value).toBe(false);
  });

  it('prefersDark should be true when system prefers dark', async () => {
    mockMql = createMockMediaQuery(true);
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => mockMql),
    );

    let result: ReturnType<typeof useSystemTheme>;
    mount(
      defineComponent({
        setup() {
          result = useSystemTheme();
          return () => <div />;
        },
      }),
    );
    expect(result!.prefersDark.value).toBe(true);
  });

  it('prefersDark should update when system preference changes', async () => {
    let result: ReturnType<typeof useSystemTheme>;
    mount(
      defineComponent({
        setup() {
          result = useSystemTheme();
          return () => <div />;
        },
      }),
    );
    expect(result!.prefersDark.value).toBe(false);
    mockMql._trigger(true);
    await nextTick();
    expect(result!.prefersDark.value).toBe(true);
  });

  it('should remove listener on unmount', () => {
    const wrapper = mount(
      defineComponent({
        setup() {
          useSystemTheme();
          return () => <div />;
        },
      }),
    );
    expect(mockMql.addEventListener).toHaveBeenCalledOnce();
    wrapper.unmount();
    expect(mockMql.removeEventListener).toHaveBeenCalledOnce();
  });

  it('prefers ref should return light by default', () => {
    let result: ReturnType<typeof useSystemTheme>;
    mount(
      defineComponent({
        setup() {
          result = useSystemTheme();
          return () => <div />;
        },
      }),
    );
    // Note: current implementation always returns 'light' - this documents the behavior
    expect(result!.prefers.value).toBe('light');
  });
});
