export const useCodeCopy = () => {
  const clickCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
  };
  return {
    clickCopy,
  };
};
