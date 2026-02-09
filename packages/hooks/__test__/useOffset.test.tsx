import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { defineComponent, ref } from 'vue';
import useOffset from '../useOffset';

describe('hooks/useOffset', () => {
  it('topOffset should equal offset + getLastBottomOffset()', () => {
    let result: ReturnType<typeof useOffset>;
    mount(
      defineComponent({
        setup() {
          result = useOffset({
            offset: 20,
            boxHeight: ref(50),
            getLastBottomOffset: () => 0,
          });
          return () => <div />;
        },
      }),
    );
    expect(result!.topOffset.value).toBe(20);
  });

  it('bottomOffset should equal topOffset + boxHeight', () => {
    let result: ReturnType<typeof useOffset>;
    mount(
      defineComponent({
        setup() {
          result = useOffset({
            offset: 20,
            boxHeight: ref(50),
            getLastBottomOffset: () => 0,
          });
          return () => <div />;
        },
      }),
    );
    expect(result!.bottomOffset.value).toBe(70); // 20 + 50
  });

  it('should react to boxHeight changes', async () => {
    let result: ReturnType<typeof useOffset>;
    const boxHeight = ref(50);
    mount(
      defineComponent({
        setup() {
          result = useOffset({
            offset: 10,
            boxHeight,
            getLastBottomOffset: () => 0,
          });
          return () => <div />;
        },
      }),
    );
    expect(result!.bottomOffset.value).toBe(60); // 10 + 50
    boxHeight.value = 100;
    expect(result!.bottomOffset.value).toBe(110); // 10 + 100
  });

  it('should react to getLastBottomOffset changes via ref', () => {
    let result: ReturnType<typeof useOffset>;
    const lastBottom = ref(0);
    mount(
      defineComponent({
        setup() {
          result = useOffset({
            offset: 20,
            boxHeight: ref(50),
            getLastBottomOffset: () => lastBottom.value,
          });
          return () => <div />;
        },
      }),
    );
    expect(result!.topOffset.value).toBe(20); // 20 + 0
    lastBottom.value = 30;
    expect(result!.topOffset.value).toBe(50); // 20 + 30
    expect(result!.bottomOffset.value).toBe(100); // 50 + 50
  });

  it('should support stacking multiple instances', () => {
    let first: ReturnType<typeof useOffset>;
    let second: ReturnType<typeof useOffset>;
    mount(
      defineComponent({
        setup() {
          first = useOffset({
            offset: 20,
            boxHeight: ref(40),
            getLastBottomOffset: () => 0,
          });
          second = useOffset({
            offset: 20,
            boxHeight: ref(40),
            getLastBottomOffset: () => first!.bottomOffset.value,
          });
          return () => <div />;
        },
      }),
    );
    // first: topOffset=20, bottomOffset=60
    expect(first!.topOffset.value).toBe(20);
    expect(first!.bottomOffset.value).toBe(60);
    // second: topOffset=20+60=80, bottomOffset=80+40=120
    expect(second!.topOffset.value).toBe(80);
    expect(second!.bottomOffset.value).toBe(120);
  });
});
