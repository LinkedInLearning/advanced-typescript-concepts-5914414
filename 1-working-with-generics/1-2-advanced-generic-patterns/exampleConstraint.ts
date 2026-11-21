function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

logLength("Hello TypeScript");
logLength([1, 2, 3, 4]);

function processSerializable<T extends { serialize: () => string }>(item: T) {
  console.log(item.serialize());
}

class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  serialize(): string {
    return JSON.stringify({ name: this.name, age: this.age });
  }
}

const user1 = new User("Dilshod", 21);
const user2 = {
  name: "Dilshod",
  age: 21,
  serialize: function () {
    return JSON.stringify({ name: this.name, age: this.age });
  },
};

processSerializable(user1);
processSerializable(user2);
