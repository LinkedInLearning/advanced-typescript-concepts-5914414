function wrapInArray<T>(item: T, multiple: boolean): T | T[] {
  return multiple ? [item] : item;
}
