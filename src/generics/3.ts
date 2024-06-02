function merge<T extends object>(objA: T, objB: T): object {
  return Object.assign(objA, objB);
}
