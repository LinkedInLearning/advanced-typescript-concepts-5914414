function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("Hello TypeScript");
logLength([2]);



function processSerializable<T extends { serialize: () => string }>(item: T) {
  console.log(item.serialize());
}

class User {
  constructor(public name: string, public age: number) {}

  serialize(): string {
    return JSON.stringify({name: this.name, age: this.age});
  }
}

const user = new User("Dione", 35);
processSerializable(user);