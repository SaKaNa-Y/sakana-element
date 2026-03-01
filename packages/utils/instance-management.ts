/**
 * Shared utilities for imperative component instance management
 * (used by Message and Notification methods.ts).
 */

interface Destroyable {
  props: { onDestroy(): void };
}

interface Closeable {
  handler: { close(): void };
}

/**
 * Forcefully unmount all instances in a flat array, bypassing CSS transitions.
 */
export function destroyAllInstances(instances: Destroyable[]): void {
  while (instances.length) {
    instances[0].props.onDestroy();
  }
}

/**
 * Forcefully unmount all instances across a Map of position-keyed arrays.
 */
export function destroyAllInstancesMap(instancesMap: Map<string, Destroyable[]>): void {
  instancesMap.forEach((instances) => destroyAllInstances(instances));
}

/**
 * Destroy oldest instances that exceed the maximum count.
 */
export function enforceMaxCount(instances: Destroyable[], max: number): void {
  while (instances.length >= max) {
    instances[0].props.onDestroy();
  }
}

/**
 * Create a lazy global Escape key listener that is only active when
 * at least one instance exists. Call `register()` when an instance is
 * created and `unregister()` when an instance is destroyed.
 *
 * @param getLatestCloseable - returns the instance to close on Escape, or undefined
 */
export function createLazyEscapeClose(getLatestCloseable: () => Closeable | undefined) {
  let listenerRegistered = false;
  let instanceCount = 0;

  const handler = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      getLatestCloseable()?.handler.close();
    }
  };

  return {
    /** Call when an instance is created. */
    register() {
      instanceCount++;
      if (!listenerRegistered) {
        document.addEventListener('keydown', handler);
        listenerRegistered = true;
      }
    },
    /** Call when an instance is destroyed. */
    unregister() {
      instanceCount--;
      if (instanceCount <= 0) {
        document.removeEventListener('keydown', handler);
        listenerRegistered = false;
        instanceCount = 0;
      }
    },
  };
}
