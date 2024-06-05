function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}



function processSerializable<T extends { serialize: () => string }>(item: T) {
  console.log(item.serialize());
}
