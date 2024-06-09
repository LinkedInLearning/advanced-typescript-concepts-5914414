function logClass(target: Function) {
  console.log(`Class in use: ${target.name}`);
}

@logClass
class User {
  constructor(public name: string, public age: number) { }
}

