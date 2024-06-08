type AvailableDrinks = "Coffee" | "Tea" | "Water" | "Soda";
type NonCaffeinated = Exclude<AvailableDrinks, "Coffee" | "Tea">;

type SomeDrinks = Extract<AvailableDrinks, "Coffee" | "Tea" >;

type MaybeString = string | null | undefined;
type JustString = NonNullable<MaybeString>;  // string 

function getString() {
  return "hello";
}

type MyString = ReturnType<typeof getString>;  // string

class MyClass {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

type ConstructorParams = ConstructorParameters<typeof MyClass>;  

type MyInstance = InstanceType<typeof MyClass>;  // MyClass

function greet(name: string, age: number) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

type Params = Parameters<typeof greet>;  // [string, number]

function fn(this: string, age: number) {
  console.log(this.toUpperCase());
}

type ThisParamsType = ThisParameterType<typeof fn>;  // string

const fnWithoutThis: OmitThisParameter<typeof fn> = fn.bind("Hello"); 