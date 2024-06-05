export class CreateSomeClass<T> {
  create(type: { new(): T }): T {
    return new type();
  }
}