namespace Data {
  export class User {
    constructor(public username: string) { }
  }

  // This will cause a compile-time error
  // export class User {  // Duplicate class name
  //   constructor(public email: string) { }
  // }
}
