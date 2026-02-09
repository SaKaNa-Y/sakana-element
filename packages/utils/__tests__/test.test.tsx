import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { rAF } from '../test';

describe('utils/test', () => {
  describe('rAF', () => {
    beforeEach(() => {
      vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
        cb(0);
        return 0;
      });
    });

    afterEach(() => {
      vi.unstubAllGlobals();
    });

    it('should return a Promise', () => {
      const result = rAF();
      expect(result).toBeInstanceOf(Promise);
    });

    it('should resolve after two animation frames and nextTick', async () => {
      await expect(rAF()).resolves.toBeNull();
    });
  });
});
