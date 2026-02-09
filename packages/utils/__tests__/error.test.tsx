import { describe, expect, it, vi } from 'vitest';

import { debugWarn, throwError } from '../error';

describe('error', () => {
  it('throwError should be worked', () => {
    expect(() => {
      throwError('scope', 'msg');
    }).toThrowError('[scope]:msg');
  });
  it('debugWarn should be worked', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    debugWarn('scope', 'msg');
    debugWarn(new SyntaxError('custom error'));
    // debugWarn is currently a no-op, so console.warn should not be called
    expect(warn.mock.calls).toMatchInlineSnapshot(`[]`);
    warn.mockRestore();
  });
});
