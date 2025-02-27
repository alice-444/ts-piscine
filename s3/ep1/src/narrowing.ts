export const treatValue = (value: number | string) => {
  if (typeof value === "string") {
    return value.length
  }
  return value * 2;
};
