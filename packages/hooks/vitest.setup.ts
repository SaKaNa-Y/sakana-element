// Suppress known Vue warning for useDisabledStyle hook.
// The hook invokes slots during setup() for VNode prop mutation — a known design limitation.
const _warn = console.warn;
console.warn = (...args: unknown[]) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('Slot "default" invoked outside of the render function')
  )
    return;
  _warn(...args);
};
