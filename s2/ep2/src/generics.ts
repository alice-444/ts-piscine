export function firstElement<T>(array: T[]): T {
  if (array.length === 0) {
    throw new Error("Array is empty");
  } else {
    return array[0];
  }
}
