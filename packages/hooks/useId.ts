import { type Ref, ref } from 'vue';

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
};

export function useId(namespace: string = 'er'): Ref<string> {
  const id = `${namespace}-${defaultIdInjection.prefix}-${defaultIdInjection.current++}`;
  return ref(id);
}

export default useId;
