import { describe, expect, it, vi } from 'vitest';

import {
  createLazyEscapeClose,
  destroyAllInstances,
  destroyAllInstancesMap,
  enforceMaxCount,
} from '../instance-management';

function createMockInstance() {
  return { props: { onDestroy: vi.fn() } };
}

function createMockCloseable() {
  return { handler: { close: vi.fn() } };
}

describe('destroyAllInstances', () => {
  it('should call onDestroy on each instance and empty the array', () => {
    const a = createMockInstance();
    const b = createMockInstance();
    // Simulate real behavior: onDestroy removes itself from the array
    const instances = [a, b];
    a.props.onDestroy.mockImplementation(() => instances.splice(instances.indexOf(a), 1));
    b.props.onDestroy.mockImplementation(() => instances.splice(instances.indexOf(b), 1));

    destroyAllInstances(instances);

    expect(a.props.onDestroy).toHaveBeenCalledOnce();
    expect(b.props.onDestroy).toHaveBeenCalledOnce();
    expect(instances).toHaveLength(0);
  });

  it('should handle empty array', () => {
    const instances: { props: { onDestroy: () => void } }[] = [];
    destroyAllInstances(instances);
    expect(instances).toHaveLength(0);
  });
});

describe('destroyAllInstancesMap', () => {
  it('should iterate map entries and destroy all instances', () => {
    const a = createMockInstance();
    const b = createMockInstance();
    const listA = [a];
    const listB = [b];
    a.props.onDestroy.mockImplementation(() => listA.splice(0, 1));
    b.props.onDestroy.mockImplementation(() => listB.splice(0, 1));

    const map = new Map<string, typeof listA>();
    map.set('top-right', listA);
    map.set('bottom-left', listB);

    destroyAllInstancesMap(map);

    expect(a.props.onDestroy).toHaveBeenCalledOnce();
    expect(b.props.onDestroy).toHaveBeenCalledOnce();
    expect(listA).toHaveLength(0);
    expect(listB).toHaveLength(0);
  });
});

describe('enforceMaxCount', () => {
  it('should remove oldest when length >= max', () => {
    const a = createMockInstance();
    const b = createMockInstance();
    const c = createMockInstance();
    const instances = [a, b, c];
    a.props.onDestroy.mockImplementation(() => instances.splice(instances.indexOf(a), 1));
    b.props.onDestroy.mockImplementation(() => instances.splice(instances.indexOf(b), 1));

    enforceMaxCount(instances, 2);

    // Should have removed oldest instances until length < max
    expect(instances.length).toBeLessThan(2);
  });

  it('should be no-op when under max', () => {
    const a = createMockInstance();
    const instances = [a];

    enforceMaxCount(instances, 5);

    expect(a.props.onDestroy).not.toHaveBeenCalled();
    expect(instances).toHaveLength(1);
  });
});

describe('createLazyEscapeClose', () => {
  it('register() adds keydown listener', () => {
    const addSpy = vi.spyOn(document, 'addEventListener');
    const closeable = createMockCloseable();
    const { register } = createLazyEscapeClose(() => closeable);

    register();

    expect(addSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    addSpy.mockRestore();
    // cleanup
    const { unregister } = createLazyEscapeClose(() => closeable);
    unregister();
  });

  it('unregister() removes listener when count reaches 0', () => {
    const removeSpy = vi.spyOn(document, 'removeEventListener');
    const closeable = createMockCloseable();
    const escapeHandler = createLazyEscapeClose(() => closeable);

    escapeHandler.register();
    escapeHandler.unregister();

    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    removeSpy.mockRestore();
  });

  it('Escape key calls getLatestCloseable().handler.close()', () => {
    const closeable = createMockCloseable();
    const escapeHandler = createLazyEscapeClose(() => closeable);

    escapeHandler.register();
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));

    expect(closeable.handler.close).toHaveBeenCalledOnce();
    escapeHandler.unregister();
  });

  it('Escape key with undefined closeable does nothing', () => {
    const escapeHandler = createLazyEscapeClose(() => undefined);

    escapeHandler.register();
    // Should not throw
    expect(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    }).not.toThrow();
    escapeHandler.unregister();
  });

  it('non-Escape key does not trigger close', () => {
    const closeable = createMockCloseable();
    const escapeHandler = createLazyEscapeClose(() => closeable);

    escapeHandler.register();
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter' }));

    expect(closeable.handler.close).not.toHaveBeenCalled();
    escapeHandler.unregister();
  });

  it('multiple register/unregister cycles work correctly', () => {
    const closeable = createMockCloseable();
    const escapeHandler = createLazyEscapeClose(() => closeable);

    // First cycle
    escapeHandler.register();
    escapeHandler.unregister();

    // Second cycle
    escapeHandler.register();
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    expect(closeable.handler.close).toHaveBeenCalledOnce();
    escapeHandler.unregister();

    // After full unregister, Escape should not trigger close
    closeable.handler.close.mockClear();
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    expect(closeable.handler.close).not.toHaveBeenCalled();
  });

  it('does not remove listener when count > 0 after unregister', () => {
    const removeSpy = vi.spyOn(document, 'removeEventListener');
    const closeable = createMockCloseable();
    const escapeHandler = createLazyEscapeClose(() => closeable);

    escapeHandler.register();
    escapeHandler.register();
    escapeHandler.unregister(); // count = 1, should not remove

    expect(removeSpy).not.toHaveBeenCalledWith('keydown', expect.any(Function));

    escapeHandler.unregister(); // count = 0, should remove
    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

    removeSpy.mockRestore();
  });
});
